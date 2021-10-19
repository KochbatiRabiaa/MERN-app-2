import { BOOK_DETAIL_FAIL, BOOK_DETAIL_REQUEST, BOOK_DETAIL_SUCCESS, 
         BOOK_UPDATE_FAIL, BOOK_UPDATE_REQUEST, BOOK_UPDATE_SUCCESS,
         CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS,
         DELETE_BOOK_FAIL,DELETE_BOOK_REQUEST,  DELETE_BOOK_SUCCESS,
         FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS } from "./actionTypes"
import axios from 'axios'

const createBookAction=(bookData)=>{
    return async (dispach)=>{
    try {   
         dispach({
        type:CREATE_BOOK_REQUEST,
    
    })
    const config = {
        'content-type' : 'application/json'
    }
    const {data}= await axios.post('http://localhost:4000/api/books', bookData, config)
console.log(bookData)
    dispach({
        type: CREATE_BOOK_SUCCESS,
        payload: data
    })
}
        
     catch (error) {
         dispach ({
             type: CREATE_BOOK_FAIL,
             payload: error.response && error.response.data.message 
         })
        
    }}}



    //Fetch all books
const fetchBooksAction=()=>{
    return async (dispach)=>{
    try {   
         dispach({
        type: FETCH_BOOK_REQUEST ,
    
    })
    const config = {
        Headers:{
        'content-type' : 'application/json',
    }}
    const {data}= await axios.get('http://localhost:4000/api/books', config)

    dispach({
        type: FETCH_BOOK_SUCCESS,
        payload: data
    })
}
        
     catch (error) {
         dispach ({
             type: FETCH_BOOK_FAIL,
             payload: error.response && error.response.data.message 
         })
        
    }}}



    
//Fetch a signle book
 const fetchBook = (id, bookData) => {
  
    return async dispatch => {
      try {
        dispatch({
          type: BOOK_DETAIL_REQUEST,
          loading: true,
        });
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        
        const {data} = await axios.get(`http://localhost:4000/api/books/${id}`,bookData, config);
        

  
        dispatch({
          type: BOOK_DETAIL_SUCCESS,
          payload: data,
        });
      } catch (error) {
        dispatch({
          type: BOOK_DETAIL_FAIL,
          error: error.response && error.response.data.message,
        });
      }
    };
  };


    //UPDATE BOOK

 const updateBook = (id, bookData) => {
  return async dispatch => {
    try {
      dispatch({
        type: BOOK_UPDATE_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.put(`http://localhost:4000/api/books/${id}`, bookData, config);
      dispatch({
        type: BOOK_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_UPDATE_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};


//delete a book

 const deleteBook = id => {
    return async dispatch => {
      try {
        dispatch({
          type: DELETE_BOOK_REQUEST,
          loading: true,
        });
  
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const { data } = await axios.delete(`http://localhost:4000/api/books/${id}`, config);
        dispatch({
          type: DELETE_BOOK_SUCCESS,
          payload: data,
        });
  
        dispatch({
          type: FETCH_BOOK_SUCCESS,
        });
      } catch (error) {
        dispatch({
          type: DELETE_BOOK_FAIL,
          loading: false,
          error: error.response && error.response.data.message,
        });
      }
    };
  };

    export {createBookAction , fetchBooksAction, updateBook, deleteBook, fetchBook};
