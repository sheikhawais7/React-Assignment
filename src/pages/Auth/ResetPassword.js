import React, { useState } from 'react'
import img from '../../assets/img.png'
import { Input, message } from 'antd'
import Password from 'antd/es/input/Password'
import { useNavigate } from 'react-router-dom'

const initialState = { newPassword: "", confirmPassword: "" }

export default function ResetPassword() {

    const [state, setState] = useState(initialState)
    let users = JSON.parse(localStorage.getItem("users"))
    let email = localStorage.getItem("email")

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()

    const resetPassword = e => {
        e.preventDefault();
        let { newPassword, confirmPassword } = state;
        newPassword = newPassword.trim();
        confirmPassword = confirmPassword.trim();
        if (!newPassword) {
            message.error("Enter Your New Password")
            return;
        }
        if (!confirmPassword) {
            message.error("Enter Your Confirm Password")
            return;
        }
        if (confirmPassword !== newPassword) {
            message.error("Both New And Confirm Password Doesn't Match")
            return;
        }
        let newUser = users.filter((filterUser) => {
            return filterUser.email == email
        })
        console.log('newUser', newUser)
        newUser={...newUser[0], password: newPassword, confirmPassword: confirmPassword}

        let newUsers = users.filter((filterUser) => {
            return filterUser.email != email
        })
        newUsers.push(newUser)
        console.log('newUsers', newUser)
        console.log('newUsers', newUsers)
        localStorage.setItem("User", JSON.stringify(newUser))
        localStorage.setItem("users", JSON.stringify(newUsers))
        localStorage.removeItem("email")
        message.success("Password Reset Successfully")
        navigate("/auth/login")
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
                                        <form>
                                            <div className="card p-3">
                                                <h4>Reset Password</h4>
                                                <div className="row my-2">
                                                    <div className="col">
                                                        <h6>New Password</h6>
                                                        <Input.Password type="password" name="newPassword" onChange={handleChange} className='form-control w-100 d-flex' placeholder='Enter 6 character or more' />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col">
                                                        <h6>Confirm Password</h6>
                                                        <Input.Password type="password" name="confirmPassword" onChange={handleChange} className='form-control w-100 d-flex' placeholder='Enter 6 character or more' />
                                                    </div>
                                                </div>
                                                <div className="row mt-4">
                                                    <div className="col text-center">
                                                        <button to="/resetpassword" className='btn btn-info border-0 rounded-2 w-75 text-white' onClick={resetPassword} style={{ height: 40 }}>Reset Password</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
