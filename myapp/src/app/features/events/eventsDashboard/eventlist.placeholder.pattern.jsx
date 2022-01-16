import React from 'react';
import { Placeholder, Segment } from 'semantic-ui-react'

const EventListPlaceholderPattern = () => {
    return(
        <>
<Placeholder fluid >
    <Segment.Group>

    <Placeholder.Header image>
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Header>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Segment.Group>
  </Placeholder>
        </>
    )
}


export default EventListPlaceholderPattern;
