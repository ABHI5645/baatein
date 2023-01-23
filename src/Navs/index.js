import React,{useContext} from 'react'
import {BrowserRouter,Routes,Route,Navigate,Outlet} from "react-router-dom";
import ChatScreen from '../components/Chat/ChatScreen';
import GroupRecentChat from '../components/Chat/GroupRecentChat';
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
import Hoc from '../components/Hoc';

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
    const BottomNav=()=>{
        return(
            <Hoc>
                <Outlet/>
            </Hoc>
        )
    }
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={<LandingPage/>}/>
            <Route element={<ProtectRoute/>}>
                <Route path="/onboarding" element={<Onboarding/>}/>
                <Route element={<BottomNav/>}>
                <Route path="/chat/recentChat" element={<RecentChat/>}/>
                <Route path="/chat/GroupRecentChat" element={<GroupRecentChat/>}/>
                <Route path="/settings" element={<Settings/>}/>
                </Route>
                <Route path="/chat/newChat" element={<NewChat/>}/>
                
                <Route path="/chat/dms" element={<ChatScreen type="dms"/>}/>
                <Route path="/chat/groupchat" element={<ChatScreen type="group"/>}/>
                <Route path="/groupprofile" element={<GroupProfile/>}/>
                <Route path="/userprofile" element={<UserProfile/>}/>
x
                <Route path="/settings/profile" element={<MyProfile/>}/>
                <Route path="/settings/wallpaper" element={<ChatWallpaper/>}/>
                <Route/>
                
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Navs
