import React from 'react'
import './commits.css'
import fiveStars from '../../assets/images/fiveStars.svg'
import accept from '../../assets/images/accept.svg'

const Commits = ({commit}) => {
    return (
        <div className='customers__commit' >
            <img src={fiveStars} alt="" />
            <p className='customers__text' >
                {commit.user.fullName}
                <img src={accept} alt="" />
            </p>
            <p className='customers__name' >
                {commit.body}
            </p>
        </div>
    )
}

export default Commits