import React, {useEffect, useState} from "react";
import './App.css';
import NavBar from "./NavBar";

//1import teamsArr from "./teams";
import {useParams} from "react-router-dom";

function Team() {
    const colors = ["#264653", "#97cfe6", "#e9c46a", "#f4a261", "#e76f51", "#0081c4", "#c1121f", "#606c38", "#7209b7", "#fae1dd"];

    const background = ["hexagons","doubleWaves","circles","pointyWaves","blockWaves","blockStack"];
    const [backgroundClassName,setBackgroundClassName] = useState("");

    useEffect(()=>{
        setBackgroundClassName ("svgBackground " + background[Math.floor((Math.random()*10)%6)]);
    }, [])

    const param = useParams();

    const chooseColor = () =>{
        return ( Math.floor((Math.random() * 10) % 9));
    }
    console.log(param);
    return (
        <body className={backgroundClassName}>
        <div >
            <NavBar/>
            <h2>Team</h2>
            <div className="singleTeamBox"
            style={{background: colors[chooseColor()]}}
            >
                {param.id}
            </div>

        </div>
        </body>
    );
}

export default Team;
