import React, { useState,useContext } from 'react'
import { Button, CircularProgress, Grid, TextField } from "@mui/material";
import './onboarding.css'
import { userContext } from '../../context/userContext';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Toastmessage from '../utils/Toastmessage';
import { useNavigate } from 'react-router-dom';


function Onboarding() {
  const navigate=useNavigate();
  const [state,dispatch]=useContext(userContext);
  const [loading,setLoading]=useState(false);
  const [userInfo,setUserInfo]=useState({
    name:state.user.displayName,
    email:state.user.email,
    phone:'',
    status:'',
    photo:state.user.photoURL
  })
  const submit=async (e)=>{
    setLoading(true);
    e.preventDefault();
    await setDoc(doc(db, "userInfo", userInfo.email), {
      ...userInfo,
    });
    setLoading(false);
    Toastmessage({message:"User created",type:"success"})
    navigate("/chat/recentchat");
  
  }
  return (
     <form onSubmit={(e)=>submit(e)}>
     <Grid className='onboarding-container' container spacing={3}>
      <Grid item xs={12} sm={6}>

        <TextField
        label="Name"
        required
        id="name"
        variant="outlined"
        size="small" 
        fullWidth
        value={userInfo.name}
        onChange={(e)=>setUserInfo({...userInfo,name:e.target.value})}
        />
      </Grid>
      <Grid item xs={12} sm={6}>

        <TextField
        label="Email"
        id="email"
        variant="outlined"
        size="small" 
        fullWidth
        disabled
        value={userInfo.email}
        onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})}
        />
      </Grid>
      <Grid item xs={12} sm={6}>

        <TextField
        label="Phone Number"
        id="phone"
        variant="outlined"
        size="small" 
        value={userInfo.phone}
        onChange={(e)=>setUserInfo({...userInfo,phone:e.target.value})}
        /> 
      </Grid>
      <Grid item xs={12} sm={6}>

        <TextField
        label="Status"
        id="status"
        variant="outlined"
        size="small" 
        value={userInfo.status}
        onChange={(e)=>setUserInfo({
          ...userInfo,status:e.target.value
        })}
        />
      </Grid>
      <Grid item xs={12}>
        {
          loading?(<div>
            <CircularProgress
            size={30}
            />
          </div>
          ):(
        <button 
        type='submit'
        className='submit-button'>Submit</button>
        )}
      </Grid>
     </Grid>
     </form>
    
  )
}

export default Onboarding
