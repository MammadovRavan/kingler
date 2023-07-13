
import React, { useState } from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import './ContactUs.css'
import { GrFacebookOption } from 'react-icons/gr'
import { TiSocialGooglePlus } from 'react-icons/ti'
import { BiLogoTwitter } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
import Form from './Form'
import { Link } from 'react-router-dom';
const ContactUs = () => {
    return (
        <>
            <Navbar />
            <div className="contact-section">
                <div className="contact-top">
                    <h1>CONTACT US</h1>
                    <h2><Link to="/">HOME /</Link><span>CONTACT US</span></h2>
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
                            <Form/>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default ContactUs