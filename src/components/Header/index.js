import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MoreT from '../MoreT';
import LoginT from '../LoginT';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import "tippy.js/themes/light.css"

import "./index.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header__first">
                <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" />
                <div className="header__first1">
                    <span style={{fontSize:"11px",
                color:"white",fontStyle:"italic"}}>Explore</span>
                    <span style={{color:"f9e107",fontSize:"11px",fontStyle:"italic"}}>Plus</span>
                    <span><img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" width="10" /></span>
                </div>
            </div>
            <div className="header__second">
                <input placeholder = "search for products,brands and more" type="text" />
                <SearchIcon color="primary"/>
            </div>
            <div className="header__third">
                <Tippy content={<LoginT/>} interactive={true}  theme = "light"   offset={[5,10]}>
                <button>Login</button>
                </Tippy>
            </div>
            <div className="header__fourth">
                <Tippy content={<MoreT/>} interactive={true} theme = "light" offset={[5,10]}> 
                <span>More</span>
                
                </Tippy>
                <ExpandMoreIcon/>
                
                
            </div>
            <div className="header__fifth">
                <ShoppingCartIcon/>
                <p>Cart</p>
            </div>
        </div>
    )
}

export default Header;
