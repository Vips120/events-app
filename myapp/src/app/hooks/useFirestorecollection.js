import  {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {asyncActionError, asyncActionFinish, asyncActionStart} from '../async/asyncReducer';
import {datafromSnapShot} from '../firestore/firestore.service';
export default function useFirestoreCollection({query,data,deps}) {
  console.log('query', query(), data, deps);
 const dispatch = useDispatch();
 useEffect(() => {
   dispatch(asyncActionStart());
   const subQuery = query().onSnapshot(snapshot => {
     const docs = snapshot.docs.map(doc => datafromSnapShot(doc));
     data(docs);
     dispatch(asyncActionFinish())
   },
    error => dispatch(asyncActionError())
   );
   return () => subQuery();
 }, deps);
}