import { useRouter } from "next/router";
import { getEventById, getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";

function FilteredEventPage(){
    const router = useRouter();
    const filteredData = router.query.slug;

    if(!filteredData){
        return(
            <p className="center">Loading...</p>
        );
    }

    const filteredYear = filteredData[0];
    const filteredMonth = filteredData[1];
    
    const numYear = +filteredYear;
    const numMonth = +filteredMonth;

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12 || numMonth < 1 ){
        return(
            <Fragment>
                <p className="center">Invalid Filter, Please Adjust Your Value!</p>
                <div className="center">
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
            );
    }

    const filteredEvents = getFilteredEvents({
        year: numYear,
        month: numMonth,
    }); 

    if(!filteredEvents || filteredEvents.length === 0){
        return(
            <Fragment>
                <p>No Events Found For This Filter</p>
                <div className="center">
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
        );
    }

    const date = new Date(numYear, numMonth -1);

    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList items={filteredEvents}/>
        </Fragment>
    );
}

export default FilteredEventPage;