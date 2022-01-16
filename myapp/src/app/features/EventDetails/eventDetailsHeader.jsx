import React from 'react';
import {Link} from 'react-router-dom';
import {Segment,Image, Item, Header, Button} from 'semantic-ui-react';

const EventDetailsHeader = ({event}) => {
    console.log('event', event);
return(
    <Segment.Group>
        <Segment basic attached="top">
            <Image src={event.hostPhotoUrl}  fluid />
            <Segment basic>
                <Item.Group>
                    <Item>
                        <Item.Content> 
                            <Header 
                            content={event.title}
                            />
                            <p>{event.date.toString()}</p>
                            <p>
                                Hosted By <strong>{event.hostedBy}</strong>
                            </p>
                        </Item.Content>
                    </Item>
                </Item.Group>
</Segment>
        </Segment>
  <Segment attached="bottom" >
    <Button>Cancel My Place</Button>
    <Button color="grey">JOIN THIS EVENT</Button>
    <Button color="purple"
     as={Link} to={`/manage/${event.id}`}
    floated="right"
>
        MANAGE EVENT
    </Button>
  </Segment>
        
    </Segment.Group>
)
};

export default EventDetailsHeader;