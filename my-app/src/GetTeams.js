import React, { useState} from "react";
import './App.css';
import NavBar from "./NavBar";

//import teamsArr from "./teams";
import {Link} from "react-router-dom";

const GetTeams = () => {
    const localStorageTeams = JSON.parse(localStorage.getItem("Teams"));

    const [teams, setTeams] =useState(localStorageTeams);


    const colors = ["#264653", "#97cfe6", "#e9c46a", "#f4a261", "#e76f51", "#0081c4", "#c1121f", "#606c38", "#7209b7", "#fae1dd"];


    const chooseColor = () =>{
        return ( Math.floor((Math.random() * 10) % 9));
    }
    let i = chooseColor();
    const verifyColor= (prev, curr) =>{
        if (prev === curr) {
            curr++
        }
        return curr;
    }


    return (
        <body style={{backgroundColor: "#00CC99"}}>
        <div className="maiButtons">
            <NavBar />
            <h2>Teams</h2>
            <div>
            {
                teams.map(team=> (
                    <Link to={`./${team.teamId}`}
                          key={team.teamId}>
                    <div
                         className="teamBox"
                         style={{background: colors[verifyColor(i, i = chooseColor())]}}
                    >

                        <h1>{team.name}</h1>
                        <h2>{team.teamProjectName}</h2>
                        <br/>
                        <img src={team.teamImg} alt={team.teamImg} />
                        <br/>
                        <h3>{team.teamDescription}</h3>


                    </div>
                    </Link>
                ))
            }

            </div>
        </div>
        </body>
    );
}

export default GetTeams;
