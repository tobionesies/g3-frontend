import { createContext, useReducer, useContext, useEffect } from 'react';

const initialState = {
  credential: {
    isAuthenticated: localStorage.getItem('token')? true: false,
    credentials: localStorage.getItem('credentials') ? JSON.parse(localStorage.getItem('credentials')) : null,
  },
  screen: {
    FEEDPAGE: true,
    UPLOADIMAGE: false,
    MYIMAGE: false,
    SINGLEPOST: false,
    SETTINGS: false,
  },
};


const credentialReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        credentials: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        credentials: null,
      };
    default:
      return state;
  }
};

const screenReducer = (state, action) => {
  const initialState = {
    FEEDPAGE: false,
    UPLOADIMAGE: false,
    MYIMAGE: false,
    SINGLEPOST: false,
    SETTINGS: false,
  };

  switch (action.type) {
    case 'SET_SCREEN':
      return {
        ...initialState,
        [action.screen]: true,
      };
    default:
      return state;
  }
};

const rootReducer = (state, action) => {
  return {
    credential: credentialReducer(state.credential, action),
    screen: screenReducer(state.screen, action),
  };
};



const  AppContext = createContext();


export const CredentialProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  // Effect to handle login
  useEffect(() => {
    if (state.isAuthenticated && state.credentials) {
      localStorage.setItem('token', state.credentials.token);
    }
  }, [state.isAuthenticated, state.credentials]);

  // Effect to handle logout
  useEffect(() => {
    if (!state.credential.isAuthenticated) {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
    }
  }, [state.credential.isAuthenticated]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useCredential must be used within a CredentialProvider');
  }

  return context;
};
