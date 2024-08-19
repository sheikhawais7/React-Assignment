import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import Topbar from './Topbar'
import Navbar from './Navbar'

export default function Header() {

    const { isAuthenicated } = useAuthContext()

    return (
        <>
        {isAuthenicated?  <Navbar/> : <Topbar/>}
        </>
    )
}
