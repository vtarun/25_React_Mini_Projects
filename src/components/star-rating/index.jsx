import {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar} from '@fortawesome/free-regular-svg-icons';


import "./index.css";

export default function StarRating(){
    const [rating, setRating] = useState(null);
    const [lastRating, setLastRating] = useState(null);

    function handleClick(index){
        setRating(index);
        setLastRating(index);
    }

    function handleHover(index){
        setRating(index);
    }

    return <>
        <div>
            {
                Array(5).fill(0).map((item, index)=>{
                    return (
                        <span key={index}
                            onClick={()=>handleClick(index)}
                            onMouseEnter={()=>handleHover(index)}
                            onMouseLeave={()=>setRating(lastRating)}
                        >
                            {(rating !== null && index<=rating) ? <FontAwesomeIcon icon={solidStar} />: <FontAwesomeIcon icon={regularStar} />}
                        </span>
                    )
                })
            }
        </div>
    </>
}