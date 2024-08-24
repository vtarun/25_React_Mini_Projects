import { useRef } from 'react';

export default function ScrollTopAndBottom(){
    const ref = useRef();
    const data = [
        {
            label: 'First card',
            style: {
                width: '100%',
                height: '600px',
                background: 'red'
            }
        },
        {
            label: 'Second card',
            style: {
                width: '100%',
                height: '600px',
                background: 'green'
            }
        },
        {
            label: 'Third card',
            style: {
                width: '100%',
                height: '600px',
                background: 'yellow'
            }
        },
        {
            label: 'Fourth card',
            style: {
                width: '100%',
                height: '600px',
                background: 'blue'
            }
        },
        {
            label: 'Fifth card',
            style: {
                width: '100%',
                height: '600px',
                background: 'purple'
            }
        },
        {
            label: 'Sixth card',
            style: {
                width: '100%',
                height: '600px',
                background: 'black'
            }
        }
    ];
    function handleScroll(){
        console.log(ref.current);
        let top = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top: top,
            behavior: 'smooth'
        })
    }

    return <>
        <h1>Scroll to particular section</h1>
        <button onClick={handleScroll}>Scroll</button>
        <div>
            {
                data && data.map((item, index) => {
                    return <div ref={index === 3 ? ref : null} key={item.label} style={item.style}>
                            <h3>{item.label}</h3>
                        </div> 
                })
            }
        </div>
    </>
}