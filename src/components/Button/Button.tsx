import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { getPrefixCls } from "../../util/prefixcls";
import rowStories from "../Row/row.stories";
import "./style/button.less"
import { ButtonTypes, ButtonShapes, SizeType } from "./type"
export interface ButtonProps {
    style?: React.CSSProperties
    // 按钮类型
    type?: ButtonTypes;
    // 可以嵌入的Icon
    icon?: React.ReactNode;
    /**
     * Shape of Button
     *
     * @default default
     */
    // 按钮形状
    shape?: ButtonShapes;
    // 按钮大小
    size?: SizeType;
    // 是否在进行加载状态
    loading?: boolean | { delay?: number };
    // 用户定义的class
    className?: string;
    // 背景变为透明
    ghost?: boolean;
    // 是否为danger按钮
    danger?: boolean;
    // 宽度是否占据整个div 
    block?: boolean;
    // 是否为Disabled状态
    disabled?: boolean;
    children?: React.ReactNode;
    // a标签的链接
    href?: string
    onClick?: () => void
}
const Button = (props: ButtonProps) => {
    const {
        style,
        loading = false,
        type = 'default',
        danger,
        shape = 'default',
        size = "large",
        className,
        children,
        icon,
        ghost = false,
        block = false,
        disabled = false,
        /** If we extract items here, we don't need use omit.js */
        // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
        ...rest
    } = props;
    // 判断用户输入的延迟信息 并设置对应的加载状态
    const LoadingDelay = loading === 'object' && loading.delay ? loading.delay || true : !!loading
    const [Loading, setLoading] = useState(false)
    useEffect(() => {
        let Timer: NodeJS.Timeout | undefined;
        if (typeof LoadingDelay === "number") {
            setLoading(true)
            Timer = setTimeout(() => {
                setLoading(false)
            }, LoadingDelay * 1000)
        } else {
            setLoading(LoadingDelay)
        }
        return () => {
            if (Timer) {
                clearTimeout(Timer)
                Timer = undefined
            }
        }
    }, [LoadingDelay])
    const [hasTwoCNChar, setHasTwoCNChar] = useState(false)
    const prefixCls = getPrefixCls("button")
    const classes = classNames(
        prefixCls,
        {
            [`${prefixCls}-${shape}`]: shape !== 'default' && shape, // Note: Shape also has `default`
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${size}`]: size,
            // 
            [`${prefixCls}-icon-only`]: !children && children !== 0,
            // 
            [`${prefixCls}-background-ghost`]: ghost,
            [`${prefixCls}-loading`]: Loading,
            // 
            [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar,
            [`${prefixCls}-block`]: block,
            [`${prefixCls}-dangerous`]: !!danger,
        },
        className,
    );
    const Buttonref = React.useRef<HTMLButtonElement & HTMLAnchorElement>(null)
    useEffect(() => {
        const childList: React.ReactNode[] = [];
        console.log("Children ----", React.Children.forEach(children, (child) => {
            // console.log(typeof child, child)
            let isPrevChildPure: boolean = false;
            const type = typeof child;
            const isCurrentChildPure = type === 'string' || type === 'number';
            if (isPrevChildPure && isCurrentChildPure) {
                const lastIndex = childList.length - 1;
                const lastChild = childList[lastIndex];
                childList[lastIndex] = `${lastChild}${child}`;
            } else {
                childList.push(child);
            }

            isPrevChildPure = isCurrentChildPure;
        }))
        console.log("childList ------", childList)
    }, [])
    if (rest.href !== undefined && type == "link")
        return <a className={classes} ref={Buttonref}  {...rest}>{children}</a>
    return <button style={style} className={classes} ref={Buttonref} disabled={disabled} {...rest}>
        {children}
    </button>;
};

export default Button;