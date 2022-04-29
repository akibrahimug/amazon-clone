
import React from 'react'
import './Home.css'
import Product from './Product'

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
                <div className="home__row">
                    {/* product */}
                    <Product
                    id="12323415"
                    title="FANDARE Casual Shoulder Bags Women Satchel Waterproof Nylon Lightweight for Sport Work Hiking Shop Crossbody Bag Green"
                    price={25.99}
                    image="https://m.media-amazon.com/images/I/61PFpR0-p0L._AC_SX679_.jpg"
                    rating={5}
                    />
                    {/* product */}
                    <Product
                    id="224545254" 
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric" 
                    price={39.99} 
                    image="https://m.media-amazon.com/images/I/61u48FEs0rL._AC_SL1000_.jpg" 
                    rating={4}/>
                    {/* product */}
                    <Product
                    id="3624363465" 
                    title="Samsung Galaxy A53 5G Mobile Phone SIM Free Android Smartphone 128 GB Black" 
                    price={289} 
                    image="https://m.media-amazon.com/images/I/71CAtftS4PL._AC_SX679_.jpg" 
                    rating={3}/>
                </div>
                <div className="home__row">
                    {/* product */}
                    <Product
                    id="45452451" 
                    title="Komonee Drifter Sunglasses Classic Style Retro Sun Shades Eye Glasses UV400 Protection Unisex For Men Women Golf Cycling Sports Fishing Travel"
                    price={4.75}
                    image="https://m.media-amazon.com/images/I/61t0d1LJLiL._AC_UX679_.jpg"
                    rating={4}
                    />
                    {/* product */}
                    <Product
                    id="5" 
                    title="Disposable Black Face_mask Box of 50 | Breathable Triple Layer Mouth Cover with Elastic Ear loops| UK Seller"
                    price={4.99}
                    image="https://m.media-amazon.com/images/I/51w7xYh7zLL._AC_.jpg"
                    rating={5}
                    />
                    
                </div>
                <div className="home__row">
                    {/* product */}
                    <Product
                    id="6124515132" 
                    title="Russell Hobbs Powersteam Ultra 3100 W Vertical Steam Iron 20630 - Black and Grey"
                    price={35.00}
                    image="https://m.media-amazon.com/images/I/81UQH2JNH+L._AC_SX679_.jpg"
                    rating={5}
                    />
                    {/* product */}
                    <Product
                    id="7634534" 
                    title="Utopia Bedding Double Duvet Set - Soft Microfibre Duvet Cover with Pillow cases - Bedding Quilt Cover Set (Beige)"
                    price={13.99}
                    image="https://m.media-amazon.com/images/I/61dL1XgZuJL._AC_SX679_.jpg"
                    rating={4}
                    />
                    {/* product */}
                    <Product
                    id="8354632" 
                    title="Forthglade Complete Natural Wet Dog Food - Grain Free Beef (18 x 395g) Trays - Adult Dog Food 1 Year+"
                    price={23.32}
                    image="https://m.media-amazon.com/images/I/81rcmrrzbIL._AC_SX679_PIbundle-18,TopRight,0,0_SH20_.jpg"
                    rating={3}
                    />
                </div>
                <div className="home__row">
                    {/* product */}
                    <Product
                    id="9645352241"  
                    title="LG OLED65A16LA 65 inch 4K UHD HDR Smart OLED TV (2021 Model) with α7 Gen4 AI processor, 4K SELF-LIT OLED, Dolby Vision IQ and Dolby Atmos, built-in Google Assistant and Alexa [Energy Class G]" 
                    price={1099} 
                    image="https://m.media-amazon.com/images/I/91eYddNK4RS._AC_SX679_.jpg" 
                    rating={4}/>
                    
                </div>
                
            </div>
            
        </div>
    )
}
