import React from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';


function Button(){
    return(
        <Link to = 'sign-up'>
            <button className = 'btn'>
                Sign up
            </button>
        </Link>
    )
}

export default Button;