import React, {useState} from 'react';
import {Container} from 'semantic-ui-react';
import EventDashboard from '../features/events/eventsDashboard/eventDashboard';
import {Route,Switch} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../features/nav/navbar/navBar';
import './App.css';
import HomePage from '../features/home/home';
import EventDetailPage from '../features/EventDetails/eventDetails';
import EventForm from '../features/events/eventForm/eventForm';
import Sandbox from '../features/sandbox/sandbox';
import ErrorComponent from '../common/errors/error.component';
import ModalManager from '../common/modals/modalManger';

const App = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const handelSelectEvent = (event) => {
        console.log('event', event);
     setSelectedEvent(event);
     setFormOpen(true);
     console.log(selectedEvent);
    };

    const handleCreateFormOPen  = () => {
        setSelectedEvent(null);
        setFormOpen(true);
    }
 
 return(
     <>
     <ModalManager/>
     <ToastContainer
     position='bottom-right'
     autoClose={2000}
     />
             <Route exact path="/"  component={HomePage} />
             <Route 
               exact
               path={'/(.+)'} 
               render={() => (
                       <>
                           <Navbar setFormOpen={handleCreateFormOPen} />  
    <Container className="main">

        <Route exact path="/events"  component={EventDashboard} />
        <Route exact path="/sandbox" component={Sandbox}/>
        <Route   exact path="/events/:id"  component={EventDetailPage}/> 
        <Route exact path="/createEvent"  component={EventForm}/>
        <Route exact path="/manage/:id"  component={EventForm}/>
         <Route exact path="/error" component={ErrorComponent}/>
    {/* <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen}
     selectEvent={handelSelectEvent}
     selectedEvent={selectedEvent}
    /> */}
    </Container>
                       
                       </>
                       )}
              
             />

     </>
 )
};

export default App;
