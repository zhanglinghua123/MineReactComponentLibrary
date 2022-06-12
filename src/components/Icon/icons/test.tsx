import React from 'react'
import { StringMapIntoSVG } from '../util'

import "./icon.less"
export type IconProps = {
    src?: string,
}
export const Icon = (props: IconProps) => {
    const { src } = props
    let imgSrc = StringMapIntoSVG(src)
    console.log(src, imgSrc)
    return (
        <img src={imgSrc} className={"my-prefix-icon-img"}></img>
    )
}