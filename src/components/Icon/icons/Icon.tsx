import React, { CSSProperties } from 'react';
import { StringMapIntoSVG } from '../util';

import './icon.less';
export type IconProps = {
    src?: string;
    size?: string;
    style?: CSSProperties;
};
export const Icon = (props: IconProps) => {
    const { src, size = '1em' ,style} = props;
    let imgSrc = StringMapIntoSVG(src);
    return (
        <img
            src={imgSrc}
            style={{ width: size, height: size, ...style}}
            className={'my-prefix-icon-img'}
        ></img>
    );
};
