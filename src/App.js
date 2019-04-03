import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';
import Header from './components/layout/Header';
import About from './components/pages/About';

import uuid from 'uuid';
import axios from 'axios';


class App extends Component {

  state = {
    todos :[
      
    ]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(
      res => this.setState({todos: res.data}))
    }

  //Mark Complete
  markCompleted = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  };

  //Delete Item
  deleteItem = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
        this.setState({todos: [...this.state.todos.filter(
      todo => todo.id !== id
        )]}));
  }


  //Add Todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    }).then(res => this.setState({todos: [...this.state.todos, res.data]}))
    
  }

  //Render
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markCompleted={this.markCompleted} deleteItem = {this.deleteItem}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}></Route>
          </div>
        
        </div>
      </Router>
    );
  }
}

export default App;
