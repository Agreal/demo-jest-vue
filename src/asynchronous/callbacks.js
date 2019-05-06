
export function fetchData(params, successFn, failFn) {
  setTimeout(function () {
    successFn({ data: 1 })
  })
}
