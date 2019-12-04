import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name: 'max', age: 28 },
      {name: 'Manu', age: 29 },
      {name: 'Sophie', age: 26 }
    ]
  }

  switchNameHandler = () => {
    //console.log("test");
    this.setState({
        persons:[
          {name: 'maximilian', age: 28 },
          {name: 'Manu', age: 29 },
          {name: 'Sophie', age: 21 }
        ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, Im React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
