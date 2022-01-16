import firebase from "../config/firebase";

const db  = firebase.firestore();

export function datafromSnapShot(snapshot) {
    if(!snapshot.exists) {return undefined;}
    const data = snapshot.data();  
    for(const prop in data) {
        if(data.hasOwnProperty(prop)) {
            if(data[prop] instanceof firebase.firestore.Timestamp ) {
                data[prop] = data[prop].toDate();
            }
        }
    }

    return {
        ...data,
        id: snapshot.id
    }
};


// export function getEventsFromfirestore(observer) {
//     return db.collection('events').onSnapshot(observer);
// };

export function getEventsFromfirestore() {
    return db.collection('events');
};

export function getEventfromFirestoreById(eventId) {
    return db.collection('events').doc(eventId);
};