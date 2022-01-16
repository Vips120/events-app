import React from 'react';
import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../common/modals/modalReducer';
import TestPlaceInput from './inputplaces';
import  {incrementAction,decrementAction,increment,decrement}   from './testReducer';


export default function Sandbox() {
    const data = useSelector(state => state.test.data);
    const {loading} = useSelector(state => state.async);
    const dispatch = useDispatch();
    const [targetBtn,setTarget] = useState(null);
    console.log('data....', data);
    return(
        <>
        <h1>Testing Redux</h1>
        <h3>
            data: {data}
        </h3>
        {/* <Button content='increment' color="green"
         onClick={() => dispatch(incrementAction(5))}
        />
        <Button content="decrement" color="red"
         onClick={() => dispatch(decrementAction(5))}
        />     */}

<Button 
name="increment"
content='increment' 
color="green"
loading={loading && targetBtn === "increment"}
         onClick={(e) => {dispatch(increment(5))
                     setTarget(e.target.name); 
        }}
        />
        <Button
        name="decrement"
        content="decrement" color="red"
        loading={loading && targetBtn === "decrement"}
         onClick={(e) => {
             dispatch(decrement(5))
             setTarget(e.target.name)
         }
            }
        />    
        <div style={{marginTop:'20px'}}>
        <TestPlaceInput/>
        </div>
<hr/>
<Button onClick={() => dispatch(openModal({modalType:'TestModal', modalProps: {data}}))} content='Open Modal' color="violet" />
        </>
    )
}

