import React, { Component } from 'react';
import '../styles/main.css';

class Nav extends Component {
    constructor() {
        super()
        this.state = {
            showNav: false,
            toggleAnimation: false
          }
    }

    toggleNav() {
        this.setState({
          showNav: !this.state.showNav
          
        })
      }


render() {
        return(

        <div>
            <nav>
            <div className="sidenav" onClick={() => this.toggleNav()}>
                <div className="lines">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div className="nav-menu">
                    <h3>Notes</h3>
                    <h3>Search</h3>
                    <h3>Map</h3>
                    <h3>Logout</h3>  
            </div>

            </nav>

            <div className={this.state.showNav ? 'show-nav mobile-nav' : 'mobile-nav'}>
                <div className="mobile-nav-content"></div>
                    <h3>Notes</h3>
                    <h3>Search</h3>
                    <h3>Map</h3>
                    <h3>Logout</h3>
                </div>
    
        </div>
        )
    }
}

export default Nav;