import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/actions/userAction';
import { Link } from 'react-router-dom';




const UpdateProfile = () => {
  //Get the user from localstorage and pass to the initial states
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
 
  
  const [name, setName] = useState(userInfo ? userInfo.name : '');
  const [email, setEmail] = useState(userInfo ? userInfo.email : '');
  const [password, setPassword] = useState('');

 
  //Get the updated user details from store and display message
 /*const updatedProfile = useSelector(state => state.updatedProfile);
 const {user , loading, success } = updatedProfile;*/
 


  const dispatch = useDispatch();
  //submit
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(updateUser(name, email, password));
    
  };

  return (
   <div className='row container-height'>
      
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
         
           
        
          <h1 className='text-center'>Update Profile</h1>

          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Name</label>
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <Link to='/profile'>
              <button type='submit' className='btn btn-primary m-auto'>
                Update your profile
              </button>
              </Link>
              
          
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;