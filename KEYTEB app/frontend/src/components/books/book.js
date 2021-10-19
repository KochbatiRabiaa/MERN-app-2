import React from "react";
import { Link } from "react-router-dom";
import "./book.css";

// Redux
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBook } from "../../redux/actions/bookActions";



const Book = ({ title ,category,author,language, price,bookCover, pages, bookId}) => {
  
    const dispatch = useDispatch()
 
 useEffect(() => {
    //dispatch action
    dispatch(fetchBook(bookId));
   
 });
 
  

  return (
    <div className="product"  >
        <img
        className="product__image"  src={bookCover}
        alt={title}  />

      <div className="product__details">
        <p className="details__title" style={{"fontSize":"40px"}}>{title}</p>
        <p className="details__title"> By : 
        {author}</p>
        <p className="details__title">{category}</p>
        <p className="details__title">{language}</p>
        <p className="details__title">{pages}</p>
        <p className="details__price">${price}</p>
      </div>
     <div>
    
        <Link to={`/books/${bookId}`}>
        <button className="btn btn-primary"  style={{"marginTop":"100px"}} >
        View Book
        </button>
  </Link>
      </div>

   
    
    </div>
  );
};



export default Book;