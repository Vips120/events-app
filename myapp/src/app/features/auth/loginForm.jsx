import { Formik, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import { closeModal } from '../../common/modals/modalReducer';
import ModalWrapper from '../../common/modals/ModalWrapper';
import MyTextInput from '../../common/myTextinput';
import { SignInuser } from './authAction';


const LoginForm = () => {
    const dispatch = useDispatch();
  return(
      <ModalWrapper size="mini" header="Sign in to events">
         <Formik
          initialValues={{email:'', password: ''}}
          validationSchema={Yup.object({
              email: Yup.string().required().email(),
              password: Yup.string().required()
          })}
          onSubmit = {(values, {setSubmitting}) => {
              alert('testing...');
              dispatch(SignInuser(values));
              setSubmitting(false);
              dispatch(closeModal());
          }}
         >
           {({isSubmitting, isValid, dirty,handleChange}) =>  (
               <Form className="ui form">
             <MyTextInput
              name="email"
              onChange={handleChange('email')}
              placeholder="Enter your email"
             />
             <MyTextInput
              name="passowrd"
              placeholder="enter your password"
              onChange={handleChange('password')}
             />
             <Button 
             
               loading={isSubmitting}
             disabled={!isValid || !dirty || isSubmitting}
               type="submit"
               fluid 
               size='large'
               color='teal'
               content="Login"
/>
               </Form> 
           )}
         </Formik>
      </ModalWrapper>
  )
}

export default LoginForm;