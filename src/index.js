export const name = 'kyo'

// 抽离成公共方法
export const awrap = promise => {
    return promise.then(data => [data, null]).catch(err => [null, err])
}
