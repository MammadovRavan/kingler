import React from 'react'
import './PopularNews.css'
import PopularCard from './PopularCard'
import MaplenecekElemenler from '../PopularNews.json'
const PopularNews = () => {
    return (
        <div className="popularnews row">
            <div className="left-side col-12 col-md-6">
                <h1><span>POPULAR</span> NEWS</h1>
                <img src="https://res.cloudinary.com/dmqymruko/image/upload/v1687961394/popular1_jr8enk.jpg" alt="" />
                <h2>INSTRUCTIONS & TRAINING</h2>
                <h3>POSTED <span>FEBRUARY 3, 2017</span> / BY JACK BLACK</h3>
                <p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo...</p>
                <div className="popular-btn">
                    <button className='popular-btn'>LEARN MORE</button>
                </div>
            </div>
            <div className="right-side col-12 col-md-6">
                <div className="popular-links">
                    <a href="">ALL NEWS</a>
                    <a href="">CERTIFICATES</a>
                    <a href="">GALLERY</a>
                    <a href="">MORE</a>
                </div>
                <div className="popular-cards">
                    {
                        MaplenecekElemenler.map(birmelumat => (
                            <PopularCard
                                ikon={birmelumat.img}
                                information={birmelumat.Basliq}
                                tarix={birmelumat.tarix}
                                trspant={birmelumat.trspant}
                            />
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default PopularNews