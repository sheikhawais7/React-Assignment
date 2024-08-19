import React from 'react'

export default function ScreenLoader() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center' style={{minHeight: "100vh",background: "black"}}>
                <svg
                    className="pl"
                    height="240"
                    viewBox="0 0 240 240"
                    width="240"
                >
                    <circle
                        className="pl__ring pl__ring--a"
                        cx="120"
                        cy="120"
                        fill="none"
                        r="105"
                        stroke="#000"
                        strokeDasharray="0 660"
                        strokeDashoffset="-330"
                        strokeLinecap="round"
                        strokeWidth="20"
                    />
                    <circle
                        className="pl__ring pl__ring--b"
                        cx="120"
                        cy="120"
                        fill="none"
                        r="35"
                        stroke="#000"
                        strokeDasharray="0 220"
                        strokeDashoffset="-110"
                        strokeLinecap="round"
                        strokeWidth="20"
                    />
                    <circle
                        className="pl__ring pl__ring--c"
                        cx="85"
                        cy="120"
                        fill="none"
                        r="70"
                        stroke="#000"
                        strokeDasharray="0 440"
                        strokeLinecap="round"
                        strokeWidth="20"
                    />
                    <circle
                        className="pl__ring pl__ring--d"
                        cx="155"
                        cy="120"
                        fill="none"
                        r="70"
                        stroke="#000"
                        strokeDasharray="0 440"
                        strokeLinecap="round"
                        strokeWidth="20"
                    />
                </svg>
            </div>
        </>
    )
}
