import React, { Component } from "react";
import TextBox from "./Textbox";
import PropTypes from "prop-types";

const inputStyle = {
  backgroundColor: "#fff",
  width: "98.6%",
  height: "5vh",
  display: "inline-block",
  border: "5px solid",
  borderColor: "#fb6949",
  borderRadius: "0px 0px 4px 4px ",
  fontFamily: "arial",
  fontSize: "25px",
  color: "#000",
  margin: "0px 0px 0px 5px",
};

const toLabelStyle = {
  backgroundColor: "#fb6949",
  width: "98.35%",
  height: "3vh",
  display: "inline-block",
  borderRadius: "4px 4px 0px 0px",
  fontFamily: "arial",
  fontSize: "25px",
  color: "#fff",
  padding: "20px 0px 5px 20px",
  border: "none",
  margin: "30px 0px 0px 5px",
};

const labelStyle = {
  backgroundColor: "#fb6949",
  width: "98.35%",
  height: "3vh",
  display: "inline-block",
  borderRadius: "4px 4px 0px 0px",
  fontFamily: "arial",
  fontSize: "25px",
  color: "#fff",
  padding: "20px 0px 5px 20px",
  border: "none",
  margin: "20px 0px 0px 5px",
};

const draftEmailStyle = {
  backgroundColor: "#fff",
  width: "98.5%",
  height: "50vh",
  display: "inline-block",
  borderRadius: "0px 0px 10px 10px",
  fontFamily: "arial",
  fontSize: "25px",
  padding: "none",
  border: "5px solid",
  borderColor: "#fb6949",
  color: "#000",
  margin: "0px 0px 0px 5px",
};

class NewMesssage extends Component {
  render() {
    return (
      <div>
        <header className="page-header">New Message</header>
        <label class="label" style={toLabelStyle}>
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
    );
  }
}

export default NewMesssage;
