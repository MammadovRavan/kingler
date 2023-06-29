import React from 'react'
import './Collection.css'
const Collection = () => {
    return (
        <div className="collection-section row">
            <div className="left-side col-12 col-md-6 col-lg-4">
                <h1>LATEST PRODUCTS <span>//</span></h1>
                <div className="latest-card">
                    <div className="latest-img">
                        <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1688045937/card1_yu7mtb.jpg" alt="" />
                    </div>
                    <div className="latest-text">
                        <h3>Glock PI4350201 G43 Double 9mm 3.4" 6+1 FS Integral Grip Black</h3>
                        <h4>$423.00</h4>
                    </div>
                </div>
                <div className="latest-card">
                    <div className="latest-img">
                        <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1688045937/card2_ep4hyo.jpg" alt="" />
                    </div>
                    <div className="latest-text">
                        <h3>All Hazards 1911-22-OD Nitro Sanndstone Bag</h3>
                        <h4>$385.00</h4>
                    </div>
                </div>
            </div>
            <div className="center-side col-12 col-md-6 col-lg-4">
                <h1>TOP RATED PRODUCTS <span>//</span></h1>
                <div className="rated-card">
                    <div className="rated-img">
                        <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1688045937/card3_dfmxqo.jpg" alt="" />
                    </div>
                    <div className="rated-text">
                        <h3>Hi-Point Compact 9mm 3.5" Black Poly Grip/Frame Black</h3>
                        <h4>$252.00</h4>
                    </div>
                </div>
                <div className="rated-card">
                    <div className="rated-img">
                        <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1688045937/card1_yu7mtb.jpg" alt="" />
                    </div>
                    <div className="rated-text">
                        <h3>Glock PI4350201 G43 Double 9mm 3.4" 6+1 FS Integral Grip Black</h3>
                        <h4>$423.00</h4>
                    </div>
                </div>
            </div>
            <div className="right-sides col-12 col-md-6 col-lg-4">
                <h1>RECENT REVIEWS <span>//</span></h1>
                <div className="recent-card">
                    <div className="recent-img">
                        <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1688045937/card4_dzupel.jpg" alt="" />
                    </div>
                    <div className="recent-text">
                        <h3>Beretta JMN9S15CTC BU9 Nano 6+1 9mm 3.07" w/ Crimson Trace</h3>
                        <h4>by Jack Black</h4>
                    </div>
                </div>
                <div className="recent-card">
                    <div className="recent-img">
                        <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1688045937/card5_qybqtp.jpg" alt="" />
                    </div>
                    <div className="recent-text">
                        <h3>Fiocchi Rifle Shootinh Dynamics 308WIN 150 FMJ</h3>
                        <h4>by Jack Black</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection