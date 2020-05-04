import React, {Component} from 'react';

class Inputs extends Component {
  
  
    render() {
      return (
        <div>
          <form class="inputClass "action= "submit">
          <label htmlFor="tution"> Tution fee</label>
          <input type="text"  required placeholder="Tution fees (CAD)" id="tution" value={this.props.tution} onChange={(e)=>this.props.onChange(e,"tution")} />
        
          <label htmlFor="accomodation">Accomodation</label>
          <input type="text" required placeholder="accomodation (CAD)" id="accomodation" value={this.props.accomodation}onChange={(e)=>this.props.onChange(e,"accomodation")} />

          <label htmlFor="transportation">Transportation</label>
          <input type="text" required placeholder="transportation (CAD)" id="transportation" value={this.props.transportation} onChange={(e)=>this.props.onChange(e,"transportation")}/>

          <label htmlFor="foods">Foods</label>
          <input type="text" required placeholder="foods (CAD)" id="foods" value={this.props.foods} onChange={(e)=>this.props.onChange(e,"foods")} />

          <label htmlFor="total">Total</label>
          <input type="text" name="total" id="total"  value={this.props.total} onChange={(e)=>this.props.onChange(e,"sum")}  />
          
          </form>
        
        </div>
      ) 
      
    }
  }

  export default Inputs;