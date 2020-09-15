import React from 'react';
import { LOGIN } from '../redux/actionTypes';
import Facebook from './auth';
import Login from './login';

const Header = () => {
    return (
        <header>
            <h1>
            <span>Segmented Woodturning  
            <Login >
            </Login>
            </span>
            </h1>
        </header>

    );
}

export default Header;
