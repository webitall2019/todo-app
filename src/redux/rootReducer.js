const rootReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      console.log(action.payload);
      return [...state, action.payload];
    case "DELETE":
      return action.payload;
    case "CHECKED":
      const index = state.findIndex((el) => el.id === action.payload.id);
      state[index].isDone = action.payload.isDone;
      return [...state];
    default:
      return state;
  }
};
export default rootReducer;
