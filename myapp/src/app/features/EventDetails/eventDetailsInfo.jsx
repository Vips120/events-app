import React from 'react';
import {Button, Grid, Icon, Segment} from 'semantic-ui-react';
const EventDetailsInfo = ({event}) => {
return(
<Segment.Group>
    <Segment attached="top">
        <Grid>
            <Grid.Column width={2} >
                <Icon size="large" color="purple" name="info"/>
            </Grid.Column>
            <Grid.Column width={12} >
                <p>{event.description}</p>
            </Grid.Column>
            
        </Grid>
    </Segment>
    <Segment attached>
        <Grid verticalAlign="middle" >
             <Grid.Column width={2}>
                 <Icon name="calendar" size="large" color="purple"/>
             </Grid.Column>
             <Grid.Column width={12} >
                <p>{event.address}</p>
            </Grid.Column>
            <Grid.Column width={4} >
   <Button color="purple" size="medium" content="Show Map" />
            </Grid.Column>
        </Grid>
    </Segment>
</Segment.Group>
)
};

export default EventDetailsInfo;