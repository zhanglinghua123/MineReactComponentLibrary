export function getPrefixCls(key: string): string {
    let nameDict: {
        [propname: string]: string
    } = {
        'col': "ant-prefix-col",
        'row': "ant-prefix-row",
    }
    return nameDict[key]
}
