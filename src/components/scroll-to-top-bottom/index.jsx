import {useRef} from 'react';

import useFetch from "./useFetch";

export default function ScrollTopAndBottom(){
    const {data, loading, error} = useFetch("https://dummyjson.com/products?limit=100", {});
    const bottomRef = useRef();
    function scrollToBottom(){
        bottomRef.current.scrollIntoView({behavior: 'smooth'})
    }

    function scrollToTop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    
    if(error){
        return <p>{error}</p>
    }

    if(loading){
        return <p>Loading...</p>
    }
    console.log(data);
    return <>
        <h3>This is the Top of the page</h3>
        <button onClick={scrollToBottom}>Scroll to bottom</button>
        <ul style={{listStyle: 'none'}}>
            {data && data.length > 0 && data.map(item=> {
                return <li key={item.id}>{item.title}</li>
            })}
        </ul>
        <button onClick={scrollToTop}>Scroll to top</button>
        <div ref={bottomRef}></div>
        <h3>This is the bottom of the page</h3>
    </>
}