export interface AffixProps {
    /** 距离窗口顶部达到指定偏移量后触发 */
    offsetTop?: number;
    /** 距离窗口底部达到指定偏移量后触发 */
    offsetBottom?: number;
    style?: React.CSSProperties;
    /** 固定状态改变时触发的回调函数 */
    onChange?: (affixed?: boolean) => void;
    /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
    target: (() => Window | HTMLElement)[] | null;
    className?: string;
    children: React.ReactNode;
}

