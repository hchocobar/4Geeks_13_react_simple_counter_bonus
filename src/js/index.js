//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
// import Home from "./component/Home.jsx";
import SimpleCounterBonus from "./component/SimpleCounterBonus.jsx";

// render your react application
ReactDOM.render(<SimpleCounterBonus />, document.querySelector("#app"));
