import React from 'react'
import PropTypes from 'prop-types'
import EmailItem from './EmailItem'

const EmailList = ({emails, deleteEmail, selectEmail}) => {
  return emails.sort((a,b) => a.id - b.id)
  .map((email) => (
    <EmailItem key={email.id} email={email} deleteEmail={deleteEmail} selectEmail={selectEmail} />
  ))
}

EmailList.propTypes = {
  emails: PropTypes.array.isRequired,
  selectEmail: PropTypes.func.isRequired,
  deleteEmail: PropTypes.func.isRequired,
}

export default EmailList
