import React, {useEffect, useState} from "react";
import './App.css';
import NavBar from "./NavBar";
import {Outlet} from "react-router-dom";
//import teamsArr from "./teams";

function GetTeamByID() {
    const [textValue, setTextValue] = useState("");
    const [condUI, setCondUI] = useState();

    const colors = ["#264653", "#97cfe6", "#e9c46a", "#f4a261", "#e76f51", "#0081c4", "#c1121f", "#606c38", "#7209b7", "#fae1dd"];
    const background = ["hexagons","doubleWaves","circles","pointyWaves","blockWaves","blockStack"];
    const [backgroundClassName,setBackgroundClassName] = useState("");


    const ids = JSON.parse(localStorage.getItem("ids"));
    const localStorageTeams = JSON.parse(localStorage.getItem("Teams"));

    const chooseColor = () =>{
        return ( Math.floor((Math.random() * 10) % 9));
    }



    useEffect(() => {
        // ids = teamsArr.map(team =>(team.teamId))
        setBackgroundClassName ("svgBackground " + background[Math.floor((Math.random()*10)%6)]);
        showId(ids);
        }, [])

    const showId = (ids) => {
        console.log(ids);
        };
    const getIndex = (x) =>{
        for (let i = 0; i < ids.length; i++){
            if(ids[i] === x){
                return i;
            }
        }
        return -1;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let conditionalUI;
        // ids.includes(Number(textValue))
        //     ? conditionalUI = <div
        //             className="singleTeamBox"
        //             style={{background: colors[chooseColor()]}}
        //         >
        //             {textValue}
        //         </div>
        //     : conditionalUI = <h1>Invalid ID</h1>;

        if(ids.includes(Number(textValue))){
            let index = getIndex(Number(textValue));
            conditionalUI = <div
                        className="singleTeamBox"
                        style={{background: colors[chooseColor()]}}
                    >
                        {localStorageTeams[index].name}
                        <br/>
                        {localStorageTeams[index].teamDescription}
                        <br/>
                        {localStorageTeams[index].teamProjectName}
                        <br/>
                        {localStorageTeams[index].teamId}
                    </div>
        }
        else{
            conditionalUI = <h1>Invalid ID</h1>;
        }
        setCondUI(conditionalUI);
    }
    return (
        <body className={backgroundClassName}>
        <div className="maiButtons">
            <NavBar/>
            <h2>Get Team by ID</h2>
            <form onSubmit={handleSubmit}>
                <label>Id:
                    <input
                        required
                        type="text"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
            {condUI}
        <Outlet/>
        </div>
        </body>
    );
}

export default GetTeamByID;
export var ids;
