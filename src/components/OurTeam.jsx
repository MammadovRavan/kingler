import React from 'react'
import './OurTeam.css'
import Footer from './Footer';
import Navbar from './Navbar';
import MaplenecekElementler from '../TeamCard.json'
import TeamCard from './TeamCard';
import {RiDoubleQuotesR} from 'react-icons/ri'
import Business from './Business';
const OurTeam = () => {
    return (
        <>
            <Navbar />
            <div className='team-section'>
                <div className="team-top">
                    <h1>OUR TEAM</h1>
                    <h2>HOME /<span>OUR TEAM</span></h2>
                </div>
                <div className="team-bottom">
                    <div className="team-spirit">
                        <div className="spirit-text">
                            <h1>ABOUT OUR <span>TEAM SPIRIT</span></h1>
                            <p>This is what I seek: that I may<br /> dwell in the house of Lord all<br /> the days of my life, to gaze<br /> upon the beauty of the Lord<br /> and to seek him in his temple</p>
                            <h4>John Doe</h4>
                            <div className="radix-icon">
                                    <RiDoubleQuotesR className='radix'/>
                                </div>
                        </div>
                        <div className="spirit-img">
                            <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1689054412/team1_lxhmaq.jpg" alt="" />
                        </div>
                    </div>
                    <div className="our-team">
                        <div className="our-team-text">
                            <h1> Our <span>Team</span></h1>
                            <h2>//</h2>
                            <p>LOREM IPSUM DOLOR SIT AMET CONSECTETUR<br/>
                                ADIPISICING ELIT SED DO EIUSMOD</p>
                        </div>
                        <div className="our-team-card">
{
    MaplenecekElementler.map(birmelumat=>(
        <TeamCard
        image={birmelumat.img}
        name={birmelumat.name}
        work={birmelumat.work}
        information={birmelumat.information}
        />
    ))
}
                        </div>
                    </div>
                </div>
            </div>
            <Business/>
            <Footer />
        </>

    )
}

export default OurTeam