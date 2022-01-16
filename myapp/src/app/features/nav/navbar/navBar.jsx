import React,{useState} from 'react';
import logo  from '../../../../assets/deliver.jpg';
import { Container,Menu,Button } from 'semantic-ui-react';
import { NavLink,useHistory } from 'react-router-dom';
import SignedOutMenu from './signedOutMenu';
import SignedInMenu from './signedInMenu';
import { useSelector } from 'react-redux';
const Navbar = ({setFormOpen}) => {
    // const history = useHistory();
    // const [authenticated, setauthenticated] = useState(false);
    // const handleSignedOut = () => {
    //   setauthenticated(false);
    //   history.push('/');
    // };

    const {authenticated} = useSelector(state => state.auth);
 return(
     <>
     <Menu inverted fixed="top">
         <Container>
             <Menu.Item as={NavLink} to="/" header>
<img src={logo}   alt="logo" style={{marginRight:'15px'}}/>Online Events
             </Menu.Item>
             <Menu.Item
              as={NavLink}
              to="/events"
              name="Events"
             />
                 {
                     authenticated &&
                     
             <Menu.Item as={NavLink} to="/createEvent">
             <Button color="blue" 
            //   onClick={() => setFormOpen(true)}
             inverted content="Create Event"/>
         </Menu.Item>
                 }
             {
                 authenticated ?  <SignedInMenu
                 /> : <SignedOutMenu
                 />
             }


         </Container>
     </Menu>
     </>
 )
};

export default Navbar;