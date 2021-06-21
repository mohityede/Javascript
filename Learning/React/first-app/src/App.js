// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies'
import Counter2 from './components/counter2';
import Navbar from './components/navbar';

class App extends Component {
  state={
    counters : [
        { id: 1, value: 0},
        { id: 2, value: 0},
        { id: 3, value: 0},
        { id: 4, value: 0}
    ]
  }

  handleDelete = counterId =>{
      const remainCounter = this.state.counters.filter(c => c.id !== counterId);
      this.setState({counters : remainCounter });
  }

  handleReset = ()=>{
      const counters = this.state.counters.map(c => {
          c.value = 0
          return c;
      });
      this.setState({counters}) // because both are same
  }

  addOne = counter=>{
      const counters = [...this.state.counters]
      const index = counters.indexOf(counter)
      counters[index] = {...counter}
      counters[index].value++;
      this.setState({counters});
  }
  subOne = counter=>{
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value--;
    this.setState({counters});
}

  render(){
    return(
      <>
      {/* <Navbar totalCounters = {this.state.counters.filter(c=> c.value>0).length}></Navbar> */}
      <main className="container">
        <Counter2
          handleReset= {this.handleReset}
          counters= {this.state.counters}
          handleDelete = {this.handleDelete}
          addOne = {this.addOne}
          subOne = {this.subOne}
        ></Counter2>
        <br />
        <hr />
        <Movies></Movies>
      </main>
      </>
    );
  }
}

export default App;
