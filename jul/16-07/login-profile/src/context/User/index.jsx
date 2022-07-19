import { createContext, useReducer } from "react";

export const UserContext = createContext(null);
export const ACTIONS = {
  LOG_IN_SUCCESS: "LOG_IN_SUCCESS",
  UPDATE_USERNAME: "UPDATE_USERNAME",
};
const initialState = null;
const reducer = (state, action) => {
  //   console.log(state, action);
  switch (action.type) {
    case ACTIONS.LOG_IN_SUCCESS:
      return { user: action.user };
    case ACTIONS.UPDATE_USERNAME:
      return { user: { ...state.user, username: action.username } };
    default:
      return state;
  }
};

export default function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
