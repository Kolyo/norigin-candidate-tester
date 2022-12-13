import React from "react";
import "./Timeline.css";

export default function Timeline() {
    let timeline = [];

    for (let i = 0; i < 24; i++) {
        timeline.push(<div className="hourSlot" key={i}>{(i + ":00").padStart(5, "0")}</div>);
    }

    return (
        <div className="channel timeline">
            {timeline}
        </div>
    );
}