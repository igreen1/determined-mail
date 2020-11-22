import React from 'react'
import PropTypes from 'prop-types'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
/* eslint-disable */


const EmailItem = ({ email, deleteEmail, selectEmail }) => {
  let emailInfo
  if (email.page === 'draft' || email.to) {
    //draft page, display 'to' not 'from'
    emailInfo = (
      <Link className="link" to={`/new/${email?.id}`}>
        <div className="profile">{email?.profile}</div>
        <div className="to">To: {email?.to}</div>
        <div className="subject">Subject: {email?.subject}</div>
      </Link>
    )
  } else {
    //not draft page, display 'from' not 'to'
    emailInfo = (
      <Link className="link" to={`/email/${email.id}`}>
        <div className="profile">{email.profile}</div>
        <div className="from">From: {email.from}</div>
        <div className="subject">Subject: {email.subject}</div>
      </Link>
    )
  }
  return (
    <React.Fragment>
      <div>
        <div className="email">
          <input
            className="select"
            type="checkbox"
            defaultChecked={email.selected}
            onClick={() => {
              selectEmail
            }}
          />{' '}
          {emailInfo}
          <BsFillTrashFill
            className="delete"
            size={32}
            onClick={() => {
              deleteEmail(email.id)
            }}
          />
        </div>
      </div>
    </React.Fragment>
  )
}

EmailItem.propTypes = {
  email: PropTypes.object.isRequired,
  selectEmail: PropTypes.func.isRequired,
  deleteEmail: PropTypes.func.isRequired,
}

export default EmailItem
