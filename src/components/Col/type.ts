import React from "react";

export interface ColProps {
    flex?: FlexType;
    span?: ColSpanType;
    // 谁先排到前面
    order?: ColSpanType;
    // 间隔几个单位
    offset?: ColSpanType;
    // push 是让该column 向后移动
    push?: ColSpanType;
    // pull 是让该column 向前移动
    pull?: ColSpanType;
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    number?: number;
    children?: React.ReactNode
}

// https://github.com/ant-design/ant-design/issues/14324
export type ColSpanType = number;

export type FlexType = number | 'none' | 'auto' | string;