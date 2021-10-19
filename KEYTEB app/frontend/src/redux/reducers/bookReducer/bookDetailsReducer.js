import {
  BOOK_DETAIL_FAIL,
  BOOK_DETAIL_REQUEST,
  BOOK_DETAIL_SUCCESS,
} from "../../actions/actionTypes";

const bookDetailsReducer =(state={product: {} }, action) => {
  switch (action.type) {
    case BOOK_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case BOOK_DETAIL_SUCCESS:
      return {
        product: action.paylood,
      };
    case BOOK_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bookDetailsReducer;
