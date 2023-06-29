import React from 'react'
import './Footer.css'
import {GrFacebookOption} from 'react-icons/gr'
import {TiSocialGooglePlus} from 'react-icons/ti'
import {BiLogoTwitter} from 'react-icons/bi'
import {BiLogoLinkedin} from 'react-icons/bi'
const Footer = () => {
  return (
<div className="footer-section">
    <div className="footer-logo">
        <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1688048980/king_vdczkn.png" alt="" />
    </div>
    <div className="footer-text">
        <div className="text-left">
<h6>123,New Lenox</h6>
<h6>Chicago,IL60606</h6>
        </div>
        <div className="text-right">
<h6>Phone:23-456-789</h6>
<h6>Fax:098-765-432</h6>
        </div>
    </div>
    <div className="footer-media">
<GrFacebookOption className='ft-media'/>
<TiSocialGooglePlus className='ft-media'/>
<BiLogoTwitter className='ft-media'/>
<BiLogoLinkedin className='ft-media'/>
    </div>
<div className="footer-bottom">
    <h5><span>Kingler</span> &copy; 2017 All Right Reserved. <span>Terms of Use</span> and <span>Privacy Policy</span></h5>
</div>
</div>
  )
}

export default Footer