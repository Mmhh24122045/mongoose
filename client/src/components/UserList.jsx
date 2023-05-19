import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getUsers } from '../redux/actions'

const UserList = () => {
    const {users,loading}= useSelector(state=>state)
const dispatch = useDispatch()
    useEffect(() => {
dispatch(getUsers())
    }, [])

// const refreshUsers = (x) => {
//     dispatch(deleteUser(x))
//     dispatch(getUsers())
// }

  return (
    <div>
{
    loading ? <h3>loading...</h3>

    : <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
{
    users.map(el=>
        <div style={{border:"1px solid black",padding:"3px",width:"300px"}}>
            <h3>{el.name}</h3>
            <p>  <b>Email:</b> {el.email} </p>
            <p> <b>Phone:</b> {el.phone}</p>
            <img src={el.avatar} alt="" height="50" width="50" />
            <button onClick={()=>dispatch(deleteUser(el._id))} >delete</button>
        </div>
        )
}
    </div>
     
}
    </div>
  )
}

export default UserList