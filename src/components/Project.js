import React from "react";
import GithubIcon from "../assets/images/github.png";
import LinkIcon from "../assets/images/link.png";
import "../styles/Portfolio.css";

export default function Project(props) {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="box">
                <img src={props.image} />
                <div className="box-content">
                    <h3 className="title">{props.title}</h3>
                    <span className="post">{props.tech}</span>
                </div>
                <ul className="icon">
                    <li><a href={props.link}><img src={LinkIcon} /></a></li>
                    <li><a href={props.github}><img src={GithubIcon} /></a></li>
                </ul>
            </div>
        </div>
    )
}