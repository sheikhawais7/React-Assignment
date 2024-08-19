import React from 'react'

export default function Home() {
  let todos = [];
  todos = JSON.parse(localStorage.getItem("Todos")) ? JSON.parse(localStorage.getItem("Todos")) : []

  return (
    <>
      <h1 className='text-center pt-5'>Welcome</h1>
      <h4 className='text-center my-3'>List</h4>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="statement rounded-2 w-100 p-3" style={{ minHeight: 150 }} >
              {
                todos.length == 0
                  ?
                  <h1 className='text-center'>No Todo Found</h1>
                  :
                  <>
                    {
                      todos.map((todo, i) => {
                        return (<p key="i">1) <b>Name:</b> {todo.todoName} <br />2) <b>Location:</b> {todo.location} <br /> 3) <b>Date:</b> {todo.date} <br />  4) <b>Description:</b> {todo.description}</p>)
                      })
                    }
                  </>
              }
            </div >
          </div>
        </div>
      </div>
    </>
  )
}
