import React from 'react';
import StoreIcon from '@mui/icons-material/Store';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FavoriteIcon from '@mui/icons-material/Favorite';



import "./index.css"
const LoginT = () => {
    return (
        <div className='logint'>
          <div className="logint__in">
              <h2 style={{fontSize:"14px",paddingRight:"15px"}}>New Customer?</h2>
              <h2 style={{fontSize:"14px",paddingLeft:"10px",color:"blue"}}>Sign Up</h2>
          </div>
          <hr/>
          <div className="logint__in">
              <AccountCircleIcon/>
              <p>My Profile</p>
          </div>
          <hr/>
          <div className="logint__in">
              <FavoriteIcon/>
              <p>Wishlist</p>
          </div>
          <hr/>
          <div className="logint__in">
              <ConfirmationNumberIcon/>
              <p>orders</p>
          </div>
          <hr/>
          <div className="logint__in">
              <CardGiftcardIcon/>
              <p>Gift Cards</p>
          </div>
          <hr/>
          <div className="logint__in">
              <StoreIcon/>
              <p>Flipkart Plus Zone</p>
          </div>
        </div>
    )
}

export default LoginT
