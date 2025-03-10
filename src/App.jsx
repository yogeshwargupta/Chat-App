import React,{Suspense, lazy} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectRoute from './components/auth/ProtectRoute'
import { LayoutLoader } from './components/layout/Loaders'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Chat = lazy(() => import('./pages/Chat'))
const Groups = lazy(() => import('./pages/Groups'))
const NotFound = lazy(() => import('./pages/NotFound'))
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin') )
const DashBoard = lazy(() => import('./pages/admin/DashBoard') )
const UserManagement = lazy(() => import('./pages/admin/UserManagement') )
const ChatManagement = lazy(() => import('./pages/admin/ChatManagement') )
const Message = lazy(() => import('./pages/admin/MessageManagement') )
// const  = lazy(() => import('./pages/admin') )

let user = true;

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader/>}>
      <Routes>
        <Route element={<ProtectRoute user={user}/>}>
          <Route path="/" element={
            <Home/>} />
          <Route path="/chat/:chatId"   element={<Chat/>} />
          <Route path="/groups"   element={<Groups/>} />
        </Route>
        
        <Route path="/login" element={<ProtectRoute user={!user} redirect='/'>
          <Login/>
        </ProtectRoute>} />

        <Route path='/admin' element={<AdminLogin/>}/>

        <Route path='/admin/dashBoard' element={<DashBoard/>}/>
        <Route path='/admin/users-management' element={<UserManagement/>}/>
        <Route path='/admin/chats-management' element={<ChatManagement/>}/>
        <Route path='/admin/messages-management' element={<Message/>}/>

      <Route path='*' element={<NotFound/>}/>
      </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
