import React, {useEffect , useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserAction } from '../../redux/actions/userAction';
import './header.css'


const Header = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;

  const shop = useSelector(state => state.shop)
  const {products}= shop

  
const [search, setSearch] = useState("")
  const bookList = useSelector(state => state.booksList)
  const {allBooks}=bookList

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    products.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [products, cartCount]);

  //logout handler

  const logoutHandler = () => {
    dispatch(logoutUserAction());
    history.push('/');
  };
  return (
    
     <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div class="container-fluid">
        <Link className='navbar-brand' to='/'>
         KEYTEB
        </Link>
  
       <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
      </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              {/* Modal  */}

              <button
                type='button'
                className='btn btn-outline-light'
                data-toggle='modal'
                data-target='#about'>
                About
              </button>

              <div
                className='modal fade'
                id='about'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLabel'>
                        How are we AND what we can do for you??
                      </h5>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      <ul className='list-group'>
                       <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          we are a very easy to handle platforme. 
                          If you have old books you wanna sell, this is the right place to go.
                          If you wanna purchace old, antique or rare books, this is the right place.
                          <hr />
                        </li>
                       
                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                         and Many more...
                          <hr />
                        </li>
                      </ul>
                    </div>
                    <div className='modal-footer'>
                  
                      <button
                        type='button'
                        className='btn btn-danger'
                        data-dismiss='modal'>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {userInfo ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/books'>
                    Books
                  </Link>
                </li>
              
             </>
            ) : (
           ''
            )}

            {/* Drop dowm */}
            {userInfo ? (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  data-toggle='dropdown'
                  href='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  {userInfo.name}
                </a>
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/profile'>
                    Profile
                  </Link>
                  <Link className='dropdown-item' to='/addbook'>
                    Add book
                  </Link>
                  <Link className='dropdown-item' to='/books'>
                    Books
                  </Link>

                  <div className='dropdown-divider'></div>
                  <button onClick={logoutHandler} className='dropdown-item'>
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              ''
            )}
          </ul>
          <form className='form-inline  my-2 my-lg-0' style={{"padding":"0 200px 0 0"}}>
            <input
              className='form-control mr-sm-2'
              type='text'
              placeholder='Search'
              onChange={(e)=>{setSearch(e.target.value)}}
            />
            {allBooks && allBooks.filter((val)=>{
              if(search === ""){return val}
              else if (val.title.toLowerCase().includes(search.toLowerCase()))
              {return val}

              }).map((val, key)=>{
                <div key={key}>
                  <p>{val.title}</p>
                  </div>
              })
            }
            <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>

          <Link to="/shoppingCart">
        <div className="navbar__cart">
          <h3 className="cart__title">Cart</h3>
          <img
            className="cart__image"
            src="https://image.flaticon.com/icons/svg/102/102276.svg"
            alt="shopping cart"
          />
          <div className="cart__counter">{cartCount}</div>
        </div>
      </Link>
  

         
    </div>
        </div>
        </nav>
      
    
  );
};


export default Header;