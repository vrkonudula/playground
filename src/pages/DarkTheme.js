import '../bootcamp.scss';
import { useState } from 'react';
function DarkTheme() {
    const [th, setTh] = useState("lighttheme");
    return (
        <div className="e4content">
            <div className={`${th}`}> Hello there</div>
            <button onClick={() => setTh("lighttheme")}>Light Theme</button>
            <button onClick={() => setTh("darktheme")}>Dark Theme</button>
        </div>
    )
}

export default DarkTheme;