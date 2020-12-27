import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../../redux/actions";

const AddTodo = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let input = e.target.userInput.value;
    props.dispatch(addTodo(input));
    e.target.userInput.value = "";
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="userInput" />
      <button>Submit</button>
    </form>
  );
};

export default connect()(AddTodo);
