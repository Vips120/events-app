import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

export default function LoadingComponent({isActive= true, content="Loading.."}) {
    return(
<Dimmer inverted={isActive} 
 active={true}
>
    <Loader content={content}/>
</Dimmer>
    );
}