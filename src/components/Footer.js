import React from "react";
import github from  "../assets/images/green-github.png";
import linkedin from  "../assets/images/green-linkedin.png";
import spotify from "../assets/images/green-spotify.png";

export default function Footer() {
    return (
        <div>
            <footer>
                <a href="https://github.com/anjaliroland" target="_blank">
                    <img src={github} alt="github logo" />
                </a>
                <a href="https://www.linkedin.com/in/anjali-roland/" target="_blank">
                    <img src={linkedin} alt="linkedin logo" />
                </a>
                <a href="https://open.spotify.com/user/agroland"
                target="_blank">
                    <img src={spotify} alt="spotify logo" />
                </a>
            </footer>
        </div>
    )
}