import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../../redux/actions";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          {todo.message}
          <button onClick={() => props.dispatch(deleteTodo(todo.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({ todos: state.todoReducer.data });

export default connect(mapStateToProps)(TodoList);
