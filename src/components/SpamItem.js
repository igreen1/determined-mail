import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BsFillTrashFill} from 'react-icons/bs'



export class SpamItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.spam.selected ? '#e5e5e5' : '#fff',
            padding: '30px',
            borderBottom: '1px #000000 solid',
            borderLeft: '1px #ccc solid',
            borderRight: '1px #ccc solid',
            textDecoration: 'none'
            }
    }
     getDelStyle = () => {
         return {
            background: '#c9fdff',
            color: '#000000',
            border: 'none',
            padding: '6px 8px',
            marginTop: '20px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right',
         }       
    }

    getSelectedStyle = () => {
        return {
            opacity: this.props.spam.selected ? '70%' : '100%'
        }
    }


    render() {
        const { id, profile, from, subject } = this.props.spam;
        return (
            <div style={this.getStyle()}>
                <input className="select" 
                        type="checkbox"
                        onChange={this.props.markSelectedSpam.bind(this, id)} /> {' '}   
                    <div className="profile" style={this.getSelectedStyle()}>{profile}</div>
                    <div className="from">
                        {from}
                        <BsFillTrashFill className="del"
                                    size={32}
                                    onClick={this.props.delSpam.bind(this, id)} 
                                    style={this.getDelStyle()}/>
                    </div>
                    <div className="subject" style={this.getSelectedStyle()}>{subject}</div>
                    

            </div>
        )
    }
}

// PropTypes
SpamItem.propTypes = {
    spam: PropTypes.object.isRequired
}




export default SpamItem;
