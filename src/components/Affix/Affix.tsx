import React, { Children, useEffect, useRef } from "react";
import { AffixProps } from "./type";
import { getFixedTop, getTargetArray, getTargetRect } from "./util"
const Affix = (props: AffixProps) => {
    const { offsetTop, offsetBottom, target } = props
    useEffect(() => {
        getTargetArray(target).forEach((value) => {
            value.addEventListener("scroll", () => {
                console.log("scroll")
            })
        })
    }, [])
    const placeholder = useRef(null)
    return (
        <div ref={placeholder} style={props.style} onClick={() => { }} className={props.className}>
            {props.children}
        </div>
    )
}
export default Affix