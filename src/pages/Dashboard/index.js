import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Todo from './Home/Todo'
import UpdatePassword from './UpdatePassword'

export default function index() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<Todo/>} />
                <Route path="/updatepassword" element={<UpdatePassword/>} />
            </Routes>
        </>
    )
}
