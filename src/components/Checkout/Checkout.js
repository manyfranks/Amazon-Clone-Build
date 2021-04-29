import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProvider'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'
import FlipMove from 'react-flip-move'

function Checkout() {


    // pulls info from data layer
    const [ { cart, user }, sendData] = useStateValue();

    return (
        <div className='checkout'>
            <img 
                className="checkout__ad"
                src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2021/MDAY/mday_storefront_03.12.21_1500x150_d_v3.png" 
                alt=""
            />
            <div className="checkout__container">
                <div className="checkout__left">
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Shopping Cart</h2>    

                        <FlipMove            
                            staggerDelayBy={25}
                            leaveAnimation="fade"
                        >
                            {cart.map((item, index) => (
                                <div key={index}>
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                </div>
                            ))}                      
                        </FlipMove>                
                </div>
                <div className="checkout__right">
                    <Subtotal />
                </div>            
            </div>    
        </div>
    )
}

export default Checkout