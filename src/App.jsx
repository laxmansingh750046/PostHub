import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login, logout} from './store/authSlice';
import {Header , Footer} from './components';
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  
  useEffect(() => {
     authService.getCurrentUser()
     .then(userData =>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout());
      } 
     }) 
     .catch(err => {
      console.error('Error fetching user data in app.jsx:', err);})  
     .finally(()=>setLoading(false));
  }, [])
   

  return loading ? <div> Loading...</div>:(<div 
    className='min-h-screen flex flex-wrap content-between bg-gray-400'>
     
    <div className='w-full block'>
      <Header />
        <main>
         <Outlet />
        </main>
      <Footer />
    </div>
    </div>);
}

export default App
