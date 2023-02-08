import { ADD_STUDENT, DELETE_STUDENT, EDIT, GET_USER, LOGOUT, SETDATA, SIGNUP } from "./action";

const intialState = {

    user : JSON.parse(localStorage.getItem("user")),
    students:[]

}

export  const reducer = (state=intialState,action)=>{
    switch (action.type) {
        case GET_USER:
            return state
        case SETDATA:
            return {
                ...state,
                students:[...action.payload]
            }
        case SIGNUP:
            return {
                ...state,
                user:action.payload
            }
        case ADD_STUDENT:
            return {
                ...state,
                students:[{...action.payload},...state.students]
            }
        case DELETE_STUDENT:
            return {
                ...state,
                students:state.students.filter((prev)=>action.payload.id!==prev.id)
            }
        case LOGOUT:
            return {
                ...state,
                user:"",
                students:[]
            }
        case EDIT:
            return {
                ...state,
                students:state.students.map((prev)=>action.payload.id===prev.id ? action.payload:prev)
            }
        default:
            return state;
    }
}