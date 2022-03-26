exports.download = function (fileName, data, type='text/csv') {
  const bom = new Uint8Array([0xef, 0xbb, 0xbf])
  const blob = new Blob([bom, data], { type: type })
  let downLoadLink = document.createElement('a')
  downLoadLink.download = fileName
  downLoadLink.href = URL.createObjectURL(blob)
  downLoadLink.dataset.downloadurl = [
    type,
    downLoadLink.download,
    downLoadLink.href,
  ].join(':')
  downLoadLink.click()
  downLoadLink.remove()
}