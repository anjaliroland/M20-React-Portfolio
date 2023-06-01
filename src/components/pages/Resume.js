import React from "react";
import resume from "../../assets/files/Resume-Anjali-Roland.pdf";
import download from "../../assets/images/download.png";
import "../../styles/Resume.css";

export default function Resume() {
    return (
        <main>
            <div className="resumePge">
                <h2>Resume</h2>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="text-center">
                        <a href={resume}><img src={download} style={{ height: "10em", width: "auto" }} download /> 
                        <br/> Download Resume</a>
                    </div>
                    <div className="proficiencies">
                        <h3>Front-End proficiencies</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>Responsive Design</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        <h3>Back-End proficiencies</h3>
                            <ul>
                                <li>APIs</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySql, Sequelize</li>
                                <li>MongoDB, Mongoose</li>
                                <li>REST</li>
                            </ul>
                    </div>
                </div>
            </div>
        </main>
    )
}