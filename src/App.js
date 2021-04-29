import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './components/firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './components/Orders/Orders';

const promise = loadStripe('pk_test_51IlMYuBa1kJUSqfXO9kNvrpjksgPyIuS6YXcAKh1d0EzOoid1cO2azHwYGFxX2fA2ABZILxjX15yC9wqzqW03MTN00asGN71gz')

function App() {
  const [{}, sendData] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>>', authUser);

      if (authUser) {
        // user is logged in
        sendData({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out
        sendData({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (

    <Router>
      <div className="app">
        <Switch>

          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>

          <Route path='/orders'>
            <Header />
            <Orders />
          </Route>

          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path='/login'>
            <Login />
          </Route>
          
          {/* default route at bottom */}
          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;