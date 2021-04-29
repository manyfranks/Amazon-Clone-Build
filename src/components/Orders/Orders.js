import React, { useState, useEffect } from 'react'
import { db } from '../firebase';
import './Orders.css'
import { useStateValue } from '../StateProvider'
import OrderHistory from '../OrderHistory/OrderHistory';

function Orders({  }) {
    const [{ cart, user }, sendData] = useStateValue()
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }

    }, [user])

    return (
        <div className='orders'>
            <h1>Your Order History</h1>
            <div className="orders__history">
                {orders?.map(order => (
                    <OrderHistory order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders