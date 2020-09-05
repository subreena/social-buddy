import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'

const Header = () => {

    const linkStyle = {
        color: 'white' ,
        margin: ' 0 10px'
    }
    return (
        <>
        <header>
           <Link to={`/getStarted`} style={linkStyle} > <h3> <i class="fa fa-smile-o" aria-hidden="true"></i> Social Buddy</h3></Link>
            <nav>
           <Link to={`/getStarted`}  style={linkStyle} >Get Started</Link>
            <Link to={`/home`} style={linkStyle} ><p>Home</p></Link>
          </nav>
        </header>
        </>
    );
};

export default Header;