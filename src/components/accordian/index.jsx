import { useState } from "react";

import {data} from './data';

import "./index.css";

export default function Accordian(){
    const [aId, setAId] = useState(null);
    const [multiState, setMultiState] = useState(false);
    const [multiItem, setMultiItem] = useState([]);
    function handleClick(id){
        if(aId === id || multiItem.indexOf(id) !== -1){
            if(multiState){
                setMultiItem(prev => {
                    const tempArr = [...prev].filter(item => item != id);
                    return tempArr;
               });
            }else{
                setAId(null);
            }   
        }
        else{
            if(multiState){
                setMultiItem(prev => {
                    const tempArr = [...prev];
                    tempArr.push(id);
                    return tempArr;
                });
            }else{
                setAId(id);
            } 
        }
    }

    function handleToggle(){
        setMultiState(prev => !prev);
        setAId(null);
        setMultiItem([]);
    }
    
    return (<>
        <div className="container">
            <div style={{position: "absolute", top: 0, left: 50, marginBottom: "50px"}}>
                <button onClick={handleToggle}>Toggle {multiState ? 'to single select' : 'to multi select'}</button>
            </div>
            <div className="items">
                { 
                    data.map(item=>{
                        return (
                            <div className="item" key={item.id} onClick={()=>handleClick(item.id)}>
                                <p>{item.name} 
                                    <span>
                                        {((multiState && multiItem.indexOf(item.id) !== -1) || aId === item.id) ? "-" : "+"}
                                    </span>
                                </p>
                                {((multiState && multiItem.indexOf(item.id) !== -1) || aId === item.id) && (<p>{item.description}</p>)}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </>)      
}