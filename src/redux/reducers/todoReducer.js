import actions from "../actions";
const initialState = {
  data: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return {
        ...state,
        data: [...state.data, { message: action.message, id: action.id }],
      };
    case actions.DELETE_TODO:
      const todos = state.data.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        data: todos,
      };
    default:
      return state;
  }
};

export default todos;
