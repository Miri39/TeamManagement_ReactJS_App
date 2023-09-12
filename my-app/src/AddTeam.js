import React, {useEffect, useState} from "react";
import './App.css';
import NavBar from "./NavBar";
import teamsArr from "./teams";

function AddTeam() {
    const [nameInput, setNameInput] = useState('');
    const [imgInput, setImgInput] = useState('');
    const [descInput, setDescInput] = useState('');
    const [projectNameInput, setProjectNameInput] = useState('');

    const background = ["hexagons","doubleWaves","circles","pointyWaves","blockWaves","blockStack"];
    const [backgroundClassName,setBackgroundClassName] = useState("");

    const localStorageTeams = JSON.parse(localStorage.getItem("Teams"))
    const localStorageIds = JSON.parse(localStorage.getItem("ids"))

    let ids = [];
    useEffect(() => {
        ids = teamsArr.map(team =>(team.teamId))
        showId(ids);
        setBackgroundClassName ("svgBackground " + background[Math.floor((Math.random()*10)%6)]);
        // localStorage.setItem("ids", JSON.stringify(ids));
        // localStorage.setItem("Teams", JSON.stringify(teamsArr));
    }, [])

    const showId = () =>{
        console.log(ids);
    }

    const verifyID = (id) =>{

        if(localStorageIds.includes(id))
        {
            return false;
        }
        ids.push(id);
        return true;

    }

    const createID = () =>{
        // let a = 5000;
        let b = Math.floor(Math.random()*10000)
        if(verifyID(b))
            {
             return (b);
            }
        else createID();
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("gotHEre")
        let id = createID();
        let teamObj = {
            teamId: id,
            name: nameInput,
            teamImg: imgInput,
            teamDescription: descInput,
            teamProjectName: projectNameInput,
        }
        localStorageTeams.push(teamObj);
        localStorage.setItem("Teams", JSON.stringify(localStorageTeams));
        localStorageIds.push(id);
        localStorage.setItem("ids", JSON.stringify((localStorageIds)))
        console.log(localStorageTeams);
        console.log(localStorageIds);

    }

    return (
        <body className={backgroundClassName}>
        <div>
            <NavBar/>
            <h2>Add Team</h2>
            <div
                style={{
                width: "20vw", margin: "20px 40vw", display: "flex", alignItems:"space-around"
            }} >
            <form onSubmit={handleSubmit}>
                <label>Team Name:
                    <input
                        required
                        type="text"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                    />
                </label>
                <br/>
                <label>Team img:
                    <input
                        required
                        type="text"
                        value={imgInput}
                        onChange={(e) => setImgInput(e.target.value)}
                    />
                </label>
                <br/>
                <label>Team Description:
                    <input
                        required
                        type="text"
                        value={descInput}
                        onChange={(e) => setDescInput(e.target.value)}
                    />
                </label>
                <br/>
                <label>Project Name:
                    <input
                        required
                        type="text"
                        value={projectNameInput}
                        onChange={(e) => setProjectNameInput(e.target.value)}
                    />
                </label>
                <br/>
                <input type="submit" />
            </form>
            </div>
        </div>
        </body>
    );
}

export default AddTeam;
