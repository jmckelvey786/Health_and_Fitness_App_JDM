import React from "react";
import {Link} from "react-router-dom"
import { useState } from "react";
import Nutrition from "../assets/icons/nutrition";
import Dashboard from "../assets/icons/dashboard";
import Exercise from "../assets/icons/exercise";

const Footer = () => {
    const[selected, setSelect] = useState("home");
    return (
        <div id="footer" className="width-100 m10-top">
            <div className="flex justify-content-center align-items-center border-radius-15 m10 bg-color-aqua flex">
                <ul className="lst-none flex justify-content-center space-evenly width-100 ">
                    <li>
                    
                        <Nutrition/>
                        
                    </li>
                    <li>
                        <Link to="/" onClick={()=> setSelect("home")}>
                        <Dashboard/>
                        </Link>
                    </li>
                    <li>
                        <Exercise/>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;