import React from "react";
import './App.css';
import {Link} from "react-router-dom";

function NavBar() {

    return (
        <div>
            <nav className="NavBar">
                <Link to="/">
                    <h1>Home</h1>
                </Link>
                <Link to="/getTeams">
                    <h2> Get Teams </h2>
                </Link>
                <Link to="/getTeamByID">
                    <h2>Get Team by ID </h2>
                </Link>
                <Link to="/addTeam">
                    <h2>Add Team</h2>
                </Link>
                <Link to="/deleteTeam">
                    <h2> Delete Team</h2>
                </Link>
            </nav>
        </div>
    );
}

export default NavBar;

