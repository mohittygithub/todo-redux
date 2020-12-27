import React from "react";
import { connect } from "react-redux";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          {todo.id} {todo.message}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({ todos: state.todoReducer.data });

export default connect(mapStateToProps)(TodoList);
