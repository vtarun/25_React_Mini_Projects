import {useState} from 'react';

import './index.css';
export default function ToggleTheme(){
    const [isDark, setIsDark] = useState(true);
    function toggleTheme(){
        setIsDark(prev => !prev);
    }
    return <>
        <div>
            <button onClick={toggleTheme}>Toggle theme</button>
        </div>
        <div className={!isDark ? "light-theme": 'dark-theme'}>
            <nav>
                <div className="cols">
                    <div>
                        Home
                    </div> 
                    <div>
                        Projects
                    </div> 
                    <div>
                        Articles
                    </div> 
                    <div>
                        Contact me
                    </div> 
                    <div>
                        About me
                    </div> 
                </div>  
            </nav>
        </div>
    </>
}