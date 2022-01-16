import  {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {asyncActionError, asyncActionFinish, asyncActionStart} from '../async/asyncReducer';
import {datafromSnapShot} from '../firestore/firestore.service';
export default function useFirestoredoc({query,data,deps}) {
  
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(asyncActionStart());
   const subQuery = query().onSnapshot(snapshot => {
     data(datafromSnapShot(snapshot));
     dispatch(asyncActionFinish())
   },
    error => dispatch(asyncActionError())
   );
   return () => subQuery();
 }, deps);
}