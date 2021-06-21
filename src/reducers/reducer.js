
const initialState = [];

export default (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case 'bla':
      newState = initialState
      return newState;
    default:
      return state;
  }
};