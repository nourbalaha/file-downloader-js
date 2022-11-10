<div align="center">
  <h1> File Downloader JS</h1>
</div>

<p align="center">
  <a href="https://www.npmjs.com/package/file-downloader-js"><img src="https://img.shields.io/npm/v/file-downloader-js.svg" alt="version"></a>
  <a href="https://www.npmjs.com/package/file-downloader-js"><img src="https://img.shields.io/npm/l/file-downloader-js.svg" alt="license"></a>
  <a href="https://www.npmjs.com/package/file-downloader-js"><img src="https://img.shields.io/npm/dm/file-downloader-js" alt="downloads" ></a>
</p>

## Introduction

File Downloader JS is a simple package that allows you to download a file from the browser

## Install with npm

```sh
npm install file-downloader-js --save
```

## Install with yarn

```sh
yarn add file-downloader-js
```

## Basic usage

### Binary download using fetch

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

### Binary download using axios

```js
import fileDownloader from "file-downloader-js";
import Axios from "axios";

function download(url: string, filename: string) {
  Axios.get(url, {
    responseType: "blob"
  }).then((res) => {
    fileDownloader(res.data, filename);
  }
}
```

### CSV Data download example

```js
import fileDownloader from "file-downloader-js";
    
let dataRecords = [
  ["ID", "Name", "Age"],
  [1, "Nour", 34],
  [2, "Mila", 1]
];
let data = dataRecords.map((record) => record.join(",")).join("\r\n");
let filename = "data.csv";
let mime = "text/csv";
let bom = new Uint8Array([0xef, 0xbb, 0xbf]);

fileDownloader(data, filename, mime, bom);
```

## Contribution
Your contribution is welcome!
If you find a bug or if you have a suggestion, please fork this repo and make a pull request.
Thank you!

## License

[MIT License](LICENSE)

<div align="center">
  <p>Made with ❤️ in Tokyo © 2022</p>
  <p>By Nour Balaha</p>
  <a href="http://www.nourbalaha.com"><img src="public/logo.png" width="100" height="100" alt="logo" /></a>
</div>
