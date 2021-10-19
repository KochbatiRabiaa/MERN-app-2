import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBookReducer } from '../reducers/bookReducer/createBookReducer';
import { bookListReducer } from '../reducers/bookReducer/bookListReducer';
import { userReducer } from '../reducers/user/userAuthReducer';
import userProfileReducer from '../reducers/user/userProfileReducer';
import updateProfileReducer from '../reducers/user/updateProfileReducer';
import shopReducer from '../reducers/shoppingCartReducer';
import bookDetailsReducer  from '../reducers/bookReducer/bookDetailsReducer';



const middlewares = [thunk];

const reducer = combineReducers({
  bookCreated: createBookReducer,
  booksList: bookListReducer,
  userLogin: userReducer, //login/register
  userProfile: userProfileReducer,
  userUpdateProfile: updateProfileReducer,
  shop: shopReducer,
  bookDetails: bookDetailsReducer

});

//Get user from localstorage

const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const initialState = {
  userLogin: { userInfo: userAuthFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export { store };