import React, { useState } from 'react'
import { Form, Input, message } from 'antd';

const initialState = { todoName: "", location: "", date: "", description: "" };

export default function Todo() {
    let todos = []
    todos = JSON.parse(localStorage.getItem("todos")) ? JSON.parse(localStorage.getItem("todos")) : [];

    const [state, setState] = useState(initialState);

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const createTodo = e => {
        e.preventDefault();
        let { todoName, location, description } = state;
        todoName = todoName.trim()
        location = location.trim()
        description = description.trim()
        if (!todoName) return message.error("Enter Todo Name")
        if (!location) return message.error("Enter Your Location")
        if (!description) return message.error("Enter Description")
        message.success("New Todo Added Successfully")
        todos.push(state)
        localStorage.setItem("Todos", JSON.stringify(todos))
    }

    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <div className="card p-4">
                            <h2 className='text-center mb-2'>Create New Todo</h2>
                            <Form>
                                <div className="row">
                                    <div className="col">
                                        <Input type="text" className='form-control w-100' name="todoName" onChange={handleChange} placeholder='Todo Name' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-3">
                                        <Input type="text" className='form-control w-100' name="location" onChange={handleChange} placeholder='Location' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Input type="date" className='form-control w-100' name="date" onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col my-3">
                                        <Input type="description" className='form-control w-100' name="description" onChange={handleChange} placeholder='Description' />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center">
                                        <button className='btn btn-success w-25' onClick={createTodo}>Submit</button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
