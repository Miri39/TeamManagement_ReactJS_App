import React, {useEffect, useState} from "react";
import './App.css';
import {Link} from "react-router-dom";

function Nav() {

    const colors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51", "#003049", "#c1121f", "#606c38"];
    const background = ["hexagons","doubleWaves","circles","pointyWaves","blockWaves","blockStack"];
    const [backgroundClassName,setBackgroundClassName] = useState("");
    const chooseColor = () =>{
        return ( Math.floor((Math.random() * 10) % 9));
    }
    const [colGetTeams, setColGetTeams] = useState(0);
    const [colGetTeamByID, setColGetTeamByID] = useState(1);
    const [colAddTeam, setColAddTeam] = useState(2);
    const [colDeleteTeam, setColDeleteTeam]= useState(3);
    useEffect(()=>{
        let index ;
        setBackgroundClassName("svgBackground " + background[Math.floor((Math.random()*10)%6)]);
        console.log(backgroundClassName);
        index = chooseColor();
         setColAddTeam(index);
         colors.splice(index, 1);
        index = chooseColor();
         setColDeleteTeam(index);
         colors.splice(index,1);
        index = chooseColor();
         setColGetTeamByID(index);
         colors.splice(index,1);
         index = chooseColor();
         setColGetTeams(index);
        console.log(colors);

    }, [])
    return (
        <div>
            <div className={backgroundClassName}></div>
            <nav className="mainNav">
            <Link to="./getTeams">
                <div className="mainButtons" style={{background: colors[colGetTeams]}}> Get Teams </div>
            </Link>
            <Link to="./getTeamByID">
                <div className="mainButtons" style={{background: colors[colGetTeamByID]}}>Get Team by ID </div>
            </Link>
            <Link to="./addTeam">
                <div className="mainButtons" style={{background: colors[colAddTeam]}}>Add Team</div>
            </Link>
            <Link to="./deleteTeam">
                <div className="mainButtons" style={{background: colors[colDeleteTeam]}}>Delete Team</div>
            </Link>
            </nav>
        </div>
    );
}

export default Nav;

