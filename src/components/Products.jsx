import React from 'react'
import './Products.css'
import ProductsCard from '../components/ProductsCard'
import MaplenecekMelumatlar from '../ProductsCard.json'
const Products = () => {
    return (
        <div className="products-section ">
            <div className="top-side">
                <h1>FEATURED <span>PRODUCTS</span></h1>
                <h2>//</h2>
                <h3>LOREM IPSUM DOLOR SIT AMET CONSECTETUR <br />
                    ADIPISICING ELIT SED DO EIUSMOD</h3>
            </div>
            
                <div className="bottom-side">
                    {
                        MaplenecekMelumatlar.map(birmelumat => (
                            <ProductsCard melumat={birmelumat.information}
                                icon={birmelumat.ikon}
                                qiymet={birmelumat.cost}
                            />
                        ))
                    }

                </div>


        </div>
    )
}

export default Products