import React, { Component } from 'react';
import EmailItem from './EmailItem';
import PropTypes from 'prop-types';

class Emails extends Component {

    render() {
        return this.props.emails.map((email) => (
        <EmailItem key={email.id}
                    email={email} 
                    markSelected={this.props.markSelected}
                    delEmail={this.props.delEmail} />
        ));
    }
}

// PropTypes
Emails.propTypes = {
    emails: PropTypes.array.isRequired
}

export default Emails;