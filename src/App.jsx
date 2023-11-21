import React from 'react';
import SideBar from './components/Sidebar/SideBar';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <Header />
      <div className='content-container'>
        <SideBar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
