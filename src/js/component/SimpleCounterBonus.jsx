// 1.- importar 
import React, { useState, useEffect } from "react";


// 2. defino el componente
function SimpleCounterBonus () {
    // 3. codigo de JS
    // 3.1 defino todos los estados (useState)
    // 3.2 ....
	const [isRunning, setIsRunning] = useState(false);
	const [counter, setCounter] = useState(0);
	const [countDown, setCountDown] = useState(false);
    const [status, setStatus] = useState({icon: "fas fa-clock", 
                                          title: "Clock", 
                                          className:"text-center"});

    // 3.3 Handler
	const handleReset = () => {
		setIsRunning(false);
		setCounter(0);
        setCountDown(false);
        setStatus({icon:"fas fa-clock", 
                   title:"Clock", 
                   className:"text-center"});
	};

    const handleStart = () => {
        setIsRunning(!isRunning);  // ! significa negación, cambiando de True a False o viceversa.
        if (countDown) {
            setStatus({icon: "fas fa-history", 
                       title:"Timer", 
                       className:"text-center text-danger"});
        } else {
            setStatus({icon: "fas fa-stopwatch", 
                       title:"Chronometer", 
                       className:"text-center text-primary"});
        }
    };

    const handleTimer = (event) => {
        if (event.target.value !== null && event.target.value >= 0 && event.target.value.length > 0 && !isNaN(event.target.value)) {
            setCounter(parseInt(event.target.value));
            setCountDown(true);
            setStatus({icon: "fas fa-history", 
                       title:"Timer", 
                       className:"text-center text-danger"});
        } else {
            setCounter(0);
            event.target.value = "";
        }
    }


    // useEffect
	useEffect(() => {
		if (isRunning) {
			const nIntervalId = setInterval(() => {
				if (countDown === true && counter >= 0) {
					if (counter === 0) {
						setCounter(0);
						setIsRunning(false);
					} else {
						setCounter(counter => counter - 1);
					}
				} else if (countDown === false) {
					setCounter(counter => counter + 1);
				}
			}, 10);
			return () => clearInterval(nIntervalId);
		}
	}, [isRunning, counter, countDown]);


    // 4. Ultimo comando de JS -> return con un único elemnto html
    return ( 
        <div>
            <h1 className="text-center mt-5">{"Simple Counter"}</h1>
            <h2 className={status.className}>{status.title}</h2>
            <div className="big-counter">
                <div><i className={status.icon}/></div>
                <div>{Math.floor(counter / 10000000) % 10}</div>
                <div>{Math.floor(counter / 1000000) % 10}</div>
                <div>{Math.floor(counter / 100000) % 10}</div>
                <div>{Math.floor(counter / 10000) % 10}</div>
                <div>{Math.floor(counter / 1000) % 10}</div>
                <div>{Math.floor(counter / 100) % 10}</div>
                <div>,</div>
                <div>{Math.floor(counter / 10) % 10}</div>
                <div>{counter % 10}</div>
                <div className="btn-group-vertical btn-group-sm" role="group" aria-label="Vertical button group">
                    <button type="button" onClick={() => handleStart()} className="btn btn-outline-success">
                            {isRunning ? "Pause" : "Start"}
                    </button>
                    <button type="button" onClick={() => handleReset()} className="btn btn-outline-danger">
                            {"Reset"}
                    </button>
                </div>
            </div>
            <div className="container bg-dark">
                <div className="input-group my-3 p-3">
                    <span className="input-group-text bg-warning">Set Timer</span>
                    <input type="text" onChange={(event) => handleTimer(event)} aria-label="First name" className="form-control" placeholder="Set the timer in tenths of a second"/>
                </div>
            </div>
        </div>
    );
};

// 5. exportar
export default SimpleCounterBonus;
