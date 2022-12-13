import React from "react";
import "./Channel.css";
import Show from "../Show/Show"

export default function Channel(props) {
    const channel = props.data;

    return (
        <div className="channel">
            <div className="title">{channel.title}</div>
            {channel.schedules.map((show, index) => <Show data={show} key={index}/>)}
            {/* using index for a key is an antipattern but in this case we don't have unique IDs. In a non-mocked environment
            such IDs would be available from the DB */}
        </div>
    )
}