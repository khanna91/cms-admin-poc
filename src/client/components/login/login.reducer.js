import persistReducer from 'redux-persist/lib/persistReducer';
import storage from 'redux-persist/lib/storage';
import * as types from './login.actionType';

const persistConfig = {
  key: 'Login',
  storage,
  whitelist: [
    /* keys to be persisted */
  ],
};

const initialState = {};

function Login(state = initialState, action) { // NOSONAR
  switch (action.type) {  // eslint-disable-line
    case types.LOGIN_TEST:
      return {
        ...state,
        loading: true
      };

    case types.LOGIN_TEST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true
      };

    default:
      return state;
  }
}

export default persistReducer(persistConfig, Login);
