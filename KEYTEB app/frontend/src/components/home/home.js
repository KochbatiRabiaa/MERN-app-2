import React from "react";
import "./home.css";
import bookpg from "../../assests/img/book.jpg";
import videoSource from '../../assests/'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="Container" >
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className="Content">
        <div className="SubContent" >
          <button type="button" className="btn btn-outline-dark"  style={{"padding":"10px 20px"}}>
            <Link to="/register">Register</Link>
          </button>
          <button type="button" className="btn btn-outline-dark"  style={{"padding":"10px 20px"}} >
            <Link to='/login'>Login</Link>
          </button>

          <img src={bookpg} alt="profile" style={{"size": "1000px 0"}} />
        </div>
      </div>
    </div>
  );
};

export default Home;
