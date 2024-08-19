import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Auth from './Auth'
import Dashboard from './Dashboard'
import NoPage from './NoPage'
import { useAuthContext } from '../contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import PrivateRoute from './PrivateRoutes'
import Frontend from './Frontend'



export default function Index() {
  const {isAuthenicated} = useAuthContext() 
  console.log('isAuthenicated', isAuthenicated)
  return (
    <>
    <main>
        <Routes>
            <Route path='/auth/*' element={!isAuthenicated ? <Auth /> : <Navigate to={"/dashboard/"}/>} />
            <Route path='/dashboard/*' element={<PrivateRoute Component={Dashboard}/>} />
            <Route path='/*' element={<Frontend/>} />

            <Route path='*' element={<NoPage/>} />
        </Routes>
    </main>
    </>
  )
}
