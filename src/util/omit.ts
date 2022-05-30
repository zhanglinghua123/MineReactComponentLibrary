function omit<T extends object, K extends keyof T>(obj: T, fields: K[]): Omit<T, K> {
    if (Array.isArray(fields)) {
        fields.forEach((key) => {
            delete obj[key]
        })
    }
    return obj
}