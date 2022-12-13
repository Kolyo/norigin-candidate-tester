import React, {useState, useEffect, useRef} from "react";
import "./App.css";
import Channel from "./components/Channel/Channel";
import Timeline from "./components/Timeline/Timeline";
import Timetracker from "./components/Timetracker/Timetracker";

export default function App() {
    const timeTrackerRef = useRef(null);

    const apiEndpoint = 'http://localhost:1337'
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        fetch(apiEndpoint + `/epg`)
            .then(response => response.json())
            .then(data => setChannels(data.channels))
            .then(scrollToNow);
    }, []);

    const channelsList = channels.map(channel => <Channel data={channel} key={channel.id}/>);

    function scrollToNow() {
        timeTrackerRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    return (
        <>
            <Timetracker ref={timeTrackerRef}/>
            <Timeline/>
            {channelsList}
            <button className="button primary scroll-to-now" onClick={scrollToNow}>Now</button>
        </>
    );
}