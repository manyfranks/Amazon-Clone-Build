import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { IconFlagUS } from 'material-ui-flags'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase';

function Header() {

    // pulls the info from the data layer
    const [{cart, user}, sendData] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to={'/'}>
                <img 
                    className='header__logo'
                    src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' 
                    alt=''
                />
            </Link>
            <div className='header__location'>
                <div className='location__icon'>
                    <RoomOutlinedIcon />
                </div>
                <div className="location__info">
                    <p>Deliver to</p>
                    <h5>New York 10002</h5>
                </div>
            </div>
            <div className='header__input'>
                <span className="input__filter">
                    <p>All</p>
                </span>
                <input 
                    className="input__search" 
                    type='text'
                />
                <SearchIcon className="input__icon" />
            </div>
            <div className='header__right'>
                <div className="header__flag">
                    <IconFlagUS />
                </div>

                <Link to={!user && '/login'}>
                    <div className="header__user" onClick={handleAuthentication}>
                        <p>Hello {!user ? 'Guest' : user.email}</p>
                        <h5>{user ? 'Sign Out' : 'Sign In'}</h5>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className="header__orders">
                        <p>Returns</p>
                        <h5>& Orders</h5>
                    </div>
                </Link>

                <Link to='/checkout'>
                    <div className="header__cart">
                        <ShoppingCartOutlinedIcon />
                        <span className="cart__itemStyle header__cartCount">
                            {cart.length}
                        </span>
                        <h5>Cart</h5>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
