import React, {useEffect, useState} from "react";
import './App.css';
import NavBar from "./NavBar";

function DeleteTeam() {

    const [textValue, setTextValue] = useState('');
    const [conditionalUI, setConditionalUI] = useState()

    const background = ["hexagons","doubleWaves","circles","pointyWaves","blockWaves","blockStack"];
    const [backgroundClassName,setBackgroundClassName] = useState("");

    const localStorageIds = JSON.parse(localStorage.getItem("ids"));
    const localStorageTeams = JSON.parse(localStorage.getItem("Teams"));

    useEffect(() =>{
        setBackgroundClassName ("svgBackground " + background[Math.floor((Math.random()*10)%6)]);
    }, [])
    const getIndex = (id) => {
      for(let i = 0; i<localStorageIds.length; i++){
          if(localStorageIds[i] === Number(id)){
              console.log(i);
              return i;
          }

      }
      return -1;
    }

    const verifyID = (id) => {
        console.log("verify")
        if(localStorageIds.includes(Number(id))){
            console.log(id);
            return(getIndex(id));
        }
        else{
            return -1;
        }

    }

    const deleteTeam = (index) => {
        console.log("delete");
        setConditionalUI(<h2>Team {localStorageTeams[index].name} has been deleted</h2>);
        localStorageIds.splice(index, 1);
        localStorageTeams.splice(index, 1);
        localStorage.setItem("ids", JSON.stringify(localStorageIds));
        localStorage.setItem("Teams", JSON.stringify(localStorageTeams));
        setTextValue("");
    }

    const clearUI = () => {
        setConditionalUI (<h2>The team has not been deleted</h2>);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const index = verifyID(textValue);
        if(index === -1){
            setConditionalUI(<h2>Invalid ID</h2>);
        }
        else{
            setConditionalUI(<div>
                <h2>Are you sure?</h2>
                <br/>
                <button onClick={() => deleteTeam(index)}>
                    Yes
                </button>
                <button onClick={() => clearUI()}>
                    No
                </button>
            </div>)
        }

    }

    return (
        <body className={backgroundClassName}>
        <div className="maiButtons">
            <NavBar />
            <h2>Delete Team</h2>
            <form onSubmit={handleSubmit}>
                <label>Id:
                    <input
                        type="text"
                        value={textValue}
                        onChange={(e) => setTextValue(e.target.value)}
                    />
                </label>
                <input type="submit" />
            </form>
            {conditionalUI}
        </div>
        </body>
    );
}

export default DeleteTeam;
