import React, { useState } from 'react';
function ColorTheme() {
    const [DarkMode, setDarkMode] = useState(false);
    const DarkModeToggle = () => {
        if (DarkMode) {
            setDarkMode(false);
            document.getElementById('root').classList.remove('dark');
            let button = document.querySelectorAll('.button-link a');
            for (let i = 0; i < button.length; i++) {
                button[i].classList.remove('dark-button');
            }
        } else {
            setDarkMode(true);
            document.getElementById('root').classList.add('dark');
            let button = document.querySelectorAll('.button-link a');
            for (let i = 0; i < button.length; i++) {
                button[i].classList.add('dark-button');
            }
        }
    };
    return (
        <>
            <button id="toggle" onClick={DarkModeToggle}>
                DarkMode
            </button>
        </>
    );
}
export default ColorTheme;
