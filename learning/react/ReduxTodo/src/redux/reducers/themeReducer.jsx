//Actions
export const TOGGLE_THEME = "TOGGLE_THEME";

//Action creator
export const toggleTheme = () => {
  return { type: TOGGLE_THEME };
};

const initialState = "light";

//Reducer
function themeReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
}

export default themeReducer;
