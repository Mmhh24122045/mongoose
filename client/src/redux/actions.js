import axios from "axios"
import { ADDUSER, DELETEUSER, GETUSERS } from "./actionTypes"


export const getUsers = () =>  async(dispatch)=> {
    try {
        const res = await axios.get("/getUsers")
        console.log(res)
        dispatch({
            type:GETUSERS,
            payload:res.data
        })
    } catch (error) {
        alert("get error")
    }
}


export const deleteUser = (id) => async(dispatch) => {
    try {
        const res = await axios.delete(`/deleteUser/${id}`)
        console.log(res.data)
        dispatch({
            type:DELETEUSER,
            payload:id
        })
    } catch (error) {
        alert("delete error")
    }
}


export const addUser = (newUser) => async(dispatch) => {
    try {
        const res = await axios.post("/addUsers",newUser)
        console.log(res.data)
        dispatch({
            type:ADDUSER,
            payload:res.data
        })
    } catch (error) {
        alert("add error")
    }
}