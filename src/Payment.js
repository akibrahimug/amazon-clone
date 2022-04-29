
import React, { useEffect, useState } from 'react';
import "./Payment.css";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from './firebase';
import { setDoc, doc} from "firebase/firestore"; 


export default function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false)
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getClientSecret = async () => {
            
            const response = await axios({
                method: 'post',
                // Stripe expects the total in sub units
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log("Secret >>>>", clientSecret)
    const handleSubmit = async e => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {
            // paymentIntent = payment confirmation
            const paymentInfo = async () => {
                     await setDoc(doc(db, "users", `${user?.uid}`,  "orders", `${paymentIntent}`),
                basket,
                paymentIntent.amount,
                paymentIntent.created
                     )
            }
            paymentInfo()

            // db.collection('users')
            // .doc(user?.uid)
            // .collection('orders')
            // .doc(paymentIntent.id)
            // .set({
            //     basket: basket,
            //     amount: paymentIntent.amount,
            //     created: paymentIntent.created
            // })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/orders')
        })
    }
    const handleChange = e => {
            setDisabled(e.empty);
            setError(e.error ? e.error.message: "")
    }
  return (
    <div className='payment'>
        <div className='payment__container'>
        <h1>
            Checkout (<Link to="/checkout">{basket?.length} Items</Link>)
        </h1>
            {/* delivery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>44 Portelet Court</p>
                    <p>Hackney, London</p>
                </div>
            </div>
            {/* review items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
                    {basket.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            {/* payment method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                    {/* strip */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className='payment__pricContainer'>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <>
                                            <h3>Order Total: {value}</h3>
                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"£"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                                </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                 
                </div>
            </div>
        </div>
    </div>
  )
}






