import React, { useContext, useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Chat from './pages/Chat/Chat'
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
import Login from './pages/Login/Login'
import { ToastContainer, toast } from 'react-toastify';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './config/firebase'
import { AppContext } from './context/AppContext'

const App = () => {

  const navigate = useNavigate();
  const {loadUserData} = useContext(AppContext)
  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if (user){
        navigate('/huskytales/chat');
        await loadUserData(user.uid)
      }
      else{
        navigate('/huskytales');
      }
    })
  },[])
  return (
    <>
      <ToastContainer/>
      <Routes>
        <Route path='/huskytales' element={<Login/>}/>
        <Route path='/huskytales/chat' element={<Chat/>}/>
        <Route path='/huskytales/profile' element={<ProfileUpdate/>}/>
      </Routes>
    </>
  )
}

export default App
