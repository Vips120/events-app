import React from 'react';
import banner from '../../../assets/update.png';
import './home.css';
import {Container, Header, Segment,Image, Button,Icon} from 'semantic-ui-react';
const HomePage = ({history}) => {
return(
    <Segment inverted textAlign="center" vertical className="home_landingpage">
     <Container>
         <Header as='h1' inverted>
             <Image  src={banner}  fluid />
             SOCIAL EVENTS
         </Header>
         <Button size="huge" inverted
          onClick={() => history.push('/events')}
         >
              Get Started 
              <Icon name="right arrow" inverted />
         </Button>
     </Container>
    </Segment>
)
};

export default HomePage;
