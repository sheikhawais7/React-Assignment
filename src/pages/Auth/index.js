import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'
import ForgetPassword from './ForgetPassword'
import ResetPassword from './ResetPassword'

export default function index() {
  return (
    <>
    <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/forgetpassword' element={<ForgetPassword/>} />
        <Route path='/resetpassword' element={<ResetPassword/>} />
    </Routes>
    </>
  )
}
