import React, {useState} from 'react';
import { Header, Segment, Button,FormField, Label } from 'semantic-ui-react';
import cuid from 'cuid';
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Field,Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {createEvent,updateEvent} from '../eventAction';
import MyTextInput from '../../../common/myTextinput';
import useFirestoredoc from '../../../hooks/useFirestoredoc';
import { getEventfromFirestoreById } from '../../../firestore/firestore.service';
import { listenToEvents } from '../../events/eventAction';
import LoadingComponent from '../../../layout/loading.component';



const EventForm = ({match,history}) => {
   const dispatch = useDispatch();
   // useSelector(state => console.log(state.event.events.find(e => e)));
   const selectedEvent = useSelector(state => state.event.events.find(e => e.id === match.params.id));
   const  {loading} = useSelector(state => state.async);
  
   const intititalValues = selectedEvent ?? {
      title:'',
      category:'',
      description:'',
      city:'',
      address:'',
      date:''
};
const [values, setValues]  = useState(intititalValues);
   const validationSchema  = Yup.object().shape({
      title: Yup.string(6).required('title is required'),
      category: Yup.string().required('category is required'),
      description: Yup.string(6).required('description is required'),
      city: Yup.string().required('city is required'),
      address: Yup.string().required('address is required'),
      date:Yup.date().required('date is required')
  });


    useFirestoredoc({ query: () => getEventfromFirestoreById(match.params.id) ,
      data: event => dispatch(listenToEvents([event])),
      deps: [match.params.id, dispatch]
});


   //  const handleFormSubmit = (e) => {
   //      e.preventDefault();
   //      selectedEvent ? 
   //      dispatch(updateEvent({...selectedEvent, ...values})):
   //      dispatch(createEvent({...values, id: cuid(), hostPhotoUrl:'', hostedBy:'john Doe',attendess:[]}));
   //      // open(false);
   //      history.push('/events');
   //  };

   //  const handleInputChange = (e) => {
   //      const {name, value} = e.target;
   //      setValues({...values, [name]:value})  // {title:'',}
   //  }

if(loading || !selectedEvent) {return <LoadingComponent content='Loading Event...' />}
   return(
    <Formik 
    intititalValues = {intititalValues}
    validationSchema={validationSchema}
    onSubmit=  {values => {
       console.log('values', values);
      selectedEvent ? 
      dispatch(updateEvent({...selectedEvent, ...values})):
      dispatch(createEvent({...values, id: cuid(), hostPhotoUrl:'', hostedBy:'john Doe',attendess:[]}));
      // open(false);
      history.push('/events');
    }} 
    >


<Segment clearing>
<Header content={ selectedEvent ? 'Edit the Event' : 'Create new event' } />
<Form className='ui form'>
<MyTextInput 
 name="title"
 placeholder="event title"
 value={values.title}
/>
   
<MyTextInput 
 name="category"
 placeholder="event category"
 value={values.category}
/>

<MyTextInput 
 name="description"
 placeholder="event description"
 value={values.description}
/>

<MyTextInput 
 name="city"
 placeholder="event city"
 value={values.city}
/>

<MyTextInput 
 name="address"
 placeholder="event address"
 value={values.address}
/>

<MyTextInput 
type="date"
 name="date"
 placeholder="event date"
 value={values.date}
/>

{/* 
* <FormField className={errors.title && touched.title ? 'error' : 'success'}>
   <Field type="text" placeholder="event title"
    name='title'
   value={values.title} 
     onChange={(e => handleInputChange(e))}
    
   /> */}
                                {/* <ErrorMessage
                              name="title"
                              render={error => <Label content={error} basic color="red" />}
                             />
</FormField> */}

{/* <FormField className={errors.title && touched.title ? 'error' : 'success'}>
   <Field type="text" placeholder="category"
    name='category'
   value={values.category} 
     onChange={(e => handleInputChange(e))}
    
   />
</FormField>

<FormField className={errors.title && touched.title ? 'error' : 'success'}>
   <Field type="text" placeholder="description"
    name='description'
   value={values.description} 
     onChange={(e => handleInputChange(e))}
    
   />
</FormField>

<FormField className={errors.title && touched.title ? 'error' : 'success'}>
   <Field type="text" placeholder="city"
    name='city'
   value={values.city} 
     onChange={(e => handleInputChange(e))}
    
   />
</FormField>

<FormField className={errors.title && touched.title ? 'error' : 'success'}>
   <Field type="text" placeholder="address"
    name='address'
   value={values.address} 
     onChange={(e => handleInputChange(e))}
    
   />
</FormField>

<FormField className={errors.title && touched.title ? 'error' : 'success'}>
   <Field type="text" placeholder="state"
    name='state'
   value={values.state} 
     onChange={(e => handleInputChange(e))}
    
   />
</FormField>

<FormField className={errors.title && touched.title ? 'error' : 'success'}>
   <Field type="date" placeholder="date"
    name='date'
   value={values.date} 
     onChange={(e => handleInputChange(e))}
    
   />
</FormField> */}


{/* <Form.Field>
   <input type="text" placeholder="Category"
                 name='category'
                 value={values.category} 
                   onChange={(e => handleInputChange(e))}
   />
</Form.Field>



<Form.Field>
   <input type="text" placeholder="Description" 
                 name='description'
                 value={values.description} 
                   onChange={(e => handleInputChange(e))}
   />
</Form.Field>

<Form.Field>
   <input type="text" placeholder="City" 
                 name='city'
                 value={values.city} 
                   onChange={(e => handleInputChange(e))}
   />
</Form.Field>

<Form.Field>
   <input type="text" placeholder="address" 
                 name='address'
                 value={values.address} 
                   onChange={(e => handleInputChange(e))}
   />
</Form.Field>

<Form.Field>
   <input type="date" placeholder="Date" 
                 name='date'
                 value={values.date} 
                   onChange={(e => handleInputChange(e))}
   />
</Form.Field> */}
<Button type="submit" floated="right" positive content="submit"/>
<Button type="submit"
//    onClick={() => open(false)}
floated="right"  content="Cancel"/>
</Form>
</Segment>


       </Formik>
   )
};

export default EventForm;