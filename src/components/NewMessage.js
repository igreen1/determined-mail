import React, { Component } from 'react';
import TextBox from './Textbox';
import PropTypes from 'prop-types';

class NewMesssage extends Component {


    render() {
        return (
            <div>
                <header className="page-header">New Message</header>
                <TextBox className="To" singleLine="true" title="To" />
                <TextBox className="CC" singleLine="true" title="CC" />
                <TextBox className="BCC" singleLine="true" title="BCC" />
                <TextBox className="EmailInput" defaultText="Type here" />
            </div>
        )
    }

}

export default NewMesssage;