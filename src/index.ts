function download(data: any, filename: string, mime: string, bom: Uint8Array) {
  var blobParts: BlobPart[] = typeof bom !== 'undefined' ? [bom, data] : [data];
  var blobOptions: BlobPropertyBag = { type: mime || "" }
  var blob: Blob = new Blob(blobParts, blobOptions);
  var url: string = (window.URL && window.URL.createObjectURL) ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);

  var anchor: HTMLAnchorElement = document.createElement('a');
  anchor.style.display = 'none';
  anchor.href = url;
  anchor.setAttribute('download', filename);

  if (typeof anchor.download === 'undefined') {
    anchor.setAttribute('target', '_blank');
  }

  document.body.appendChild(anchor);
  anchor.click();

  setTimeout(function () {
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(url);
  }, 200)
}

if (typeof module !== 'undefined') {
  module.exports = download;
}