import React, { useState, useEffect } from "react";


export const SimpleCounter = () => {
	const [counter, setCounter] = useState(0);
	const [isRunning, setIsRunning] = useState(false);
    const [status, setStatus] = useState({icon: "fas fa-clock", 
                                          title: "Clock", 
                                          titleStyle:"text-center text-success"});

    const handleStart = () => {
        setIsRunning(!isRunning);  // ! significa negación, cambiando de True a False o viceversa.
        setStatus({icon: "fas fa-stopwatch", 
                   title:"Chronometer", 
                   titleStyle:"text-center text-primary"});
    };

	const handleReset = () => {
		setCounter(0);
		setIsRunning(false);
        setStatus({icon:"fas fa-clock", 
                   title:"Clock", 
                   titleStyle:"text-center text-success"});
	};


	useEffect(() => {
		if (isRunning) {
			const newInterval = setInterval(() => {
				setCounter(counter => counter + 1);
			}, 10);

			return () => clearInterval(newInterval);
		}
	}, [isRunning]);


    return ( 
        <div className="container">
            <h1 className="mt-5">Simple Counter</h1>
            <h2 className={status.titleStyle}>{status.title}</h2>
            <div className="big-counter">
                <div><i className={status.icon}/></div>
                <div>{Math.floor(counter / 100000000) % 10}</div>
                <div>{Math.floor(counter / 10000000) % 10}</div>
                <div>{Math.floor(counter / 1000000) % 10}</div>
                <div>{Math.floor(counter / 100000) % 10}</div>
                <div>{Math.floor(counter / 10000) % 10}</div>
                <div>{Math.floor(counter / 1000) % 10}</div>
                <div>{Math.floor(counter / 100) % 10}</div>
                <div>{','}</div>
                <div>{Math.floor(counter / 10) % 10}</div>
                <div>{Math.floor(counter) % 10}</div>
                <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                    <button type="button" onClick={handleStart} className="btn btn-outline-success">
                        {isRunning ? 'Pause' : counter == 0 ? 'Start' : 'Continue'}
                    </button>
                    <button type="button" onClick={handleReset} className="btn btn-outline-danger">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};
