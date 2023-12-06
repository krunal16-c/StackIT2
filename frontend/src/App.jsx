import { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '@/components/Header'

import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Chat from '@/pages/Chat'
import LandingPage from '@/pages/LandingPage'

import AuthProvider from '@/contexts/AuthContext'
import ChatContextProvider from '@/contexts/ChatContext'

import '@/App.css'
import PrivateRoute from '@/utils/ProtectedRoute'

function App () {
  return (
    <div className='App h-screen flex flex-col'>
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/register' exact element={<Register />} />
            <Route exact path='/chat' element={<PrivateRoute />}>
              <Route
                exact
                path='/chat'
                element={
                  <ChatContextProvider>
                    <Chat />
                  </ChatContextProvider>
                }
              />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
