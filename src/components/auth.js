import React from 'react';
import FacebookLoginBtn from 'react-facebook-login';
import MicrosoftLogin from "react-microsoft-login";
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN } from '../redux/actionTypes';
import { useGoogleLogin } from 'react-google-login'

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
    const { signIn, loaded } = useGoogleLogin({
        onSuccess,
        onAutoLoadFinished,
        clientId,
        cookiePolicy,
        loginHint,
        hostedDomain,
        autoLoad,
        isSignedIn,
        fetchBasicProfile,
        redirectUri,
        discoveryDocs,
        onFailure,
        uxMode,
        scope,
        accessType,
        responseType,
        jsSrc,
        onRequest,
        prompt
      })

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
            <div>
                <FacebookLoginBtn
                    appId = '899562153883740'
                    autoLoad={true}
                    fields='name,picture'
                    callback={processFacebookLogin} />
                
                <MicrosoftLogin 
                    clientId='c974b4da-da8e-4712-b57f-b0b88e6683e1' 
                    authCallback={processMicrosoftLogin} />
            </div>
        );
    }
};

export default Auth;