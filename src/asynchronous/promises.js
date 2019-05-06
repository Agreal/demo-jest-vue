
export function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve({ data: 1 })
    })
  })
}

export function fetchDataFail() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error('error'))
    })
  })
}
