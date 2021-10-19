import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";




  
  const shopReducer = (state ={products :[]}, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const item =action.payload
        const itemexist = state.products.find(
          (x) =>x.product=== item.product
        );

        // Check if Item is in cart already
        if(itemexist){
          return{
            ...state, products : state.products.map((x)=>x.product=== itemexist.product?item:x)
          }
        }
        else{
          return{ ...state, products :
           [...state.products, item],
          }
        }
        


      case REMOVE_FROM_CART:
        return {
          ...state,
          products: state.products.filter((x) => x.product!== action.payload),
        };

        default :
        return state
     
    }
  };
  
  export default shopReducer;