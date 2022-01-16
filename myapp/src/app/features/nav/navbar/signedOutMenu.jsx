import React from 'react';
import { useDispatch } from 'react-redux';
import {Menu, Button} from 'semantic-ui-react';
import { openModal } from '../../../common/modals/modalReducer';

const SignedOutMenu = ({setAuthenticated}) => {
    const dispatch = useDispatch();
return(
    <Menu.Item position='right'>
    <Button primary inverted content='Login'
    onClick={() => dispatch(openModal({modalType:'LoginForm'}))}
    />
    <Button color='red' inverted content='Register' 
     style={{marginLeft: '0.8em'}}
    />
   </Menu.Item>
);
};

export default SignedOutMenu;