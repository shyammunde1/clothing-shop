import { createContext, useEffect, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils";

//as the actual value you want to acc

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_Action_Types = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const INITIAL_STATE = {
  currenUser: null,
};

const userReducer = (state, action) => {
  console.log('dispatched')
  console.log(action)
  const { type, payload } = action;

  switch (type) {
    case USER_Action_Types.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  // const value = { currentUser, setCurrentUser };

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  const {currentUser} =state;
  console.log(currentUser);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_Action_Types.SET_CURRENT_USER,user));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
