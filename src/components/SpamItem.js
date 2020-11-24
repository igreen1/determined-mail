import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BsFillTrashFill } from 'react-icons/bs'

export class SpamItem extends Component {
  // email list style
  getStyle = () => {
    return {
      backgroundColor: this.props.spam.selected ? '#e5e5e5' : '#fff',
      padding: '30px',
      borderBottom: '1px #000000 solid',
      borderLeft: '1px #ccc solid',
      borderRight: '1px #ccc solid',
      textDecoration: 'none',
    }
  }
  // makes trash button
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

  // when highlighted
  getSelectedStyle = () => {
    return {
      opacity: this.props.spam.selected ? '70%' : '100%',
    }
  }

  render() {
    const { id, profile, from, subject, selected } = this.props.spam
    return (
      <div style={this.getStyle()}>
        <input
          className="select"
          type="checkbox"
          checked={selected}
          onChange={this.props.markSelectedSpam.bind(this, id)}
        />{' '}
        <div className="profile" style={this.getSelectedStyle()}>
          {profile}
        </div>
        <div className="from">
          From: {from}
          <BsFillTrashFill
            className="del"
            size={32}
            onClick={this.props.delSpam.bind(this, id)}
            style={this.getDelStyle()}
          />
        </div>
        <div className="subject" style={this.getSelectedStyle()}>
          Subject: {subject}
        </div>
      </div>
    )
  }
}

// PropTypes
SpamItem.propTypes = {
  spam: PropTypes.object.isRequired,
}

export default SpamItem
