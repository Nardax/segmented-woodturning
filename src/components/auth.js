import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import MicrosoftLogin from "react-microsoft-login";
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../redux/actionTypes';
import GoogleLogin from 'react-google-login';

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

    const processMicrosoftLogin = (err, data) => {
        if(data) {
            dispatch({ 
                type: LOGIN, 
                name: data.authResponseWithAccessToken.account.name
            });
        };
    };

    const responseGoogle = (response) => {
    console.log(response);
    }


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
            <div id='LoginFeatures'>
                <FacebookLogin
                    appId = '899562153883740'
                    autoLoad={false}
                    fields='name,picture'
                    callback={processFacebookLogin} />
                
                <MicrosoftLogin 
                    clientId='c974b4da-da8e-4712-b57f-b0b88e6683e1' 
                    authCallback={processMicrosoftLogin} />

                <GoogleLogin
                    clientId="1073835238058-l9d65klcsm92kvo801cjjkfevtn0fqfa.apps.googleusercontent.com"
                    buttonText="Sign in With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
};

export default Auth;