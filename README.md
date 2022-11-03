<p align="center">
  <a href="https://www.npmjs.com/package/file-downloader-js"><img src="https://img.shields.io/npm/v/file-downloader-js.svg" alt="Version"></a>
  <a href="https://www.npmjs.com/package/file-downloader-js"><img src="https://img.shields.io/npm/l/file-downloader-js.svg" alt="License"></a>
</p>

## Introduction

File Downloader JS is a simple package that allows you to download a file from the browser.
---

### Installing with npm package manager

```js
npm install file-downloader-js --save
```

### Basic usage

#### Using fetch
```js
import fileDownloader from "file-downloader-js";

function download(url: string, filename: string) {
  fetch(url)
    .then((res) => res.blob())
    .then((blob) => {
      fileDownloader(blob, filename);
    });
}
```


#### Using axios
```js
import fileDownloader from "file-downloader-js";
import Axios from "axios";

  function download(url: string, filename: string) {
    Axios.get(url, {
      responseType: "blob"
    }).then((res) => {
      fileDownloader(res.data, filename);
    }
```

---
## Please remember to star this github repo if you like it. Thank you!
---
