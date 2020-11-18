import React, { Component } from "react"
import TextBox from "./Textbox"
import PropTypes from "prop-types"

const inputStyle = {
  backgroundColor: "#fff",
  height: "3vh",
  borderRadius: "0px 0px 4px 4px",
  display: "inline-block",
  border: "5px solid",
  borderColor: "#fb6949",
  fontFamily: "arial",
  fontSize: "25px",
  color: "#000",
}

const labelStyle = {
  backgroundColor: "#fb6949",
  height: "3vh",
  borderRadius: "4px 4px 0px 0px",
  fontFamily: "arial",
  fontSize: "25px",
  color: "#fff",
  padding: "10px 0px 5px 10px",
  marginTop: "10px",
}

const draftEmailStyle = {
  resize: "none",
  backgroundColor: "#fff",
  height: "50vh",
  display: "inline-block",
  borderRadius: "0px 0px 10px 10px",
  fontFamily: "arial",
  fontSize: "25px",
  border: "5px solid",
  borderColor: "#fb6949",
  color: "#000",
}

const buttonStyle = {
  backgroundColor: "#fb6949",
  borderRadius: "4px",
  color: "#fff",
  fontSize: "25px",
  width: "10vw",
  height: "5vh",
  align: "center",
  margin: "5px",
  border: "none",
}

const buttonContainer = {
  display: "flex",
  flexDirection: "row-reverse",
  width: "80vw",
  marginTop: "5px",
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "80vw",
}

class NewMesssage extends Component {
  render() {
    return (
      <div>
        <header className="page-header">New Message</header>
        <div class="container" style={containerStyle}>
          <label class="label" style={labelStyle}>
            <b>To:</b>
          </label>
          <input
            type="text"
            className="To"
            singleLine="true"
            title="To"
            style={inputStyle}
            placeholder="Enter your email recipient here"
          />
        </div>
        <div class="container" style={containerStyle}>
          <label class="label" style={labelStyle}>
            <b>CC:</b>
          </label>
          <input
            type="text"
            className="To"
            singleLine="true"
            style={inputStyle}
            placeholder="Enter your CC recipient here"
          />
        </div>
        <div class="container" style={containerStyle}>
          <label class="label" style={labelStyle}>
            <b>BCC:</b>
          </label>
          <input
            type="text"
            className="To"
            singleLine="true"
            style={inputStyle}
            placeholder="Enter your BCC recipient here"
          />
        </div>
        <div class="container" style={containerStyle}>
          <label class="label" style={labelStyle}>
            <b>Draft Email</b>
          </label>
          <textarea
            type="text"
            className="To"
            singleLine="true"
            style={draftEmailStyle}
            placeholder="Draft your email here"
          />
        </div>
        <div class="buttonContainer" style={buttonContainer}>
          <button class="button" style={buttonStyle}>
            Send
          </button>
          <button class="button" style={buttonStyle}>
            Save Draft
          </button>
        </div>
      </div>
    )
  }
}

export default NewMesssage
