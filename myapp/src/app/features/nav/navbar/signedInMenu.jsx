import React from 'react';
import {Menu, Button,Image, Dropdown} from 'semantic-ui-react';
import {Link, useHistory} from 'react-router-dom';
import customer from '../../../../assets/customer-1.jpg';
import {SignInuser, SignOutUser}  from '../../../features/auth/authAction';
import { useDispatch, useSelector } from 'react-redux';
const SignedInMenu = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.auth)
    const history = useHistory();
return(
    <Menu.Item position='right'>
    <Image avatar spaced="right" src={customer}  />
    <Dropdown pointing="top left" text={currentUser.email}>
        <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/createEvent"  text="Create Event" icon="plus" />
            <Dropdown.Item text="My Profile" icon="user" />
            <Dropdown.Item text="SignedOut" 
            onClick={() => {
                dispatch(SignOutUser())
                history.push('/')
            }}
            icon="power" />
        </Dropdown.Menu>
    </Dropdown>
   </Menu.Item>
);
};

export default SignedInMenu;