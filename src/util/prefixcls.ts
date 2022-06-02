export function getPrefixCls(key: string): string {
    let nameDict: {
        [propname: string]: string
    } = {
        'col': "my-prefix-col",
        'row': "my-prefix-row",
        'spin': 'my-prefix-spin'
    }
    return nameDict[key]
}
