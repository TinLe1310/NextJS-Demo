import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

function AllEvents(){
    const events = getAllEvents();
    const router = useRouter(); 

    function findEvent(year, month){
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    }

    return (
        <Fragment>
            <EventSearch onSearch={findEvent}/>
            <EventList items = {events}/>
        </Fragment>
    );
}

export default AllEvents;