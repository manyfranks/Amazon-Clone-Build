import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV2._CB412009348_.jpg" 
                    alt="" 
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-MjIxN2VlYzgt-w1500._CB655702414_.jpg"
                    alt="" 
                />
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/audible/AudibleSleep_Updates_02092021_Amazon_GRD_DesktopHero_Template_1500x600_1x._CB658668607_.jpg" 
                    alt="" 
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default ImageCarousel
