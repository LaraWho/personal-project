import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/main.css';

import Nav from './Nav';

class Notebook extends Component {
    // constructor() {
    //     super()
    // }


render() {
        return(
            <div>
               <Nav /> 
               
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.id,
        title: state.title,
        location: state.location,
        date: state.date,
        text: state.text,
        image: state.image
    }
}

export default connect(mapStateToProps)(Notebook);