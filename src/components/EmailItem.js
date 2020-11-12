import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';


export class EmailItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.email.selected ? '#e5e5e5' : '#fff',
            padding: '30px',
            borderBottom: '1px #AAAAAA solid',
            borderLeft: '1px #AAAAAA solid',
            borderRight: '1px #AAAAAA solid',
            textDecoration: 'none'
        }
    }
    getDelStyle = () => {
        return {
            background: '#c9fdff',
            color: '#000000',
            border: 'none',
            padding: '6px 8px',
            marginTop: '-40px',
            borderRadius: '50%',
            cursor: 'pointer',
            float: 'right',
        }
    }

    getSelectedStyle = () => {
        return {
            opacity: this.props.email.selected ? '70%' : '100%'
        }
    }


    render() {
        const { id, profile, from, subject } = this.props.email;
        return (
            <React.Fragment>
                <div style={this.getStyle()}>
                    <div className="emails">
                        <input className="select"
                            type="checkbox"
                            onChange={this.props.markSelected.bind(this, id)} /> {' '}
                        <Link className="link" to='/email'>
                            <div className="profile" style={this.getSelectedStyle()}>{profile}</div>
                            <div className="from">
                                {from}
                            </div>
                            <div className="subject" style={this.getSelectedStyle()}>{subject}</div>
                        </Link>
                        <BsFillTrashFill className="del"
                            size={32}
                            onClick={this.props.delEmail.bind(this, id)}
                            style={this.getDelStyle()} />
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// PropTypes
EmailItem.propTypes = {
    email: PropTypes.object.isRequired
}




export default EmailItem
