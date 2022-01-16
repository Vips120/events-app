import React from 'react';
import {Grid} from 'semantic-ui-react';
import EventDetailsChat from './eventDetailschat';
import EventDetailsHeader from './eventDetailsHeader';
import EventDetailsInfo from './eventDetailsInfo';
import EventDetailsSideBar from './eventDetailsSiderbar';
import {useDispatch, useSelector} from 'react-redux';
import useFirestoredoc from '../../hooks/useFirestoredoc';
import { getEventfromFirestoreById } from '../../firestore/firestore.service';
import { listenToEvents } from '../events/eventAction';
import LoadingComponent from '../../layout/loading.component';
import { Redirect } from 'react-router-dom';
const EventDetailPage = ({match}) => {
    const dispatch = useDispatch();
    const event = useSelector(state => state.event.events.find(e => e.id === match.params.id));
    const  {loading,error} = useSelector(state => state.async);
    console.log('loading', event, loading, error);
    useFirestoredoc({ query: () => getEventfromFirestoreById(match.params.id) ,
                      data: event => dispatch(listenToEvents([event])),
                      deps: [match.params.id, dispatch]
    });
    if(loading || (!event && !error)) {return <LoadingComponent content='Loading Event...' />}
    // if(error) {return  <Redirect to="/error" />}
return(
    <Grid>
        <Grid.Column width={10}>
            <EventDetailsHeader event={event}/>
            <EventDetailsInfo event={event}/>
            <EventDetailsChat/>
        </Grid.Column>
        <Grid.Column width={6}>
            <EventDetailsSideBar/>
        </Grid.Column>
    </Grid>
)
};

export default EventDetailPage;