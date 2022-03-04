import React from 'react'
import Favorite from '@mui/icons-material/Favorite';
import "./index.css"
import { useState } from 'react';
import { useEffect , useCallback } from 'react';
import FiberManualRecordOutlined from '@mui/icons-material/FiberManualRecordOutlined';
import FiberManualRecordRounded from '@mui/icons-material/FiberManualRecordRounded';

const Card = (props) => {

    const {item} = props;
    const {image,actualPrice,offerPrice} = item

    const [index, setIndex] = useState(0)
    const [show, setShow] = useState(false)

    const carousel = useCallback(()=>{
        setTimeout(() => {
            if(index<2){
                setIndex(index + 1)
            }
            else{
                setIndex(0)
            }
        }, 1000);
    },[index]);

    useEffect(() => {
        show && carousel()
    }, [show,carousel])
    

    

    return (
        <div className='card'>
            <div className="card__heart">
               <Favorite/>
            </div>

                {
                    Array(image.length).fill().map((_,i)=>{
                        if(i === index){
                          return show && <FiberManualRecordRounded  className='dots'/>
                        }
                        else{
                         return show && <FiberManualRecordOutlined className='dots'/>
                        }
                    })
                }

            <div className="card__image">
                <img onMouseOver={()=>setShow(true)} onMouseLeave={()=>setShow(false)} src={image[index]} alt="images" width="200px" height="100px" style={{objectFit:"contain"}}/>
            </div>
            <div className='productDetails'>
            <div className="card__details">
                <p className='title'>Adidas</p>
                <p>Running Shoes</p>
                <span className="span1">₹{offerPrice}</span>
                <span className="span2">{actualPrice}</span>
                <span className="span3">56% off</span>
            </div>
            <div className="card__size">
                <p>size <span style={{paddingLeft:"10px"}}>6 7 8 9</span></p>
            </div>
            </div>
        </div>
    )
}

export default Card
