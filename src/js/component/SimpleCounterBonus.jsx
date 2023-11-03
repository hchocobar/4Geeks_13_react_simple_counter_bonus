// 1.- importar 
import React, { useState, useEffect } from "react";


// 2. defino el componente
function SimpleCounterBonus () {
    // 3. codigo de JS
    // 3.1 defino todos los estados (useState)
    // 3.2 ....
	const [isActive, setIsActive] = useState(false);
	const [counter, setCounter] = useState(0);
	const [countDown, setCountDown] = useState(false);
    const [status, setStatus] = useState({icon: "fas fa-clock", 
                                          title: "Clock", 
                                          className:"text-center"});

    // 3.3 Handler
	const handleReset = () => {
		setIsActive(false);
		setCounter(0);
        setCountDown(false);
        setStatus({icon:"fas fa-clock", title:"Clock", className:"text-center"});
	};

    const handleStart = () => {
        setIsActive(!isActive);  // ! significa negación, cambiando de True a False o viceversa.
        if (countDown) {
            setStatus({icon: "fas fa-history", title:"Timer", className:"text-center text-danger"});
        } else {
            setStatus({icon: "fas fa-stopwatch", title:"Chronometer", className:"text-center text-primary"});
        }
    };

    const handleTimer = (e) => {
        if (
            e.target.value !== null &&
            e.target.value >= 0 &&
            e.target.value.length > 0 &&
            !isNaN(e.target.value)
        ) {
            setCounter(parseInt(e.target.value));
            setCountDown(true);
            setStatus({icon: "fas fa-history", title:"Timer", className:"text-center text-danger"});
        } else {
            setCounter(0);
            e.target.value = "";
        }
    }


    // useEffect
	useEffect(() => {
		if (isActive) {
			const nIntervalId = setInterval(() => {
				if (countDown === true && counter >= 0) {
					if (counter === 0) {
						setCounter(0);
						setIsActive(false);
					} else {
						setCounter(counter => counter - 1);
					}
				} else if (countDown === false) {
					setCounter(counter => counter + 1);
				}
			}, 10);
			return () => clearInterval(nIntervalId);
		}
	}, [isActive, counter, countDown]);

    // 4. Ultimo comando de JS -> return con un único elemnto html
    return ( 
        <div className="conta">
            <h1 className="text-center mt-5">{"Simple Counter"}</h1>
            <h2 className={status.className}>{status.title}</h2>
            <div className="bigCounter">
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
                    <button type="button" className="btn btn-outline-success"
                        onClick={() => handleStart()}>
                            {isActive ? "Pause" : "Start"}
                    </button>
                    <button type="button" className="btn btn-outline-danger"
                        onClick={() => handleReset()}>
                            {"Reset"}
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="input-group my-3">
                    <span className="input-group-text bg-warning">Set Timer</span>
                    <input type="text" aria-label="First name" className="form-control"
                            placeholder="Set the timer in tenths of a second" 
                            onChange={(e) => handleTimer(e)}/>
                </div>
            </div>
        </div>
    );
};

// 5. exportar
export default SimpleCounterBonus;