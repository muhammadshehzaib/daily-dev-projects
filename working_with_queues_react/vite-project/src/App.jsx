import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./App.css";

const App = () => {
  const [progressBar, setProgressBar] = useState([]);
  const [queue, setQueue] = useState([])

  console.log("progressBar.length : ",progressBar.length)


  const handleClickBar = () => {
      setProgressBar((prev) => [...prev, { id: Date.now() }]);
  };



  return (
    <div className="main">
      <div className="button">
      <button onClick={handleClickBar}>Create Progress Bar</button>
      </div>
      <div className="app">

        {progressBar.length> progressBar.map((bar) => {
          return <ProgressBar key={bar.id} />;
        })}
      </div>
    </div>
  );
};

export default App;
