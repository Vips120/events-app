import React from 'react';
import {List,Image} from 'semantic-ui-react'

const EventListAttendee = ({attende}) => {  

  return(
      <>
      <List.Item>

      <Image size="mini" circular src={attende.photoURL}  alt={attende.name}/>
      </List.Item>
      </> 
  )
};

export default EventListAttendee;