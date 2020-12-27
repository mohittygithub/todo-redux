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
    default:
      return state;
  }
};

export default todos;
