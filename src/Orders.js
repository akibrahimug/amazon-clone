import React, { useEffect, useState } from 'react'
import "./Orders.css"
import { useStateValue } from './StateProvider';
import {db} from "./firebase";
import Order from './Order';
import { onSnapshot, getDocs, orderBy, collection } from "firebase/firestore"; 


export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [{basket, user}, dispatch] = useStateValue()

    useEffect(() => {
        if(user){
            const firebaseData = async() => {
                const q = onSnapshot(collection(db, "users", `${user?.id}`, "orders", orderBy('created', 'desc')));
                const querySnapshot = await getDocs(q)
                querySnapshot.map(doc => ({
                    id: doc.id,
                    data: doc.data()
            }))
            }
            firebaseData()
        }else{
            setOrders([])
        }
       
    }, [user])
  return (
    <div className='orders'>
        <h1>Your Orders</h1>
        <div className='orders__order'>
            {orders?.map(order => (
                <Order  order={order}/>
            ))}
        </div>
    </div>
  )
}
