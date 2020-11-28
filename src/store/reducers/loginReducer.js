const initialState = {
    userLoggedIn: true,
    userToken: "",
    userName: "",
    userRole: "",
};

let loginReducer = function(state = initialState, action) {
    let stateCopy
    switch(action.type) {
        case "LOGIN":      
            stateCopy = {
                userLoggedIn: true,
                userToken: action.token,
                userName: action.userName,
                userRole: action.userRole,
            };
            return stateCopy;
        case "LOGOUT":
            stateCopy = {
                userLoggedIn: false,
                userToken: "",
                userName: "",
                userRole: "",
            }
            return stateCopy;
        default: return state;
    }
}


export const login = (token, userName, userRole) => ({type:"LOGIN", token, userName, userRole});
export const logout = () => ({type:"LOGOUT"});

export default loginReducer;