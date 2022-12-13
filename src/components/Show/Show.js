import React from "react";
import "./Show.css"

export default function Channel(props) {
    const show = props.data;
    const startTime = new Date(show.start);
    const endTime = new Date(show.end);
    const timeDiff = (endTime - startTime) / (1000 * 60);
    const localTimeSettings = ['no', {hour: '2-digit', minute: '2-digit',}];

    return (
        <div style={{width: (5 * timeDiff) + "px"}}
             className="show"> {/* 5 is an arbitrary multiplier constant used to spread the boxes to a usable size. It's used in several places */}
            <div>{show.title}</div>
            <div className="time">
                {startTime.toLocaleTimeString(...localTimeSettings)} - {endTime.toLocaleTimeString(...localTimeSettings)}
            </div>
        </div>
    )
}