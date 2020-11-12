import React, { Component } from 'react';
import DeletedItem from './DeletedItem';
import PropTypes from 'prop-types';

class Deleted extends Component {

    render() {
        return this.props.deleted.map((deleted) => (
        <DeletedItem key={deleted.id}
                    deleted={deleted} 
                    markSelectedDeleted={this.props.markSelectedDeleted}
                    delDeleted={this.props.delDeleted} />
        ));
    }
}

// PropTypes
Deleted.propTypes = {
    deleted: PropTypes.array.isRequired
}

export default Deleted;