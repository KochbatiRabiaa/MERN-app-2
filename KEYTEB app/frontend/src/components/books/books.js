import React , {useEffect}from "react";
import "./books.css";
import Book from "./book";
import {useSelector , useDispatch} from 'react-redux'
import { fetchBooksAction } from "../../redux/actions/bookActions";

const Books = () => {
  const booksList = useSelector(state => state.booksList)
  const {allBooks}= booksList
  console.log(allBooks)
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch (fetchBooksAction())
 }, [dispatch])
 
  
  return (
    <div className="products">
     {allBooks && allBooks.map((product) => (
      
        <Book key={product._id} 
              bookId={product._id}
              title ={product.title} 
              title ={product.title} 
              author ={product.author} 
              language ={product.language} 
              category ={product.category} 
              bookCover ={product.bookCover} 
              pages ={product.pages} />
              
      ))}
    </div>
    
  );
};


export default Books