import React from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import './ReadEmail.css'

const ReadEmail = ({ emails }) => {
  const { id } = useParams()
  const [email] = emails.filter((email) => email.id === Number(id))
  return (
    <div>
      {' '}
      {/* <profile?> */}
      <div className="metadata">
        <h2 aria-label={`From: ${email?.from}`}>From: {email?.from}</h2>
        <h2 aria-label={`Subject: ${email?.subject}`}>Subject: {email?.subject}</h2>
    </div>
      <textarea className="emailBody" aria-label={`${email?.body}`}>{email?.body}</textarea>
    </div>

  )
}

ReadEmail.propTypes = {
  emails: PropTypes.array.isRequired,
}

export default ReadEmail
