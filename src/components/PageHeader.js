import React, {useState} from 'react'
import PropTypes from 'prop-types'

/* eslint-disable */
const PageHeader = ({title, pageName, allSelected, toggleSelectAll, selectedToDeleted, selectedToSpam}) => {

    const [selectAllChecked, setSelectAllChecked] = useState(false)

    // if(pageName == )
    // const spamButton = ();
    // const discardButton = ();

    return(
    <header className="page-header">
        {title}
        <input
        className="select"
        type="checkbox"
        id="selectAll"
        checked={(allSelected(pageName))}
        onChange={()=>{
            const selected = !(allSelected(pageName))
            toggleSelectAll(pageName, selected)
            setSelectAllChecked(selected)
        }}/>{" "}
        <button
            className="discard-button"
            onClick={() => {selectedToDeleted}}
        >
            Discard
        </button>
        <button
            className="mark-spam-button"
            onClick={()=>{selectedToSpam}}
        >
        Mark as Spam
        </button>
    </header>
    )
    
}

PageHeader.propTypes = {
    title:PropTypes.string.isRequired,
    pageName: PropTypes.string.isRequired,
    selectedToDeleted: PropTypes.func.isRequired,
    selectedToSpam: PropTypes.func.isRequired,
    toggleSelectAll:  PropTypes.func.isRequired,
}

export default PageHeader