import React from 'react';
import { LOGIN } from '../redux/actionTypes';
import Facebook from './auth';
import Login from './login';


const Header = () => {
    return (
        <header>
            <Login >
            </Login>
            <h1>
            <span>Segmented Woodturning</span>
            </h1>
        </header>

    );
}

export default Header;
