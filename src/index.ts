import { Blob } from 'buffer';
import { BinaryLike } from 'crypto';

const download = (data: any, filename: string, mime?: string, bom?: Uint8Array) => {
  const sources: (Blob | BinaryLike)[] = typeof bom !== "undefined" ? [bom, data] : [data];
  const options: BlobPropertyBag = { type: mime || "application/octet-stream" };
  const blob: Blob = new Blob(sources, options);
  const url = window.URL && window.URL.createObjectURL
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
  }, 100);
};

export default download;
