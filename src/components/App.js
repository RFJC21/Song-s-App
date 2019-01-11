import React from "react";

//import a name
import { selectSong } from "../store/actions/index";

import "./App.css";
import SongList from "./Songlist";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
