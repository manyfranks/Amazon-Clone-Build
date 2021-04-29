import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'

function Product({ id, title, price, image, rating }) {
    
    // pulls info from data layer
    const [{ cart }, sendData] = useStateValue()

    //action item into the data layer
    const addToCart = () => {
        //action item into the data layer
        sendData({
            type: "ADD_TO_CART",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <img src={image} alt="" />
            <div className="product__info">
                <p>{title}</p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}

export default Product
