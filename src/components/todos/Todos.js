import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

export class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markCompleted ={this.props.markCompleted}
        deleteItem = {this.props.deleteItem}/>
    ));
  }
}

//PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default Todos;
