import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/home/home';
import Login from './components/users/login';
import Register from './components/users/register/register';
import Profile from './components/profile/profile';
import Books from './components/books/books';
import AddBook from './components/books/addBook';
import UpdateProfile from './components/profile/updateProfile';
import './App.css'
import Cart from './components/Cart/Cart/Cart';
import { connect } from "react-redux"
import bookDetails from './components/books/bookDetails/bookDetails'




const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/books' component={Books} />
        <Route exact path='/addbook' component={AddBook} />
        <Route exact path='/user-update' component={UpdateProfile} />
        <Route exact path='/books/:id' component={bookDetails} />
        <Route exact path='/shoppingCart' component={Cart} />

     {   /*<Route exact path='/users' component={Users} />*/}
      </BrowserRouter>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};
export default  connect(mapStateToProps)(App);