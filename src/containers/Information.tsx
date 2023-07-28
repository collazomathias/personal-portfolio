import { Fragment, useState } from "react";
import "../assets/styles/containers/information.css";
import { Education } from "./Education";
import { Experience } from "../containers/Experience";

export const Information = () => {

    const [ status, setStatus ] = useState(true);

    return (
        <Fragment>
            <div className="information-container">
                <div className="information-buttons-container">
                    <button onClick={() => setStatus(true)} className={ status ? "enabled" : "disabled"}>Education</button>
                    <button onClick={() => setStatus(false)} className={ status ? "disabled" : "enabled"}>Experience</button>
                </div>
            </div>

            <div>
                { status ? <Education /> : <Experience /> }
            </div>
        </Fragment>
    );
}