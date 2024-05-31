import React from "react";
import {Sidebar} from "./components/sideBar";
import "./App.css";
import { ContentWrapper } from "./components/ContentWrapper";

function App() {
  return (
    
    <div id="wrapper">
      {/*page wraper*/}
      <Sidebar />

      <ContentWrapper />


     
    </div>
  );
}

export default App;
