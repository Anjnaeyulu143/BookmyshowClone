import React from 'react';
import GetAppIcon from '@mui/icons-material/GetApp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import "./index.css"

const MoreT = () => {
    return (
        <div className='moret'>
            <div className="moret__in">
                <NotificationsNoneIcon/>
                <p>Notification prefrences</p>
            </div>
            <hr/>
            <div className="moret__in">
                <MonetizationOnIcon/>
                <p>Sell on Flipkart</p>
            </div>
            <hr/>
            <div className="moret__in">
                <LiveHelpIcon/>
                <p>24*7 Customer Care</p>
            </div>
            <hr/>
            <div className="moret__in">
                <TrendingUpIcon/>
                <p>Advertise</p>
            </div>
            <hr/>
            <div className="moret__in">
                <GetAppIcon/>
                <p>Download App</p>
            </div>
        </div>
    )
}

export default MoreT
