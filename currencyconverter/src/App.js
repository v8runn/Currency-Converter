
import './App.css';
import React, {Component} from 'react';

class App extends Component
{
  constructor()
  {
    super()
    this.state = 
    {
      from: "",
      to: "",
      source: 0,
      rate: 0,
      curr: 0
    }
    this.changeFrom = this.changeFrom.bind(this)
    this.changeTo = this.changeTo.bind(this)
    this.changeSource = this.changeSource.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  changeFrom(event)
  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  changeTo(event)
  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  changeSource(event)
  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleChange(event) 
  {
    var url = "https://currency-exchange.p.rapidapi.com/exchange?to=INR&from=AED&q=3.0"
    var url = url.replace("AED", this.state.from)
    var url = url.replace("INR", this.state.to)

    fetch(url, {
	  "method": "GET",
	  "headers": {
		"x-rapidapi-key": "c113d60460msh4ebf7f1d320fea4p189d45jsnccb8d7ea4d0b",
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com"
	             }
    })
    .then(response => response.json())
    .then(data => this.setState({rate: data}))
  }

  render()
  {
    return(
      <div>
        <div className="container-1">
        <h1>Currency Converter</h1>
        <div className="flex-box-container-1">
        <div>
        <input type="text" onChange= {this.changeFrom} name="from" placeholder="Enter source currency"></input>
        </div>
        <div>
        <input type="text" onChange= {this.changeTo} name="to" placeholder="Convert to"></input>
        </div>
        <div>
        <input type="number" onChange= {this.changeSource} name="source" placeholder="Amount"></input>
        </div>
        </div>
        <div>
        <button className="btn btn-light" type="button" onClick={this.handleChange}>Convert</button>
        </div>
        <div>
        <p>{this.state.source} {this.state.from} is equivalent to {this.state.rate*this.state.source} {this.state.to}</p>
      </div>
      </div>
      </div>
    )
  }
}


export default App;
