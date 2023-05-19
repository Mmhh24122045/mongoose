const { GETUSERS, DELETEUSER, ADDUSER } = require("./actionTypes");

const init = {
    users:[],
    loading:true,
    errormessage:null
}


const reducer = (state=init,{type,payload})=>{
    switch (type) {
        case GETUSERS:
            return {
                ...state,loading:false,users:payload
            }
    case DELETEUSER : 
    return {
        ...state,loading:false,users:state.users.filter(el=>el._id!==payload)
    }
    case ADDUSER:
        return {
            ...state,loading:false,users:[...state.users,payload]
        }
        default:
        return state
    }
}


export default reducer