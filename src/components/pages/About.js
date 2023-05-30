import React from "react";
import Me from "../../assets/images/me.jpeg";
import "../../styles/About.css";

export default function About() {
    return (
        <main>
            <div className="about">
                <h2>About Me</h2>
                <div className="aboutMe">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultrices hendrerit malesuada. Integer a ex ipsum. Phasellus ultricies accumsan libero, porttitor lobortis massa maximus nec. Maecenas quis metus et leo auctor aliquam in sed diam. Sed auctor lobortis urna quis efficitur. Sed ac placerat mauris. Praesent pellentesque gravida tellus, sit amet congue arcu scelerisque quis. Vivamus facilisis semper imperdiet. Nam suscipit, sem eu convallis varius, est metus condimentum libero, et blandit risus dolor vitae dui. Mauris maximus commodo sem, ac pellentesque leo tempor id. Vivamus cursus posuere augue, vel laoreet elit dignissim eu.</p>
                </div>
                <div className="pic">
                    <img src={Me} alt="picture of me" style={{width: "auto", height: "8em"}}/>
                </div>
            </div>
        </main>
    )
}