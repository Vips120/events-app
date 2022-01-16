import React from 'react';
import { Item, Segment } from 'semantic-ui-react';
import person from '../../../assets/customer-3.jpg';
const EventDetailsSideBar = () => {
return(
    <>
    <Segment
     textAlign="center"
     attached="top"
     color="teal"
     >
          2 People Going
    </Segment>
    <Segment attached>
    <Item.Group divided>
        <Item>

      <Item.Image size="small" src={person} />
      <Item.Content verticalAlign="middle">
          <Item.Header as="h3">
              <span>
                    John Doe
              </span>
          </Item.Header>
      </Item.Content>
      </Item>

      <Item>

<Item.Image size="small" src={person} />
<Item.Content verticalAlign="middle">
    <Item.Header as="h3">
        <span>
              Mak Doe
        </span>
    </Item.Header>
</Item.Content>
</Item>
    </Item.Group>
    </Segment>
    </>
)
};

export default EventDetailsSideBar;