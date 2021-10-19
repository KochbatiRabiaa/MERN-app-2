import { REMOVE_FROM_CART , ADD_TO_CART} from "./actionTypes";
import axios from "axios";

//Add to cart
 const addToCart = (id, qty)=> async(dispatch) => {
   const{data} = await axios.get(`http://localhost:4000/api/books/${id}`)
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data._id,
        title: data.title,
        category: data.category,
        author: data.author,
        language: data.language,
        price: data.price,
        bookCover: data.bookCover,
        pages: data.pages,
        countInStock: data.countInStock,
        qty,


      },
    });
   
  };




  

  //Remove from cart
  const removeFromCart =  (id)=>(dispatch) => {
  
     dispatch({
      type: REMOVE_FROM_CART,
      payload: id,
      },
      
     )};
  


    


  export  {addToCart,
           removeFromCart,
           }
