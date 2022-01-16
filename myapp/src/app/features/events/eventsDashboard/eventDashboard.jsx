import React, {useState,useEffect} from 'react';
import {Grid} from 'semantic-ui-react';
import {useDispatch, useSelector} from 'react-redux';
import EventForm from '../eventForm/eventForm';
import EventListItems from './event.list';
import {sampleData} from '../../../api/sampleData';
import LoadingComponent from '../../../layout/loading.component';
import EventListPlaceholderPattern from './eventlist.placeholder.pattern';
import EventFilters from './eventfilter';
import { getEventsFromfirestore,datafromSnapShot } from '../../../firestore/firestore.service';
import { listenToEvents } from '../eventAction';
import { asyncActionError, asyncActionStart } from '../../../async/asyncReducer';
import useFirestoreCollection from '../../../hooks/useFirestorecollection';


const EventDashboard = ({formOpen, setFormOpen, selectEvent,selectedEvent}) => {
    // const [events,setEvents] = useState(sampleData);
    let {events} = useSelector(state => state.event)  
    let {loading} = useSelector(state => state.async);
    const dispatch = useDispatch();
// if(loading) {return <LoadingComponent/>}

//    useEffect(() => {
//        dispatch(asyncActionStart());
//        const subscribe = getEventsFromfirestore({
//            next: snapshot => dispatch(listenToEvents(snapshot.docs.map(docsnapshot => datafromSnapShot(docsnapshot)))),
//            error: error => dispatch(asyncActionError(error)),
//            complete: () => console.log("you will never see this message")
//        });
//        return subscribe;

//    }, [dispatch]);

useFirestoreCollection({query: () => getEventsFromfirestore(),
     data: events => dispatch(listenToEvents(events)),
     deps:[dispatch]
});

    const handleCreateEvent = (event) => {
    //  setEvents([...events, event]);
    };

    const handleUpdateEvent = (updateEvent) => {
        // console.log('updateEvent', updateEvent);
        // setEvents(events.map(evt => evt.id === updateEvent.id ? updateEvent : evt));
        // selectEvent(null);
        // setFormOpen(false);
    };

    const handleDeleteEvent = (eventId) => {
        // setEvents(events.filter(evt => evt.id !== eventId));
    } 
return(
    <Grid>
        <Grid.Column width={10}>
            {
                loading && 
                <>
                 <EventListPlaceholderPattern/>
                 <EventListPlaceholderPattern/>
                </>
            }
             <EventListItems events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>

            <EventFilters/>
            {/* {
                formOpen && <EventForm open={setFormOpen} 
                createEvent={handleCreateEvent}
                 selectedEvent={selectedEvent}
                 key={selectedEvent ? selectedEvent.id : null }
                 updateEvent = {handleUpdateEvent}
                />
            } */}

        </Grid.Column>
    </Grid>
)
};

export default EventDashboard

/// app -->
//  dashboard
//   list, sulist