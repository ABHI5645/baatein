import React,{useContext} from 'react'
import {BrowserRouter,Routes,Route,Navigate,Outlet} from "react-router-dom";
import Dms from '../components/Chat/Dms';
import GroupChat from '../components/Chat/GroupChat';
import NewChat from '../components/Chat/NewChat';
import RecentChat from '../components/Chat/RecentChat';
import LandingPage from '../components/LandingPage';
import Onboarding from '../components/Onboarding';
import GroupProfile from '../components/Profiles/GroupProfile';
import UserProfile from '../components/Profiles/UserProfile';
import Settings from '../components/Settings';
import ChatWallpaper from '../components/Settings/ChatWallpaper';
import MyProfile from '../components/Settings/MyProfile';
import { userContext } from '../context/userContext';


function Navs() {
    const [state,dispatch]=useContext(userContext);
    const ProtectRoute=()=>{
        if(
            
        state.isAuth){
            return <Outlet/>
        }
        else{
            return <Navigate to="/"/>
        }
    };
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<LandingPage/>}/>
            <Route element={<ProtectRoute/>}>
                <Route path="/onboarding" element={<Onboarding/>}/>
                <Route path="/chat/recentChat" element={<RecentChat/>}/>
                <Route path="/chat/newChat" element={<NewChat/>}/>
                <Route path="/chat/groupchat" element={<GroupChat/>}/>
                <Route path="/chat/dms" element={<Dms/>}/>
                <Route path="/groupprofile" element={<GroupProfile/>}/>
                <Route path="/userprofile" element={<UserProfile/>}/>
                <Route path="/settings" element={<Settings/>}/>
                <Route path="/settings/profile" element={<MyProfile/>}/>
                <Route path="/settings/wallpaper" element={<ChatWallpaper/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Navs
