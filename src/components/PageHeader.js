import React from 'react'
import PropTypes from 'prop-types'



const PageHeader = ({pageName}) => {


    return(
    <header className="page-header">
        {pageName}
        <input
        className="select"
        type="checkbox"
        id="selectAll"
        checked={this.state.allSelected}
        onClick={this.toggleSelectAllInInbox}
        />{" "}
        <button
            className="discard-button"
            onClick={this.removeIfSelected}
        >
            Discard
        </button>
        <button
            className="mark-spam-button"
            onClick={this.markSpamIfSelected}
        >
        Mark as Spam
        </button>
    </header>
    )
    
}

PageHeader.propTypes = {
    pageName: PropTypes.string
}

export default PageHeader