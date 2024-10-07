const request = (obj: { method: string; url: string; data?: XMLHttpRequestBodyInit }): Promise<string> => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send(obj.data)

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })

        xhr.addEventListener('error', () => {
            reject('Network Error')
        })
    })
}

export default request