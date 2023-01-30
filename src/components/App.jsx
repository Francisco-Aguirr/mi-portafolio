import React, { useState } from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Timer from "./Timer";

const history = createBrowserHistory();

function App() {
  const [time, setTime] = useState(localStorage.getItem("time") || 0);

  // Save time to local storage when component unmounts
  React.useEffect(() => {
    return () => {
      localStorage.setItem("time", time);
    };
  }, [time]);

  return (
    <Router history={history}>
      <Timer time={time} setTime={setTime} />
    </Router>
  );
}

export default App;
