import React from 'react'
import { useAuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export default function Navfooter() {
    const year = new Date().getFullYear();
    const { isAuthenicated } = useAuthContext()
    const style1 = { "background": "linear-gradient(to right, #E100FF, #7F00FF)" }
    const style2 = { "background": "#1d3557" }
    return (
        <>
            <footer className='p-2 bg-primary' style={isAuthenicated ? style2 : style1}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="mb-0 text-center text-white">Copyright&copy; {year}.Made By <Link to="awais-portfolio1.vecel.app" className='text-decoration-none text-white'>Muhammad Awais Mehboob</Link></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
