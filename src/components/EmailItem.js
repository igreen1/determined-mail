import React from 'react'
import PropTypes from 'prop-types'
import { BsFillTrashFill } from "react-icons/bs"
import { Link } from "react-router-dom"

const EmailItem = ({email, deleteEmail, selectEmail}) => {
    return (
        <React.Fragment>
            <div>
                <div className='email'>
                    <input 
                        className='select'
                        type='checkbox'
                        defaultChecked={email.selected}
                        onClick={()=>{selectEmail}}
                    />{" "}
                    <Link className='link' to={`/email/${email.id}`}>
                        <div className='profile'>
                            {email.profile}
                        </div>
                        <div className='from'>
                            From: {email.from}
                        </div>
                        <div className='subject'>
                            Subject: {email.subject}
                        </div>
                    </Link>
                    <BsFillTrashFill 
                        className='delete'
                        size={32}
                        onClick={()=>{deleteEmail(email.id)}}
                    />
                </div>
            </div>
        </React.Fragment>
    )

}


EmailItem.propTypes = {
    email: PropTypes.object.isRequired,
    selectEmail: PropTypes.func.isRequired,
    deleteEmail: PropTypes.func.isRequired,
  }

export default EmailItem


