/* eslint-disable */
import React, {useState} from "react"
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'


const WriteEmail = ({sendEmail, saveDraft, emails}) => {

  let email
  if(emails){
    const {id} = useParams();
    [email] = emails.filter((email) => email.id === Number(id))
  }
  //make custom hook :) 
  const [to, setTo] = email ? useState(email.to) : useState("")
  const [cc, setCC] = email ? useState(email.cc) : useState("")
  const [bcc, setBCC] = email ? useState(email.bcc) : useState("")
  const [body, setBody] = email ? useState(email.body) : useState("")
  const [subject, setSubject] = email ? useState(email.subject) : useState("")


  return( 
      <div>
      <header className="page-header">New Message</header>
      <div className="textfieldContainer" >
        <label className="label" >
          <b>To:</b>
        </label>
        <input
          type="text"
          className="to"
          value={to}
          title="To"
          placeholder="Enter your email recipient here"
          onChange={event => setTo(event.target.value)}
        />
      </div>
      <div className="textfieldContainer" >
        <label className="label" >
          <b>CC:</b>
        </label>
        <input
          type="text"
          className="CC"
          value={cc}
          placeholder="Enter your CC recipient here"
          onChange={event => setCC(event.target.value)}
        />
      </div>
      <div className="textfieldContainer">
        <label className="label" >
          <b>BCC:</b>
        </label>
        <input
          type="text"
          className="BCC"
          value={bcc}
          onChange={event=>setBCC(event.target.value)}
          placeholder="Enter your BCC recipient here"
        />
      </div>
      <div className="textfieldContainer" >
        <label className="label" >
          <b>Subject:</b>
        </label>
        <input
          type="text"
          className="Subject"
          title="Subject"
          value={subject}
          placeholder="Enter subject of email here"
          onChange={event=> setSubject(event.target.value)}
        />
      </div>
      <div className="textfieldContainer">
        <label className="label" >
          <b>Draft Email</b>
        </label>
        <textarea
          type="text"
          className="body"
          value={body}
          placeholder="Draft your email here"
          onChange={event=>setBody(event.target.value)}
        />
      </div>
      <div className="buttonContainer">
        <button className="button" onClick = {() => sendEmail( { subject, to, bcc, cc, body } )} >
          Send
        </button>
        <button className="button" onClick = {() => saveDraft( { subject, to, bcc, cc, body } )} >
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
        cc:PropTypes.string,
        bcc:PropTypes.string,
        subject:PropTypes.string,
        body:PropTypes.string,
    }), //optional
    emails: PropTypes.array,
}

export default WriteEmail;