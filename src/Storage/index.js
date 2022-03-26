exports.getItem = function (key) {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  }
  catch (e) {
    return data
  }
}

exports.setItem = function (key, value) {
  let val
  try {
    val = JSON.stringify(value)
  }
  catch (e) {
    val = value
  }
  localStorage.setItem(key, val)
  return {
    key: key,
    value: val,
  }
}

exports.removeItem = function (key) {
  localStorage.removeItem(key)
}

exports.clear = function (key) {
  localStorage.clear()
}