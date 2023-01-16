import React from 'react';
import './App.css';
import Navs from './Navs';
import { UserProvider } from '../src/context/userContext';
import {DarkProvider} from './context/DarkmodeContext'
function App() {
  return (
    <div className="App">
      <UserProvider>
      <DarkProvider>
      <Navs/>
      </DarkProvider>
      </UserProvider>
    </div>
  );
}

export default App;
