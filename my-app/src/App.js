import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  constructor(props){
    super(props);
    this.deleteNinja = this.deleteNinja.bind(this);
  }
  state = {
    ninjas : [
      { name : 'Ryu' , age : '25', belt : 'Black', id : 1},
      { name : 'ABC', age : '27', belt : 'Yellow', id : 2 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja =>{
      return (ninja.id !== id)
    });
    this.setState({
      ninjas : ninjas
    })
  }
  componentDidMount(){
    console.log("Component Mounted");
  }

  componentDidUpdate(prevProps, prevSate){
    console.log(prevProps,prevSate);
  }

  render() {
    return (
      <div className="App">
        <p>Welcome :)</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;
