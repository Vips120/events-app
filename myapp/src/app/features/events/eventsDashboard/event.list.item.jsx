import React from 'react';
import { Segment,Item, Icon, List,Button } from 'semantic-ui-react';
import EventListAttendee from './eventAttendee';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deleteEvent} from '../eventAction';
const EventListItem = ({event}) => { 
    const dispatch = useDispatch(); 
  return(
      <>
       <Segment.Group >
           <Segment >
               <Item.Group>
                   <Item>
                       <Item.Image size="tiny" circular src={event.hostPhotoUrl}  alt='sunil' />
                       <Item.Content>
                           <Item.Header content={event.title} />
                           <Item.Description>
                               Hosted By {event.hostedBy}
                           </Item.Description>
                       </Item.Content>
                   </Item>
               </Item.Group>
           </Segment>
           <Segment>
               <span>
                   <Icon name="clock"/>{event.date.toString()}
                    <Icon name='point'/>{event.address}
               </span>
           </Segment>
           <Segment clearing>
               <List horizontal>
                   {event.attendess.map(attende => (

<EventListAttendee  attende={attende}  key={attende.id}/>
                   ))}
               </List>
           </Segment>
           <Segment clearing>
               <span>
                   {event.description}
               </span>
               <Button color="teal" floated="right" content="view"
                 as={Link}
                 to={`/events/${event.id}`}
                
               />
               <Button color="red" floated="right" content="delete"
                 onClick={() => dispatch( deleteEvent(event.id))}
               />
           </Segment>
       </Segment.Group>
      </>
  )
};

export default EventListItem;

