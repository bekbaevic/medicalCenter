import React from 'react'

const Logo = ({ color }) => {
    return (
        <span className='text-[24px] font-[400] relative'>
            <p
                style={color === "primary" ? { color: "white" } : { color: 'black' }}
            ><span
                style={color === "primary" ? { backgroundColor: "white", color: "#42b2fc" } : { backgroundColor: "#42b2fc", color: "white" }}
                className='py-1 pr-[1px] pl-[8px] rounded-md'>Ло</span>готип</p>
        </span>
    )
}

export default Logo