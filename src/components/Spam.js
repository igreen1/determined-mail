import React, { Component } from 'react';
import SpamItem from './SpamItem';
import PropTypes from 'prop-types';

class Spam extends Component {

    render() {
        return this.props.spam.map((spam) => (
        <SpamItem key={spam.id}
                    spam={spam} 
                    markSelectedSpam={this.props.markSelectedSpam}
                    delSpam={this.props.delSpam} />
        ));
    }
}

// PropTypes
Spam.propTypes = {
    spam: PropTypes.array.isRequired
}

export default Spam;