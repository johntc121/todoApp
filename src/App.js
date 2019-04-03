import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos/Todos'
import AddTodo from './components/todos/AddTodo'
import Header from './components/layout/Header'

class App extends Component {

  state = {
    todos :[
      {
        id: 1,
        title: 'Do homework',
        completed: false
      },
      {
        id: 2,
        title: 'Go shopping',
        completed: false
      },
      {
        id: 3,
        title: 'Make dinner',
        completed: false
      }
    ]
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
    this.setState({todos: [...this.state.todos.filter(
      todo => todo.id !== id
      )]});
  }

  //Render
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markCompleted={this.markCompleted} deleteItem = {this.deleteItem}/>
        </div>
        
      </div>
    );
  }
}

export default App;
