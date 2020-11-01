import React from 'react'
import './Login-Signup.scss'

const LoginError = () => {
    return (
        <div className='LoginError'>
            <div className='LoginError__Image'></div>
            <h5>Must be logged in to use this section</h5>
        </div>
    )
}

export default LoginError
