import React from 'react';
import { useHistory } from 'react-router-dom';

const Auth0ProviderCallback= () => {
    const history = useHistory()
    setTimeout(function() {
        history.push(window.localStorage.getItem('callbackUrl'))
    }, 1);
    return null
}

export default Auth0ProviderCallback;