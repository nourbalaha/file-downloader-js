const download = (data: any, filename: string, mime: string, bom: Uint8Array) => {
  const blobParts: BlobPart[] = typeof bom !== "undefined" ? [bom, data] : [data];
  const blobOptions: BlobPropertyBag = { type: mime || "" };
  const blob: Blob = new Blob(blobParts, blobOptions);
  const url: string =
    window.URL && window.URL.createObjectURL
      ? window.URL.createObjectURL(blob)
      : window.webkitURL.createObjectURL(blob);

  const anchor: HTMLAnchorElement = document.createElement("a");
  anchor.style.display = "none";
  anchor.href = url;
  anchor.setAttribute("download", filename);

  if (typeof anchor.download === "undefined") {
    anchor.setAttribute("target", "_blank");
  }

  document.body.appendChild(anchor);
  anchor.click();

  setTimeout(() => {
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(url);
  }, 200);
};

export default download;
