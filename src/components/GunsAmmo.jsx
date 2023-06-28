import React from 'react'
import './GunsAmmo.css'
import Button from './Button'
const GunsAmmo = () => {
    return (
        <div className="guns-ammo">
        <div className="ammo-img">
            <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1687939908/ammn_bwuldz.jpg" alt="" />
        </div>
        <div className="ammo-text">
            <h1><span>HOW</span> TO ORDER</h1>
            <h2>NOTHING EVER WAS THIS EASY! PICK A FIREARM <br /> AND CHECK OUT WITH YOUR OWN ADDRESS</h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elido eiusmod <br />tempor incididunt ut labore et dolore magna aliqua</h3>
            <div className="ammo-btn">
            <Button butonunIcindekiDeyer="LEARN MORE" klasAdi="learn-btn" />
            </div>
        </div>

    </div>
        
    )
}

export default GunsAmmo