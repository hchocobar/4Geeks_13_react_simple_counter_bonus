//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SimpleCounter from "./component/SimpleCounter.jsx";

let counter = 0;
setInterval(() => {
    // render your react application
    ReactDOM.render(<SimpleCounter counter={counter}/>, document.querySelector("#app"));
    // incremento el contador
    counter++;
}, 1000);
