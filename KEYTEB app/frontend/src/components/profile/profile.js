import React, { useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import {getUserProfile} from '../../redux/actions/userAction'
import './profile.css';
import pic from '../../assests/img/bookpic.jpg';

import { Link } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
  dispatch (getUserProfile());
    
  }, [dispatch])
  const { books } = useSelector(state => {
    return state.booksList;})
   const userProfile = useSelector(state => state.userProfile)
   const {error , user, loading }= userProfile

   
   
  return (
    <>
    {error && <h2>{error}</h2>}
    {loading ?( <h2>Loading...</h2>):(
      <div className='container'>
        <div className='row'>
          <div className='col mt-5'>
            <div className='card m-auto ' style={{ width: '50%' }}>
              <img src={pic} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{user?.email}</h5>
                <p className='card-text'>{user?.name}</p>
                <Link to='/user-update' className='btn btn-primary'>
                  Update your profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>)
}
{books && books.map(book => {
                      return (
                        <>
<div class="card" style={{width: "18rem"}}>
                          <img class="card-img-top" src={book.bookCover} alt=""/>
                            <h2  class="card-title">{book.title}</h2>
                            <h4  class="card-title">{book.category}</h4>
                            <h5  class="card-title">{book.author}</h5>
                            <p class="card-text">{book.description}</p>
                            <p class="card-text">{book.price}</p>
                             <a href="#" class="btn btn-primary">Go somewhere</a>
                          </div>
        
    </>
  )})}
  </>)
};

export default Profile;