import * as React from 'react';
import classNames from 'classnames';
import { FlexType, ColProps } from "./type"
import { getPrefixCls } from '../../util/prefixcls';
import { RowContext } from "../Row/Row"
import "./style/Col.less"
//  如果flex是数字 则翻译为 如下的东西 代表该col在flex-grow flex-basis 这两个属性都是数字
function parseFlex(flex: FlexType): string {
    if (typeof flex === 'number') {
        return `${flex} ${flex} auto`;
    }
    // 如果flex 符合当前的字符串匹配机制 则设置对应的flex-basis属性
    if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
        return `0 0 ${flex}`;
    }

    return flex;
}
const Col = React.forwardRef<HTMLDivElement, ColProps>((props, ref) => {
    const { gutter, wrap } = React.useContext(RowContext);

    const {
        prefixCls: customizePrefixCls,
        span = 0,
        order,
        offset = 0,
        push = 0,
        pull = 0,
        className,
        children,
        flex,
        style,
        ...others
    } = props;

    const prefixCls = getPrefixCls('col');
    //  根据push pull 数值进行调整

    const classes = classNames(
        "make-grid",
        prefixCls,
        {
            [`${prefixCls}-${span}`]: span !== undefined,
            [`${prefixCls}-order-${order}`]: order,
            [`${prefixCls}-offset-${offset}`]: offset,
            [`${prefixCls}-push-${push}`]: push > pull ? push - pull : 0,
            [`${prefixCls}-pull-${pull}`]: pull > push ? pull - push : 0,
        },
        className,
    );

    const mergedStyle: React.CSSProperties = {};
    // 单个gutter的设置方案
    if (gutter && !Array.isArray(gutter)) {
        const horizontalGutter = gutter / 2;
        mergedStyle.paddingLeft = horizontalGutter;
        mergedStyle.paddingRight = horizontalGutter;
        mergedStyle.paddingTop = horizontalGutter;
        mergedStyle.paddingBottom = horizontalGutter;
    }
    // gutter数组的设置方案
    if (gutter && Array.isArray(gutter)) {
        const horizontalGutter = gutter[0] / 2;
        const verticalGutter = gutter[1] / 2;
        mergedStyle.paddingLeft = horizontalGutter;
        mergedStyle.paddingRight = horizontalGutter;
        mergedStyle.paddingTop = verticalGutter;
        mergedStyle.paddingBottom = verticalGutter;
    }

    if (flex) {
        mergedStyle.flex = parseFlex(flex);

        // Hack for Firefox to avoid size issue
        // https://github.com/ant-design/ant-design/pull/20023#issuecomment-564389553
        if (wrap === false && !mergedStyle.minWidth) {
            mergedStyle.minWidth = 0;
        }
    }
    return (
        <div {...others} style={{ ...mergedStyle, ...style }} className={classes} ref={ref}>
            {children}
        </div>
    );
});

Col.displayName = 'Col';

export default Col;
