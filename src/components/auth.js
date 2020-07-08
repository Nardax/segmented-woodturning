import React from 'react';
import FacebookLoginBtn from 'react-facebook-login';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../redux/actionTypes';

const Auth = () => {
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
     
    const processFacebookLogin = (response) => {
        if(response.status !== 'unknown') {
            dispatch({ 
                type: LOGIN, 
                name: response.name,
                picture: response.picture.data.url
            });
        };
    };

    if(auth.isAuthenticated) {
        return (
            <div>
                <img src={auth.picture} alt={auth.name} />
                <h2> Welcome {auth.name}</h2>
            </div>
        );
    }
    else {
        return (
            <FacebookLoginBtn
                appId = '899562153883740'
                autoLoad={true}
                fields='name,picture'
                callback={processFacebookLogin} />
        );
    }
};

export default Auth;