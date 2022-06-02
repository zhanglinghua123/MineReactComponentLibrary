import type { Context } from 'react';
import { createContext } from 'react';
import { RowContextState, Gutter, RowProps } from "./type";

import * as React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../util/prefixcls';
import "./style/Row.less"
export const RowContext: Context<RowContextState> = createContext({});

const Row = React.forwardRef<HTMLDivElement, RowProps>((props, ref) => {
    const {
        prefixCls: customizePrefixCls,
        justify,
        align,
        className,
        style,
        // direction = "left",
        children,
        gutter = 0,
        wrap = true,
        ...others
    } = props;
    const prefixCls: string = getPrefixCls("row")
    const classes = classNames(
        prefixCls,
        "make-gird",
        {
            [`${prefixCls}-no-wrap`]: wrap === false,
            [`${prefixCls}-${justify}`]: justify,
            [`${prefixCls}-${align}`]: align,
            // [`${prefixCls}-rtl`]: direction === 'rtl',
        },
        className,
    );
    let rowContext = {
        gutter: gutter,
        wrap: wrap,
    }
    let rowStyle: React.CSSProperties = {

    }
    if (gutter && !Array.isArray(gutter)) {
        rowStyle.marginLeft = -gutter / 2
        rowStyle.marginRight = -gutter / 2
        rowStyle.marginTop = -gutter / 2
        rowStyle.marginBottom = -gutter / 2
    }
    if (gutter && Array.isArray(gutter)) {
        rowStyle.marginLeft = -gutter[0] / 2
        rowStyle.marginRight = -gutter[0] / 2
        rowStyle.marginTop = -gutter[1] / 2
        rowStyle.marginBottom = -gutter[1] / 2
    }
    return (
        <RowContext.Provider value={rowContext}>
            <div {...others} className={classes} style={{ ...rowStyle, ...style }} ref={ref}>
                {children}
            </div>
        </RowContext.Provider>
    )
})

export default Row;