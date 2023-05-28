import React from "react";
import "./main.css";
import List from "../assets/icons/list";
import Calendar from "../assets/icons/calendar";
import Tracker from "../assets/icons/tracker";



const Home = () => {
    return (
        <div className="flex justify-content-center align-items-center width-100">
            <div className="flex justify-content-center align-items-center width-85 space-evenly">
                <div className="bg-color-Lavendar p20 max-width-33 m10 border-radius-15 box-shadow flex justify-content-center align-items-center flex-direction-column min-width-25 ">
                    <h2>Shopping List</h2>
                    <List/>
                </div>
                <div className="bg-color-Lavendar p20 max-width-33 m10 border-radius-15 box-shadow flex justify-content-center align-items-center flex-direction-column min-width-25 ">
                    <h2>Calendar</h2>
                    <Calendar/>
                </div>
                <div className="bg-color-Lavendar p20 max-width-33 m10 border-radius-15 box-shadow flex justify-content-center align-items-center flex-direction-column min-width-25 ">
                    <h2>Calorie Tracker</h2>
                    <Tracker/>
                </div>
            </div>
            
        </div>
    )
};

export default Home;

