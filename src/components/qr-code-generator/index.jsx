import QRcode from "react-qr-code";
import {useState} from 'react';
export default function QRCodeGenerator(){
    const [data, setData] = useState('');
    function handleChange(e){
        setData(e.target.value);
    }
    return <>
        <div>
            <label>Data: </label>
            <input type="text" value={data} onChange={handleChange} />
        </div>
        <br/>
        <br />
        <div>
            <QRcode value={data}/>
        </div>
    </>
}