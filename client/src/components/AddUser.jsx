import React, { useState } from 'react'
import { addUser } from '../redux/actions'
import { useDispatch } from 'react-redux'

const AddUser = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [avatar, setAvatar] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        const newUser = {
            name,
            email,
            phone,
            avatar
        }
        e.preventDefault();
        dispatch(addUser(newUser))
    }
  return (
    <div style={{marginTop:"2%",textAlign:"center"}}>
        <form  onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",width:"30%",marginLeft:"35%"}} >
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}   />
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor="">Phone</label>
            <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} />
            <label htmlFor="">profile pic</label>
            <input type="text" value={avatar} onChange={(e)=>setAvatar(e.target.value)} />
            <button type="submit" >Add</button>
        </form>
    </div>
  )
}

export default AddUser