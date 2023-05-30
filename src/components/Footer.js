import React from "react";
import github from  "../assets/images/green-github.png";
import linkedin from  "../assets/images/green-linkedin.png";
import spotify from "../assets/images/green-spotify.png";

export default function Footer() {
    return (
        <footer className="text-center footer">
            <a href="https://github.com/anjaliroland" target="_blank">
                <img src={github} alt="github logo" style={{ width: 'auto', height: '8em', }} />
            </a>
            <a href="https://www.linkedin.com/in/anjali-roland/" target="_blank">
                <img src={linkedin} alt="linkedin logo" style={{ width: 'auto', height: '9em', }} />
            </a>
            <a href="https://open.spotify.com/user/agroland"
                target="_blank">
                <img src={spotify} alt="spotify logo" style={{ width: 'auto', height: '10em', }} />
            </a>
        </footer>

    )
}