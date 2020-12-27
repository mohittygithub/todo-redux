const actions = { ADD_TODO: "ADD_TODO", DELETE_TODO: "DELETE TODO" };

export const addTodo = (message) => ({
  type: actions.ADD_TODO,
  message,
  id: Math.random(),
});

export const deleteTod = (id) => ({
  action: actions.DELETE_TODO,
  id,
});

export default actions;
