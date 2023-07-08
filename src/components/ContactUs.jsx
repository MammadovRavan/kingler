import React, { useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import './ContactUs.css'
import { GrFacebookOption } from 'react-icons/gr'
import { TiSocialGooglePlus } from 'react-icons/ti'
import { BiLogoTwitter } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
const ContactUs = () => {
    const istifadeciAdi = document.getElementsByClassName('name')[0]
    const elektronPoct = document.getElementsByClassName('email')
    const movzu = document.getElementsByClassName('subject')
    const mesaj = document.getElementsByClassName('message')
    const formElementi = document.getElementsByClassName('form-right')
    console.log(istifadeciAdi)
    //show error message
    function xetaniGoster(qutu, messaj) {
        const formControlDivi = qutu.parentElement
        formControlDivi.className += "error"
    }
    xetaniGoster(istifadeciAdi)

    return (
        <>
            <Navbar />
            <div className="contact-section">
                <div className="contact-top">
                    <h1>CONTACT US</h1>
                    <h2>HOME /<span>CONTACT US</span></h2>
                </div>
                <div className="contact-bottom">
                    <div className="contact-text">
                        <h1>CONTACT <span>US TODAY</span></h1>
                        <h2>//</h2>
                        <p>YOUR EMAIL ADDRESS WILL NOT BE PUBLISHED.<br />
                            REQUIRED FIELDS ARE MARKED *</p>
                    </div>
                    <div className="form-section">
                        <div className="form-left">
                            <div className="personal-inf">
                                <h3>Address</h3>
                                <h4>Chicago, IL 60606, 123, New Lenox</h4>
                            </div>
                            <div className="personal-inf">
                                <h3>We are open</h3>
                                <h4>Mon - Sat 8.00 - 18.00</h4>
                            </div>
                            <div className="personal-inf">
                                <h3>Phone</h3>
                                <h4>23-456-789, 098-765-432</h4>
                            </div>
                            <div className="personal-inf">
                                <h3>E-mail</h3>
                                <h4>admin@mail.com</h4>
                            </div>
                            <div className="personal-md">
                                <GrFacebookOption className='personal-media' />
                                <TiSocialGooglePlus className='personal-media' />
                                <BiLogoTwitter className='personal-media' />
                                <BiLogoLinkedin className='personal-media' />
                            </div>
                        </div>
                        <div className="form-right">
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
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ContactUs