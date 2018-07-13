import React from 'react';
import '../styles/main.css';

export default function Login() {

    function login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
    let redirectUri = encodeURIComponent(
            'http://localhost:5000/auth/callback'
          );
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
  }

      return(
          <div>
              <button className="login"
              onClick={login}>Login</button>
          </div>
      )
  }


