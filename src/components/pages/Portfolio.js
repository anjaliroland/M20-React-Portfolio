import Project from "../Project";
import BiteBuddies from "../../assets/images/bbuddies.png";
import Campricorn from "../../assets/images/campricorn-stars.png";
import GoldenGirls from "../../assets/images/golden-girls.png";
import Concert from "../../assets/images/concert.JPG";
import Park from "../../assets/images/park.JPG";
import Trail from "../../assets/images/trail.JPG";

export default function Portfolio(props) {
    return (
        <div className="container portfolio">
            <div className="row">
                <h2>My Work</h2>
                <Project 
                    title="Campricorn"
                    tech="APIs"
                    image={Campricorn}
                    link="https://aerostokes.github.io/camping-starcharts/"
                    github="https://github.com/aerostokes/camping-starcharts"
                />
                <Project 
                    title="Golden Girls Quiz"
                    tech="JavaScript"
                    image={GoldenGirls}
                    link="https://anjaliroland.github.io/M4-WebAPIs-Quiz/"
                    github="https://github.com/anjaliroland/M4-WebAPIs-Quiz"
                />
                <Project 
                    title="Live Tonight"
                    tech="Node / Express"
                    image={Concert}
                    link="https://www.google.com/"
                    github="https://github.com/anjaliroland"
                />
                <Project 
                    title="Bite Buddies"
                    tech="Handlebars / SQL"
                    image={BiteBuddies}
                    link="https://bite-buddies.herokuapp.com/"
                    github="https://github.com/bear-muna/bite-buddies"
                />
                <Project 
                    title="Trail Buddy"
                    tech="React / JavaScript"
                    image={Trail}
                    link="https://www.google.com/"
                    github="https://github.com/anjaliroland"
                />
                <Project 
                    title="Park + Play"
                    tech="APIs / CSS"
                    image={Park}
                    link="https://www.google.com/"
                    github="https://github.com/anjaliroland"
                />
            </div>
        </div>
    )
}