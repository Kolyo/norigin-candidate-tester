import React from "react";
import "./Timetracker.css";

const Timetracker = React.forwardRef((props, ref) => {
    const midnight = new Date().setHours(0, 0, 0, 0);
    const elapsedTime = Date.now() - midnight;
    let leftOffset = 5 * (elapsedTime / (1000 * 60)) + 100 + "px"; //100px is the table offset from App.css. 5 is the scale constant

    return (
        <div ref={ref} className="timetracker" style={{left: leftOffset}}></div>
    );
});

export default Timetracker;