import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import * as EmailValidator from 'email-validator'
import './WriteEmail.css'

const WriteEmail = ({ sendEmail, saveDraft, emails }) => {
  const history = useHistory()

  let email
  if (emails) {
    const { id } = useParams()
    ;[email] = emails.filter((email) => email.id === Number(id))
  }
  //make custom hook :)
  const [to, setTo] = email ? useState(email.to) : useState('')
  const [cc, setCC] = email ? useState(email.cc) : useState('')
  const [bcc, setBCC] = email ? useState(email.bcc) : useState('')
  const [body, setBody] = email ? useState(email.body) : useState('')
  const [subject, setSubject] = email ? useState(email.subject) : useState('')

  const send = (email)=>{
    let message = '';
    if(!EmailValidator.validate(email.to))
      message += `Recipient '${email.to}' is invalid\n`
    
    if(!EmailValidator.validate(email.cc) && email.cc !== '')
      message += `CC '${email.cc}' is invalid\n`
    
    if(!EmailValidator.validate(email.bcc) && email.bcc !== '')
      message += `BCC '${email.bcc}' is invalid\n`
    

    if(message !== ''){
      alert(message)
    }
      
    // Only warn them, send anyways :)
    // It's their choice to send to a bad email address, not ours
    return sendEmail(email);
  }

  return (
    <div>
      <div className="textfieldContainer">
        <label className="label" aria-label="Enter email recipient here">
          <b>To:</b>
        </label>
        <input
          type="text"
          className="input"
          value={to}
          style = {{'background-color': EmailValidator.validate(to) || to==='' ? '#fff': '#d4d4d4'}}
          placeholder="Enter your email recipient here"
          onChange={(event) => setTo(event.target.value)}
        />
      </div>
      <div className="textfieldContainer">
        <label
          className="label"
          aria-label="Enter CC, carbon copy, recipient here"
        >
          <b>CC:</b>
        </label>
        <input
          type="text"
          className="input"
          value={cc}
          style = {{'background-color': EmailValidator.validate(cc) || cc==='' ? '#fff': '#d4d4d4'}}
          placeholder="Enter your CC recipient here"
          onChange={(event) => setCC(event.target.value)}
        />
      </div>
      <div className="textfieldContainer">
        <label
          className="label"
          aria-label="Enter BCC, blind carbon copy, recipient here"
        >
          <b>BCC:</b>
        </label>
        <input
          type="text"
          className="input"
          value={bcc}
          style = {{'background-color': EmailValidator.validate(bcc) || bcc==='' ? '#fff': '#d4d4d4'}}
          onChange={(event) => setBCC(event.target.value)}
          placeholder="Enter your BCC recipient here"
        />
      </div>
      <div className="textfieldContainer">
        <label className="label" aria-label="Subject of email">
          <b>Subject:</b>
        </label>
        <input
          type="text"
          className="input"
          value={subject}
          placeholder="Enter subject of email here"
          onChange={(event) => setSubject(event.target.value)}
        />
      </div>
      <div className="textfieldContainer">
        <label className="label" aria-label="Write your email here">
          <b>Draft Email</b>
        </label>
        <textarea
          type="text"
          className="draftEmail"
          value={body}
          placeholder="Draft your email here"
          onChange={(event) => setBody(event.target.value)}
        />
      </div>
      <div className="buttonContainer">
        <button
          aria-label="Send email"
          className="button"
          onClick={() => send({ subject, to, bcc, cc, body })}
        >
          Send
        </button>
        <button
          aria-label="Save email as a draft"
          className="button"
          onClick={() => {
            const id = email?.id
            console.log(id)
            saveDraft({ subject, to, bcc, cc, body, id })
            history.push('/drafts')
          }}
        >
          Save Draft
        </button>
      </div>
    </div>
  )
}

WriteEmail.propTypes = {
  sendEmail: PropTypes.func.isRequired,
  saveDraft: PropTypes.func.isRequired,
  email: PropTypes.shape({
    to: PropTypes.string,
    cc: PropTypes.string,
    bcc: PropTypes.string,
    subject: PropTypes.string,
    body: PropTypes.string,
  }), //optional
  emails: PropTypes.array,
}

export default WriteEmail
