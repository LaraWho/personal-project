import React, { Component } from 'react';
import Login from './Login';
import '../styles/main.css';

class Map extends Component {


render() {
        return(
        <div>
           <div className="space-bg">
                <div className="home-title">
                    <h1>Time <br/> to <br/> Travel</h1>
                    <Login />
                </div>
           </div>

        </div>
        )
    }
}

export default Map;