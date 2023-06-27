import React from 'react'
import './CountUp.css'
import CountUp from 'react-countup'
import {FaGun} from 'react-icons/fa6'
import {TiChevronRight} from 'react-icons/ti'
import {BiSolidBinoculars} from 'react-icons/bi'
import {AiOutlineAim} from 'react-icons/ai'
import {AiOutlineTrophy} from 'react-icons/ai'
const Countup = () => {
  return (
    <div className="countup-section">
        <div className="upcard">
        <div className="upimg">
        <AiOutlineAim className='img-up'/>
        </div>
        <CountUp end={253} className="upnumber"/>
        <h2>TOP BRANDS</h2>
        <div className="uplink">
            <TiChevronRight className='link-up'/>
        </div>
        </div>

        <div className="upcard">
        <div className="upimg">
        <BiSolidBinoculars className='img-up'/>
        </div>
        <CountUp end={1200} className="upnumber"/>
        <h2>LOYAL USERS</h2>
        <div className="uplink">
            <TiChevronRight className='link-up'/>
        </div>
        </div>

        <div className="upcard">
        <div className="upimg">
        <FaGun className='img-up'/>
        </div>
        <CountUp end={534} className="upnumber"/>
        <h2>TOP BRANDS</h2>
        <div className="uplink">
            <TiChevronRight className='link-up'/>
        </div>
        </div>

        <div className="upcard">
        <div className="upimg">
        <AiOutlineTrophy className='img-up'/>
        </div>
        <CountUp end={688} className="upnumber"/>
        <h2>AWARDS WON</h2>
        <div className="uplink">
            <TiChevronRight className='link-up'/>
        </div>
        </div>

    </div>
  )
}

export default Countup