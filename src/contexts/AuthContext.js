import React, { createContext, useContext, useReducer, useEffect, useState } from 'react'

const AuthContext = createContext()
export const initialState = { user: {}, isAuthenicated: false }

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOGGED_IN":
            return { isAuthenicated: true, user: action.payload.state };
        case "SET_LOGGED_OUT":
            return initialState;
        default:
            return state;
    }
}

export default function AuthContextProvider(props) {
    const myName = "Muhammad Awais Mehboob"
    const [state, dispatch] = useReducer(reducer, initialState)
    const [ isAppLoading , setIsAppLoading ] = useState(true)
        useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === "true") {
            const user = JSON.parse(localStorage.getItem("User"))
            dispatch({ type: "SET_LOGGED_IN", payload: { state } })
        }
        setTimeout(() => {
            setIsAppLoading(false) 
        }, 2000)   
    }, [])

    return (
        <AuthContext.Provider value={{ myName, dispatch, ...state,isAppLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext)