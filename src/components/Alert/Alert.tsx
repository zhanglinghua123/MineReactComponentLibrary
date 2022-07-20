import React, { isValidElement } from 'react';
import { CSSProperties, ReactNode, useState } from 'react';
import { AlertType, FillIcon, NotFillIcon } from './type';
import './style/alert.less';
import { getPrefixCls } from '../../util/prefixcls';
import classNames from 'classnames';
import { Icon } from '../Icon';
import { render } from 'react-dom';
export type AlertProps = Partial<{
    type: AlertType;
    //  Alert 的提示信息
    tip: string;
    //  Alert 的提示细节
    detail: string;
    // 自定义消息的对应的Icon
    icon: ReactNode;
    // 关闭的回调函数
    onClose: React.MouseEventHandler<HTMLButtonElement>;
    // 自定义关闭按钮
    closeIcon: React.ReactNode | string;
    // 是否显示关闭按钮
    closable: boolean;
    // 自定义样式
    style: CSSProperties;
    // 自定义className
    className: string;
    // 鼠标hover 的回调函数
    onMouseEnter: React.MouseEventHandler<HTMLDivElement>;
    //  鼠标离开 的回调函数
    onMouseLeave: React.MouseEventHandler<HTMLDivElement>;
    // 是否展示CloseButton
    showIcon?: Boolean;
    // 是否可以进行关闭
    closeable?: Boolean;
}>;
export const Alert = (props: AlertProps) => {
    const {
        type = 'success',
        tip,
        detail,
        icon,
        closeIcon = <Icon src="close"></Icon>,
        closable = false,
        style,
        className,
        onMouseEnter,
        onMouseLeave,
        showIcon = true,
        closeable = true,
        ...rest
    } = props;
    const [closed, setClosed] = useState<Boolean>(false);
    const [RealClose, setRealClose] = useState<Boolean>(false);
    const prefixCls = getPrefixCls('alert');
    const AlertClassName = classNames(className, prefixCls, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-with-description`]: !!detail,
        [`${prefixCls}-close`]: closed,
    });
    const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
        setClosed(true);
        setTimeout(() => setRealClose(true), 600);
        rest.onClose?.(e);
    };
    // close 的按钮设计
    const renderCloseIcon = (closeIcon: React.ReactNode | string) => {
        const type = typeof closeIcon;
        if (type === 'string')
            return (
                <span
                    className={classNames(`${prefixCls}-close-icon`)}
                    onClick={closeable ? handleClose : undefined}
                >
                    {closeIcon}
                </span>
            );
        else if (!isValidElement(closeIcon)) return closeIcon;
        else
            return React.cloneElement(<span>{closeIcon}</span>, {
                className: classNames(`${prefixCls}-close-icon`, {
                    [closeIcon.props.className]: closeIcon.props.className,
                }),
                onClick: handleClose,
            });
    };
    // 数据信息的设计
    const renderDetail = () => {
        return (
            <div className={`${prefixCls}-text`}>
                <div
                    className={classNames(`${prefixCls}-text-tip`, {
                        [`${prefixCls}-text-with-description`]: !!detail,
                    })}
                >
                    {tip}
                </div>
                <div className={`${prefixCls}-text-detail`}>{detail}</div>
            </div>
        );
    };
    // 提示Button的设计
    const renderIcon = (detail: string | undefined, type: AlertType) => {
        if (icon != undefined) return <span>icon</span>;
        const src = detail ? NotFillIcon[type] : FillIcon[type];
        return (
            <span
                className={classNames(`${prefixCls}-icon`, { [`${prefixCls}-icon-lg`]: !!detail })}
            >
                <Icon src={src}></Icon>
            </span>
        );
    };
    return (
        <div>
            {!RealClose && (
                <div
                    className={AlertClassName}
                    style={style}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {showIcon ? renderIcon(detail, type) : null}
                    {renderDetail()}
                    {renderCloseIcon(closeIcon)}
                </div>
            )}
        </div>
    );
};
