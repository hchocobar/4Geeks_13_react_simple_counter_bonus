import React from 'react';
import PropTypes from "prop-types";

function SimpleCounter (props) {
    return ( <div className="bigCounter">
        <div><i className="far fa-clock"></i></div>
        <div>{Math.floor(props.counter / 100000) % 10}</div>
        <div>{Math.floor(props.counter / 10000) % 10}</div>
        <div>{Math.floor(props.counter / 1000) % 10}</div>
        <div>{Math.floor(props.counter / 100) % 10}</div>
        <div>{Math.floor(props.counter / 10) % 10}</div>
        <div>{props.counter % 10}</div>
    </div>
    );
};

SimpleCounter.propTypes = {
    counter: PropTypes.number
}
export default SimpleCounter;