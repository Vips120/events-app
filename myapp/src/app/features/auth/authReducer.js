const initialState = {
    authenticated:false,
    currentUser: null
};

const authReducer = (state = initialState,  {type,payload}) => {
   switch(type) {
       case 'SIGN_IN_USER':
           return {
               ...state, authenticated:true, 
               currentUser: {
                   email: payload.email
               }
           };
           default:
               return state;
   }
};

export default authReducer;