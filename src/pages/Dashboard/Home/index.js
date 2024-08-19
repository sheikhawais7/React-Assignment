import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1 className='text-center pt-5'>Welcome</h1>
      <h2 className='text-center pt-5'>Create New Todo</h2>
      <div className="text-center mt-3">
        <Link to="/dashboard/todo" className='btn btn-success'>Create Todo</Link>
      </div>
    </>
  )
}
