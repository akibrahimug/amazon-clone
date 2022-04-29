
import Home from './Home'
import './App.css';
import Header from './Header';
import Checkout from './Checkout'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './Login';
import { useEffect } from 'react';
import {auth} from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import {useStateValue} from "./StateProvider"
import Payment from './Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from './Orders';

const promise = loadStripe(
  "pk_test_51KtJUvIGCbx7rUqErCj6QkLY7wLiGbbwuHCDAY2ZusN4f7rMRqC6T8brJNuLvQzvpAg8k9w3CNVYf3CPTTlnYaM600WZeDFyfa"
)

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // User is signed out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, [])
  return (
    <Router>
    <div className="App">
      
      <Routes>
        <Route path="/" element={
        <>
          <Header />
          <Home />
          
        </>
        } />
        <Route path="/checkout" element={
          <>
            <Header />
            <Checkout />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={
          <>
            <Header />
            <Orders />
              </>
            } />
        <Route path="/payment" element={
          <>
        <Header />
        <Elements stripe={promise}>
          <Payment />
        </Elements>
        
          </>
        } />
        
     </Routes>
    </div>
    </Router>
  );
}

export default App;
