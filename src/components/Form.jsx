import React from 'react'
const Form = () => {
    return (
        <div className='full-form'>
            <div className="forms">
                <input type="text" placeholder='Name' className='name' id='name' />
                <small>Error message</small>
            </div>
            <div className="forms">
                <input type="text" placeholder='E-mail' className='email' id='email' />
                <small>Error message</small>
            </div>
            <div className="forms">
                <input type="text" placeholder='Subject' className='subject' id='subject' />
                <small>Error message</small>
            </div>
            <div className="forms">
                <input type="text" placeholder='Message' className='message' id='message' />
                <small>Error message</small>
            </div>
            <button>Submit</button>
        </div>
    )
}

export default Form