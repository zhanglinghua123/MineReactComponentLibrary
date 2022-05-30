// 将对应的监听的target对象转换为DOMRect
export function getTargetRect(target: Window | HTMLElement): DOMRect {
    return target !== window
        ? (target as HTMLElement).getBoundingClientRect()
        : ({ top: 0, bottom: window.innerHeight } as DOMRect);
}
// 通过在Affix 外面套一层placeHolder 来判断当前是否需要将Affix的样式设置为fix
export function getFixedTop(placeholderReact: DOMRect, targetRect: DOMRect, offsetTop?: number) {
    if (offsetTop !== undefined && targetRect.top > placeholderReact.top - offsetTop) {
        return offsetTop + targetRect.top;
    }
    return undefined;
}
// 通过在Affix 外面套一层placeHolder 来判断当前是否需要将Affix的样式设置为fix
export function getFixedBottom(
    placeholderReact: DOMRect,
    targetRect: DOMRect,
    offsetBottom?: number,
) {
    if (offsetBottom !== undefined && targetRect.bottom < placeholderReact.bottom + offsetBottom) {
        const targetBottomOffset = window.innerHeight - targetRect.bottom;
        return offsetBottom + targetBottomOffset;
    }
    return undefined;
}
// 将所有元素转换为 HTMLELEMent的数组
export function getTargetArray(targetArray: (() => Window | HTMLElement)[] | null): (Window | HTMLElement)[] {
    return targetArray == null ? [window] : targetArray.map((value) => {
        return value()
    })
}
