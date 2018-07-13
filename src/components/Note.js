import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/main.css';

import Nav from './Nav';

class Note extends Component {
    // constructor() {
    //     super()
    // }

    handleTitleChange = val => {
        this.setState({
            title: val
        })
    }

    handleLocChange = val => {
        this.setState({
            location: val
        })
    }

    handleDateChange = val => {
        this.setState({
            date: val
        })
    }

    handleImageChange = val => {
        this.setState({
            image: val
        })
    }

    handleTextChange = val => {
        this.setState({
            text: val
        })
    }

    // handleAddNote = (note) => {

    // }


render() {
        return(
            <div>
               <div className="space-bg">
               <Nav /> 
               <div className="singleNote">
                    <input type="text"
                    placeholder=" Title..."
                    onChange={ e => this.handleTitleChange(e.target.value)}/>
                    <input type="text"
                    placeholder=" Location..."
                    onChange={ e => this.handleLocChange(e.target.value)}/>
                    <input type="text"
                    placeholder=" Date..."
                    onChange={ e => this.handleDateChange(e.target.value)}/>
                    <input type="text"
                    placeholder=" Upload Image..."
                    onChange={ e => this.handleImageChange(e.target.value)}/>
                    <button>Select Image</button>
                    <input type="text"
                    placeholder=" Type thoughts here..."/>
               </div>
               <div>
                   <button className="saveBtn">Save Note</button>
               </div>
               </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        id: state.id,
        note_title: state.note_title,
        location: state.location,
        note_date: state.note_date,
        note_text: state.note_text,
        note_image: state.note_image
    }
}

export default connect(mapStateToProps)(Note);