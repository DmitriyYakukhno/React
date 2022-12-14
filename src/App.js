import React from 'react';
import './App.css'
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';


function App() {
  return (
    <div className='app-vrapper'>
    <Header />
    <Nav />
    <Profile />
    </div>
  );
}

export default App;
