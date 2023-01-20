import React, { useContext } from 'react';
import bg from "../../assets/Cover.svg";
import logo from "../../assets/logo.png";
import signInIcon from "../../assets/signin.png";
import "./landingpage.css";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from "../../firebaseConfig";
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../context/userContext';
function LandingPage() {
  const [state,dispatch]=useContext(userContext);
  const navigate=useNavigate();
  const redirectUser=({displayName,email,photoURL
  })=>{
    dispatch({
      type:"LOGIN",
      payload:{
        displayName,
        email,
        photoURL,
      }
    })
    if(true){
        navigate('/chat/recentchat');
    }
    else{
        navigate('/onboarding');
    }
  }
  const signIn=()=>{
    const provider=new GoogleAuthProvider();
    console.log("sign in");
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
    const user=result.user;
    const {displayName,email,photoURL
    }=user;
    redirectUser({displayName,email,photoURL
    })
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  }
  return (
    <div
        className='container'
        style={{
            backgroundImage:`url(${bg})`,
        }}
    >
        <div>
            <div className='heading'>
                <img src={logo} width="60px" alt="logo"/>
                <div>Baatein</div>
            </div>
        <button onClick={signIn}>
            <img src={signInIcon} alt="signin" width="100%"/>

        </button>
    
        </div>
      
    </div>
  )
}

export default LandingPage
