import {useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faCircle as solidFa } from '@fortawesome/free-solid-svg-icons';
import { faCircle as regularFa } from '@fortawesome/free-regular-svg-icons';

import './index.css';
export default function Carousel(){
    const [data, setData] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(()=>{
        async function getData(){
            const response = await fetch('https://picsum.photos/v2/list?page=2&limit=5');
            const responseData = await response.json();
            setData(responseData);
        }
        getData();
    },[]);

    function nextImage(){
        setCurrentImageIndex(prev => {
            const lastIndex = data.length-1;
            const setIndex = prev === lastIndex ? 0 : prev + 1;
            return setIndex;
        });
    }

    function previousImage(){
        setCurrentImageIndex(prev => {
            const lastIndex = data.length-1;
            const setIndex = prev === 0 ? lastIndex : prev - 1;
            return setIndex;
        });
    }

    let currentImage = data[+currentImageIndex]?.download_url;
    
    return <>
        <div className='main-container'>
            <div className="image-container">
                <img src={currentImage} style={{width: "300px", height: "auto"}} />
                <div className='arrow-container'>
                    <span onClick={previousImage}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </span>
                    <span onClick={nextImage}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </span>
                </div>
                <div className="carousel-dots">
                    {data.map((item, index)=> {
                        return <span>
                                {
                                index === currentImageIndex ? 
                                <FontAwesomeIcon icon={solidFa} /> : <FontAwesomeIcon icon={regularFa} />
                                }
                            </span>
                    })}
                </div>
            </div>
        </div>
    </>

}