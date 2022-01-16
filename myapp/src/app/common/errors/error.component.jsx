import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Segment,Header, Button } from 'semantic-ui-react';

export default function ErrorComponent() {
    const {error} = useSelector(state => state.async);
    console.log('errorComponent', error);
    return(
        <Segment>
            <Header textAlign='center' content={ error?.message || 'oops-something went wrong'  } />
            <Button as={Link} to="/events" content="Return to evnets page}"> </Button>
        </Segment>
    )
}