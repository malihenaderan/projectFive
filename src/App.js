import React, {Component} from 'react';
import Inputs from './Inputs.js';
import axios from 'axios';
import './App.css';


class App extends Component {
  constructor(){
    super();
    this.state ={
      rates:[],
      conversionRates:[],
      ratesNumers:[],
      tution:"",
      accomodation:"",
      transportation:"",
      foods:"",
      total:0,
      newTotal:"",
      userChoice:"",
      showTotal:false

    }
    
  }
 
  componentDidMount() {
    axios({
      url: `https://prime.exchangerate-api.com/v5/dabf728b046cca5ce5db9310/latest/CAD`,
      method: `GET`,
      responseType: `json`,
      params: {
        access_key: `dabf728b046cca5ce5db9310`
      }
    })
    .then( (response) => {
      
      const rates= response.data.conversion_rates;
      const ratesArray=[];
      for(const rateName in rates){
        const oneRate = {
          rateValue:rates[rateName],
          currencyName:rateName
        };  
        ratesArray.push(oneRate);
      }
      const conversionRates = Object.keys(rates);
      const ratesNumers = Object.values(rates);
      this.setState({
        rates: ratesArray,
        conversionRates:conversionRates,
        ratesNumers:ratesNumers
      })
    })
  }
  
 
  handleChange=(event, eventType)=> {
    
    const newTotal=this.state.total+parseInt(event.target.value ,10)
    this.setState({
      [eventType]:event.target.value,
      total:newTotal
    })
  }
 
  getUserChoice=(event)=>{
    this.setState({
        userChoice:event.target.value
    })
  }
 
  handleSubmit = (event) => {
    event.preventDefault();
   const calculate = this.state.total*this.state.userChoice
 
    this.setState({
    calculate:calculate,
    showTotal:true
    })
    
  }
 
  render(){
  
    return (
      <div className="app wrapper">
        <header><h1>How much is your expenses?</h1></header>

      <Inputs 
      type="text" 
      onChange={this.handleChange}
      tution={this.state.tution} 
      accomodation={this.state.accomodation}
      transportation={this.state.transportation}
      foods={this.state.foods}
      total={this.state.total}
      />

      <form action=""  onSubmit={this.handleSubmit}  >
        <select className="select" onChange={this.getUserChoice} value={this.state.userChoice}  name="rateChange" id="rateChange">
            {
              this.state.rates.map((rate)=>{
              return (<option value={rate.rateValue}>{rate.currencyName}</option>)
              })
            }
      
        </select>

        <button className="btn" type="submit"  >Calculate</button>
        </form>

      {
        this.state.showTotal 
      ? <h2>the total is {this.state.calculate}</h2>
        : null
      }
     
      </div>
      
    );
  }
 
}

export default App;
