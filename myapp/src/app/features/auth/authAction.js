import firebase from "../../../app/config/firebase";
export const SignInuser = (creds) => {
    alert(creds);
    return async function(dispatch) {
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(creds.email, creds.password);
            dispatch({type: 'SIGN_IN_USER', payload: result.user});
        }
        catch(error) {
       throw error;
        }
    }

};

export const SignOutUser = () => {
    return  {type: 'SIGN_OUT_USER'};
};