import React, { useState } from 'react'
import img from '../../assets/img.png'
import google from '../../assets/google.png'
import facebook from '../../assets/facebook.png'
import { Form, Input, message } from 'antd';
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../contexts/AuthContext'

let isAuthenicated = false;
const initialState = { email: "", password: "" }


export default function Login() {

    const [state, setState] = useState(initialState);
    const { dispatch } = useAuthContext()


    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
        console.log(state)
    }

    const login = e => {
        e.preventDefault();
        let { email, password } = state;
        email = email.trim();
        password = password.trim();
        if (!email) {
            message.error("Please Enter Your Email");
            return;
        }
        if (!password) {
            message.error("Please Enter Your Password");
            return;
        }
        let registerUser = JSON.parse(localStorage.getItem("users"))
        for (let i = 0; i < registerUser.length; i++) {
            if (email == registerUser[i].email) {
                if (password == registerUser[i].password) {
                    message.success("You logged successfully");
                    isAuthenicated = true;
                }
                else {
                    message.error("Incorrect Password")
                    return;
                }
            }
        }
        if (isAuthenicated == false) {
            message.error("You don't signup yet");
        }
        const newUsers = registerUser.filter((filterUser) => {
            return filterUser.email == email
        })
        localStorage.setItem("User", JSON.stringify(newUsers))
        localStorage.setItem("token", "true")
        dispatch({ type: "SET_LOGGED_IN", payload: { state } })
    }

    return (
        <>
            <div className="img1">
                <div className="container py-3">
                    <div className="row">
                        <div className="col">
                            <div className="card p-4">
                                <div className="row">
                                    <div className="col">
                                        <Form>
                                            <div className="card p-3">
                                                <h4>Login</h4>
                                                <div className="d-flex">
                                                    <p>Doesn't have an account yet?</p>
                                                    <Link to="/auth/signup" className="ms-1 text-decoration-none" style={{ color: "purple" }}>SignUp</Link>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h6>Email Address</h6>
                                                        <Input type="email" name="email" id="email" className='form-control w-100' placeholder='you@example.com' onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col">
                                                        <div className="d-flex">
                                                            <h6>Password</h6>
                                                            <Link to="/auth/forgetpassword" className='ms-auto'>Forget Password</Link>
                                                        </div>
                                                        <Input.Password type="password" name="password" id="password" className='form-control w-100 d-flex' placeholder='*********' onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col">
                                                        <input type="checkbox" name="" id="checkbox" />
                                                        <label for="checkbox" className='ms-2'>Remember me</label>
                                                    </div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col text-center">
                                                        <button className='btn btn-info border-0 rounded-2 w-75 text-white' onClick={login} style={{ height: 40 }}>Login</button>
                                                    </div>
                                                </div>
                                                <h6 className='hr-lines m-3'>or login with</h6>
                                                <div className="d-flex justify-content-center mb-0">
                                                    <button className="btn1 d-flex align-items-center rounded-3">
                                                        <img src={google} className='img3' style={{ height: 25 }} />
                                                        <h5 className='ms-2 mb-0 text-danger'>Google</h5>
                                                    </button>
                                                    <button className="btn2 d-flex align-items-center rounded-3 ms-5">
                                                        <img src={facebook} className='img4' style={{ height: 25 }} />
                                                        <h5 className='ms-2 mb-0 text-primary'>Facebook</h5>
                                                    </button>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                    <div className="col">
                                        <img src={img} className="img2 image-fluid" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
