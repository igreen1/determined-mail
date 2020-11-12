import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BsFillTrashFill} from 'react-icons/bs'



export class DeletedItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.deleted.selected ? '#e5e5e5' : '#fff',
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
            opacity: this.props.deleted.selected ? '70%' : '100%'
        }
    }


    render() {
        const { id, profile, from, subject } = this.props.deleted;
        return (
            <div style={this.getStyle()}>
                <input className="select" 
                        type="checkbox"
                        onChange={this.props.markSelectedDeleted.bind(this, id)} /> {' '}   
                    <div className="profile" style={this.getSelectedStyle()}>{profile}</div>
                    <div className="from">
                        {from}
                        <BsFillTrashFill className="del"
                                    size={32}
                                    onClick={this.props.delDeleted.bind(this, id)} 
                                    style={this.getDelStyle()}/>
                    </div>
                    <div className="subject" style={this.getSelectedStyle()}>{subject}</div>
                    

            </div>
        )
    }
}

// PropTypes
DeletedItem.propTypes = {
    deleted: PropTypes.object.isRequired
}




export default DeletedItem;
