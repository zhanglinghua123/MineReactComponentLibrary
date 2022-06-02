import React from 'react'
import logo from '../svg/LeftArrow.svg'
export const TestIcon = () => {
    console.log("logo", logo)
    return (<div>
        <img src={logo}></img>
    </div>)
}