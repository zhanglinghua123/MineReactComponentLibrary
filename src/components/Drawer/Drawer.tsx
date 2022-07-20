import React, { Children, useEffect, useMemo, useRef, useState } from 'react';
import { getPrefixCls } from '../../util/prefixcls';
import { EventType, placementType, PushState, SizeType, DrawerRef } from './type';
import './style/drawer.less';
import classNames from 'classnames';
import { Icon } from '../Icon';
import ReactDOM from 'react-dom';
export type DrawerProps = {
    autoFocus?: boolean;
    afterVisibleChange?: (visible: boolean) => void;
    bodyStyle?: React.CSSProperties;
    closable?: boolean;
    closeIcon?: React.ReactNode;
    contentWrapperStyle?: React.CSSProperties;
    destroyOnClose?: boolean;
    // drawerStyle?: React.CSSProperties;
    extra?: React.ReactNode;
    footerStyle?: React.CSSProperties;
    footer?: React.ReactNode;
    getContainer?: HTMLElement | (() => HTMLElement) | false;
    headerStyle?: React.CSSProperties;
    height?: string | number;
    keyboard?: boolean;
    maskClosable?: boolean;
    mask?: boolean;
    maskStyle?: React.CSSProperties;
    placement?: placementType;
    style?: React.CSSProperties;
    size?: SizeType;
    /** Wrapper dom node style of header and body */

    title?: React.ReactNode;
    // 是否可以看见
    visible?: boolean;
    width?: number | string;

    zIndex?: number;
    prefixCls?: string;
    push?: boolean | PushState;
    onClose?: (e: EventType) => void;
    className?: string;
    handler?: React.ReactNode;

    children?: React.ReactNode;
    // 每次拉伸的距离
    pushDistance?: number;
};
const MultiDrawerContext = React.createContext<DrawerRef | null>(null);
export const Drawer = (props: DrawerProps) => {
    const {
        autoFocus = true,
        mask = true,
        visible: propsVisible = false,
        onClose,
        size = 'small',
        placement = 'right',
        closable = 'true',
        title,
        extra,
        className,
        style,
        height,
        width,
        keyboard = false,
        children,
        destroyOnClose = false,
        getContainer,
        pushDistance = 180,
        zIndex,
        maskClosable = true,
        footer,
        footerStyle,
    } = props;
    // 用来调用父亲Drawer接口的函数
    let [PushDistance, SetPushDistance] = useState<number>(0);
    const ref = useRef(PushDistance);
    const parentDrawer = React.useContext(MultiDrawerContext);
    // 是否显示
    const [Visible, SetVisible] = useState<Boolean>(false);
    // 是否已经加载
    // const [load, SetLoad] = useState<Boolean>(false);
    // console.log(PushDistance, title, '-----Distance', parentDrawer?.pushDistance, ref.current);
    const prefixCls = getPrefixCls('drawer');
    // 用来获取渲染元素的引用 从而来进行autofocus
    const renderRef = React.useRef<HTMLDivElement | null>(null);

    // 每次变化的时候 重新渲染push pull时候的操作 每次拉伸或者关闭的时候 所有与之相同方向的Drawer都变化相应的距离
    const operations = React.useMemo(
        () => ({
            push: (place: string) => {
                // console.log('push 执行函数', placement, place);
                if (place === placement) {
                    SetPushDistance(PushDistance => PushDistance + pushDistance);
                }
                if (parentDrawer) parentDrawer.push(place);
            },
            pull: (place: string) => {
                // console.log('pull 执行函数', placement);
                if (place === placement) {
                    SetPushDistance(PushDistance => PushDistance - pushDistance);
                }
                if (parentDrawer) {
                    parentDrawer.pull(place);
                }
            },
            zIndex: zIndex ? zIndex : parentDrawer ? parentDrawer.zIndex + 1000 : 1000,
        }),
        [placement, zIndex, parentDrawer]
    );
    // 关闭的时候 回调函数
    const handleClickMask = (e: EventType) => {
        SetVisible(false);
        onClose?.(e);
    };
    // 获取挂载的节点
    const targetContainer = () => {
        if (getContainer && typeof getContainer === 'function') return getContainer();
        else if (getContainer) return getContainer;
        return document.getElementsByTagName('body')[0];
    };
    // 分别渲染Header Body Foot
    const renderHeader = () => {
        return (
            <div className={`${prefixCls}-header`}>
                {closable ? (
                    <span onClick={handleClickMask} className={`${prefixCls}-close-icon`}>
                        <Icon src="close"></Icon>
                    </span>
                ) : null}
                <span className={`${prefixCls}-title`}>{title}</span>
                <span>{extra}</span>
            </div>
        );
    };
    const renderBody = () => {
        return <div className={`${prefixCls}-body`}>{children}</div>;
    };
    const renderFoot = () => {
        return (
            <div
                style={{
                    padding: footer ? '24px' : undefined,
                    ...footerStyle,
                }}
            >
                {footer}
            </div>
        );
    };
    const MultiDrawerTransform = (placement: string, PushDistance: number) => {
        switch (placement) {
            case 'top':
                return `translateY(${PushDistance}px)`;
            case 'bottom':
                return `translateY(-${PushDistance}px)`;
            case 'left':
                return `translateX(${PushDistance}px)`;
            case 'right':
                return `translateX(-${PushDistance}px)`;
        }
    };
    // 第一次 设置Load 之后设置visible
    React.useEffect(() => {
        if (propsVisible) {
            // SetLoad(true);
            SetVisible(true);
        } else {
            SetVisible(false);
        }
    }, [propsVisible]);
    React.useEffect(() => {
        if (Visible) {
            if (autoFocus) {
                renderRef.current!.focus();
            }
            targetContainer().style.overflowY = 'hidden';
        } else {
            targetContainer().style.overflowY = 'visible';
        }
    }, [Visible, autoFocus]);

    // 当keyboard 为 true的时候 挂载Escape 事件
    React.useEffect(() => {
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                handleClickMask(e);
            }
        });
        return window.removeEventListener('keydown', e => {
            if (e.key === 'Escape') {
                handleClickMask(e);
            }
        });
    }, [keyboard]);
    // 多级Drawer变化的时候 调用父亲Drawer对应的push or pull函数
    React.useEffect(() => {
        // console.log('执行的代码', Visible, parentDrawer, PushDistance);
        if (Visible && parentDrawer) {
            parentDrawer.push(placement);
        }
        return () => {
            // console.log('执行的pull代码', Visible, parentDrawer, PushDistance);
            if (Visible && parentDrawer) {
                parentDrawer.pull(placement);
            }
        };
    }, [Visible, placement, parentDrawer]);
    const ContentWrapperClass = classNames(`${prefixCls}-content-wrapper`, className, {
        [`${prefixCls}-content-wrapper-${size}`]: size,
        [`${prefixCls}-content-wrapper-${placement}`]: placement,
    });
    // 渲染对应的变化样式
    const ContentWrapperStyle = {
        height: placement === 'top' || placement === 'bottom' ? height : undefined,
        width: placement === 'left' || placement === 'right' ? width : undefined,
        transform: MultiDrawerTransform(placement, PushDistance),
        zIndex: zIndex ? zIndex : parentDrawer ? parentDrawer.zIndex + 1000 : 1000,
        ...style,
    };
    const childDom = (
        <MultiDrawerContext.Provider value={operations}>
            <div ref={renderRef}>
                {mask && Visible ? (
                    <div
                        className={`${prefixCls}-mask`}
                        onClick={maskClosable ? handleClickMask : undefined}
                        style={{
                            zIndex: zIndex
                                ? zIndex
                                : parentDrawer
                                ? parentDrawer.zIndex + 1000
                                : 1000,
                        }}
                    ></div>
                ) : null}
                {destroyOnClose ? (
                    Visible && (
                        <div className={ContentWrapperClass} style={ContentWrapperStyle}>
                            <div className={`${prefixCls}-content`}>
                                {renderHeader()}
                                {renderBody()}
                                {renderFoot()}
                            </div>
                        </div>
                    )
                ) : (
                    <div
                        className={ContentWrapperClass}
                        style={{
                            height:
                                placement === 'top' || placement === 'bottom' ? height : undefined,
                            width:
                                placement === 'left' || placement === 'right' ? width : undefined,
                            transform: Visible
                                ? MultiDrawerTransform(placement, PushDistance)
                                : placement === 'left'
                                ? 'translateX(-100%)'
                                : 'translateX(100%)',
                            position: getContainer === false ? 'absolute' : 'fixed',
                            zIndex: zIndex
                                ? zIndex
                                : parentDrawer
                                ? parentDrawer.zIndex + 1000
                                : 1000,
                            ...style,
                        }}
                    >
                        <div className={`${prefixCls}-content`}>
                            {renderHeader()}
                            {renderBody()}
                            {renderFoot()}
                        </div>
                    </div>
                )}
            </div>
        </MultiDrawerContext.Provider>
    );
    // 用来实现挂载
    return getContainer === false ? childDom : ReactDOM.createPortal(childDom, targetContainer());
};
