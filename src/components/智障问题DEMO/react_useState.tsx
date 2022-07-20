import React, { Children, ReactNode, useContext, useState } from 'react';
import Button from '../Button';
export type DrawerRef = {
    push: () => void;
    pull: () => void;
};

// 在 Demo中 我们通过 context 传递下去的 operation对象里 的 push、pull函数 中的 distance变量值 没有能够得到及时的更新

const MultiDrawerContext = React.createContext<DrawerRef | null>(null);
export const Demo = (props: { children?: ReactNode }) => {
    const [distance, setDistance] = useState<number>(0);
    // 统计操作的对象
    const operation = {
        push: () => {
            console.log('push 前的值', distance);
            setDistance(distance + 100);
            // 解决方案是这么写
            // setDistance(distance => distance + 100);
            console.log('push 后面的值', distance);
        },
        pull: () => {
            console.log('pull 前面的值', distance);
            setDistance(distance - 100);
            // 解决方案是这么写
            // setDistance(distance => distance - 100);
            console.log('pull 后面的值', distance - 100);
        },
    };
    const parentOperation = useContext(MultiDrawerContext);
    const [visible, setvisible] = useState<boolean>(false);
    React.useEffect(() => {
        if (visible) {
            console.log('调用父亲的push函数');
            parentOperation?.push();
        }
        return () => {
            console.log(visible);
            if (visible) {
                console.log('调用父亲的pull函数');
                parentOperation?.pull();
            }
        };
    }, [visible]);
    return (
        <MultiDrawerContext.Provider value={operation}>
            <div>
                {/* <Button () => setvisible(!visible)>{distance}</Button> */}
                <Button onClick={() => setvisible(!visible)}>{distance}</Button>
                {props?.children}
            </div>
        </MultiDrawerContext.Provider>
    );
};

// 在 Demo2中 我们通过 context 传递下去的 operation对象里 的 push、pull函数 中的 distance变量值 能够得到更新

export const Demo2 = (props: { children?: ReactNode }) => {
    const [distance, setDistance] = useState<number>(0);
    // 统计操作的对象
    const operation = {
        push: () => {
            console.log('push 前的值', distance);
            setDistance(distance + 100);
            // 解决方案是这么写
            // setDistance(distance => distance + 100);
            console.log('push 后面的值', distance);
        },
        pull: () => {
            console.log('pull 前面的值', distance);
            setDistance(distance - 100);
            // 解决方案是这么写
            // setDistance(distance => distance - 100);
            console.log('pull 后面的值', distance - 100);
        },
    };
    const parentOperation = useContext(MultiDrawerContext);
    return (
        <MultiDrawerContext.Provider value={operation}>
            <div>
                {/* <Button () => setvisible(!visible)>{distance}</Button> */}
                <Button onClick={() => parentOperation?.pull()}>{distance}</Button>
                <Button onClick={() => parentOperation?.push()}>{distance}</Button>
                {props?.children}
            </div>
        </MultiDrawerContext.Provider>
    );
};
