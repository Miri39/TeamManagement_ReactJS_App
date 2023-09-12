import React from "react";
import './App.css';
import GetTeams from "./GetTeams";
import GetTeamByID from "./GetTeamByID";
import DeleteTeam from "./DeleteTeam";
import AddTeam from "./AddTeam";
import Nav from "./Nav";
import Team from "./Team";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  return (
      <Router>
    <div className="App">
      <Routes>
        <Route path="/" element ={<Nav />} />;
        <Route path="addTeam" element={<AddTeam />} />
        <Route path="deleteTeam" element ={<DeleteTeam />} />;
        <Route path="getTeams" exact element={<GetTeams />} />
        <Route path="getTeams/:id" element={<Team />} />
        <Route path="getTeamByID" element ={<GetTeamByID />} >
        <Route path="getTeamByID/:id" element={<Team />} />
        </Route>

      </Routes>

    </div>
      </Router>
  );
}

export default App;
