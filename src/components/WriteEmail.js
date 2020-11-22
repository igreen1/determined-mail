import React, {useState} from "react"
import PropTypes from 'prop-types'


const WriteEmail = ({sendEmail, saveDraft}) => {

    //make custom hook :) 
    const [to, setTo] = useState("")
    const [cc, setCC] = useState("")
    const [bcc, setBCC] = useState("")
    const [body, setBody] = useState("")
    const [subject, setSubject] = useState("");

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
}

export default WriteEmail;