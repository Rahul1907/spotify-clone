export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token: 'BQA0CP6CnpR6O0WVgHglCJC6bqKDGfflUjD6JLESRxiYpwAnEaGtKNIduag3Dg2O8jKN8gO4gqx96PfFg7ioFBy26MRalVPxQ2dR09Dow_PC0113c87voOdaSZ7WK-l9Af9Ww0CDV1qEBo9koTzClOF3rce7jbP3433kz-cjxINCweneBzBy',
};

const reducer = (state, action) => {

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
