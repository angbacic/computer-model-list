import React, { Component } from 'react';
import './App.css';
import { connect }  from 'react-redux' 
import { addModel } from './actions.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
    data: { "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }},
    selected:{} 
  }
  this.updateSelection=this.updateSelection.bind(this)
  this.addNameHandler = this.addNameHandler.bind(this)
  
}
  addNameHandler(){
     this.props.dispatch(addModel(this.state.selected))
    }

  updateSelection(event) {
     this.setState({selected:this.state.data[event.target.value]})
    }    
    
    render() {
      return (
        <div>
        <form >
          <label>
            <select  onChange={this.updateSelection} >
              <option value="">---pick an option---</option>
              {
                Object.keys(this.state.data).map(computer=> {
                  return <option key={computer} value={computer}>{computer} </option>}
                  )
              }
            </select>
          </label>
          <button onClick={this.addNameHandler}>Add</button>
        </form>
        {this.props.payload.map((value,index)=>{
            return(
              <ul>
                <li>Manufacturer: {value.manufacturer}</li>
                <li>Year: {value.year}</li>
                <li>Origin: {value.origin}</li>
              </ul> 
            )
            })
          
        }
        </div>
      );
    }
    }

const mapStateToProps=(state)=>{
  return {
    payload: state 
  }
}
export default connect(mapStateToProps)(App);

