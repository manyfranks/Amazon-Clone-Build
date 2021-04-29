import React from 'react'
import Product from '../Product/Product'
// import ImageCarousel from '../ImageCarousel'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img
                    className="hero__image"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-MjIxN2VlYzgt-w1500._CB655702414_.jpg"
                    alt="" 
                />
                <div className="home__row">
                    <Product 
                        id="74577617"
                        title="Blink Mini – Compact indoor plug-in smart security camera – 1 camera"
                        price={27.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/41GZI7HASrL._AC_UL320_SR320,320_.jpg"
                        rating={4}
                    />
                    <Product
                        id="49048059"
                        title="Powerbeats Pro Wireless Earbuds - Apple H1 Headphone Chip, Built-in Microphone - Black"
                        price={199.99}
                        image="https://m.media-amazon.com/images/I/31056J3NgVL._AC_SY200_.jpg"
                        rating={5}
                    />
                    <Product
                        id="25671427"
                        title="Canon EOS R Mirrorless Full Frame Camera with RF 24-105mm F/4L IS USM Lens Kit"
                        price={2899.99}
                        image="https://m.media-amazon.com/images/I/41MFYIceRIL._AC_SY200_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="34146973"
                        title="Amazon Basics Outdoor Patio Heater, Commercial & Residential - Black / Stainless"
                        price={175.99}
                        image="https://m.media-amazon.com/images/I/31N1BbUruKL._AC_SY161_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="98373010"
                        title="Christopher Knight Outdoor Rectangular Fire Table with Tank Holder, Light Gray"
                        price={638.95}
                        image="https://m.media-amazon.com/images/I/41p5waHJGtL._AC_SY161_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id="70433721"
                        title="Cordless Leaf Blower - 200 CFM 150 MPH Battery-Operated Blower for Blowing Leaves"
                        price={79.99}
                        image="https://m.media-amazon.com/images/I/41jK+iDapWL._AC_SY161_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="18999200"
                        title="Stanley SHP2150 Electric Pressure Washer with Spray Gun, Quick Connect Nozzles Foam Cannon"
                        price={168.01}
                        image="https://m.media-amazon.com/images/I/413+0zBncnL._AC_SY161_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="88621398"
                        title="KIMO 20V Cordless Hedge Trimmer, 20inch Dual Blade Lightweight Electric Hedge"
                        price={99.99}
                        image="https://m.media-amazon.com/images/I/41bvjHurfpS._AC_SY161_.jpg"
                        rating={4}
                    />
                    <Product 
                        id="95304065"
                        title='WORX WG896 12 Amp 7.5" Electric Lawn Edger & Trencher'
                        price={93.53}
                        image="https://m.media-amazon.com/images/I/41MG7kmu-PL._AC_SY161_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
