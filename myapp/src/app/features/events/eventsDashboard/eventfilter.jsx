import React from 'react';
import {Menu,Header} from 'semantic-ui-react';
import Calendar from 'react-calendar';
export default function EventFilters() {
    return(
  <>
  <Menu vertical size='large' style={{widht:'100%'}} >
     <Header
      icon="filter"
      attached 
      color="purple"
      content="filters"
     />
     <Menu.Item content="All Events" />
     <Menu.Item content="I'm going" />
     <Menu.Item content="I'm hosting" />
  </Menu>
  <Header icon="Calendar" attached color="purple" content="select the event" />
  <Calendar/>
  </>
    );
}
