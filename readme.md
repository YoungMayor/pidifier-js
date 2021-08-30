# PidifierJS

[![npm version](https://img.shields.io/npm/v/@youngmayor/pidifier.js.svg?style=flat-square)](https://www.npmjs.org/package/@youngmayor/pidifier.js)
[![install size](https://packagephobia.now.sh/badge?p=@youngmayor/pidifier.js)](https://packagephobia.now.sh/result?p=@youngmayor/pidifier.js)
[![npm downloads](https://img.shields.io/npm/dm/@youngmayor/pidifier.js.svg?style=flat-square)](http://npm-stat.com/charts.html?package=@youngmayor/pidifier.js)
<!-- [![CDNJS](https://img.shields.io/cdnjs/v/@youngmayor/pidifier.js.svg?style=flat-square)](https://cdnjs.com/libraries/@youngmayor/pidifier.js) -->
<!-- [![build status](https://img.shields.io/travis/axios/axios/master.svg?style=flat-square)](https://travis-ci.org/axios/axios) -->
<!-- [![code coverage](https://img.shields.io/coveralls/mzabriskie/axios.svg?style=flat-square)](https://coveralls.io/r/mzabriskie/axios) -->
<!-- [![gitter chat](https://img.shields.io/gitter/room/mzabriskie/axios.svg?style=flat-square)](https://gitter.im/mzabriskie/axios) -->
<!-- [![code helpers](https://www.codetriage.com/axios/axios/badges/users.svg)](https://www.codetriage.com/axios/axios) -->

The official Node Package for pidifier

## Table of Contents
  - [Features](#features)
  - [Browser Support](#browser-support)
  - [Installing](#installing)
  - [Usage](#usage) 
  - [Resources](#resources)
  - [Credits](#credits)
  - [License](#license)


## Features
- Interact with the Pidifier API easily


## Browser Support
![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![IE](https://raw.github.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png) |
--- | --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | Latest ✔ | 11 ✔ |


___
## Installing
___

- Using npm:
    ```bash
    $ npm install @youngmayor/pidifier.js
    ```

<!-- - Using bower:
    ```bash
    $ bower install @youngmayor/pidifier.js
    ``` -->

<!-- - Using yarn:
    ```bash
    $ yarn add @youngmayor/pidifier.js
    ``` -->

- Using jsDelivr CDN:
    ```html
    <script src="https://cdn.jsdelivr.net/npm/@youngmayor/pidifier.js@latest"></script>
    ```

- Using unpkg CDN:
    ```html
    <script src="https://unpkg.com/@youngmayor/pidifier.js"></script>
    ```

___
## Importing
___
- In a node based application, you can import the package using commonJS as shown below
    ```js
    const PidifyJS = require('@youngmayor/pidifier.js');

    // or 

    import PidifyJS from '@youngmayor/pidifier.js';
    ```

- It can also be linked to using any of the below CDNs
    ```html
    <script src="https://cdn.jsdelivr.net/npm/@youngmayor/pidifier.js@latest" async></script>

    <!-- or -->

    <script src="https://unpkg.com/@youngmayor/pidifier.js" async></script>


    <!-- the package can now be accessed via window.PidifyJS -->
    ```

___
## Usage
___

PidifyJS can be easily used to convert a web page to PDF as shown below. 

```js
// Create PidifyJS instance 
const Pidifier = new PidifyJS();

// pidify a page
const demoSitePDF = await PidifierJS.pidify('https://example.com');


// check if pidification was successful and perform actions
if (demoSitePDF->success) {
    // ... Pidification was successful
    const demoSiteBase64 = demoSitePDF->getBase64();  // get the base64 encoding of the PDF

    let demoSiteBlob = demoSitePDF->getBlob();  // get the Blob object of the PDF 
    
    const demoSiteDataURL = demoSitePDF->getDataURL();  // Get the Data URL of the PDF

    demoSitePDF->download(filename);  // download the PDF as `filename`
} else {
    // ... Pidification failed

    const demoSiteErrorMessage = demoSitePDF->getErrorMessage();  // get the error message 

    const demoSiteErrorStatusObject = demoSitePDF->getErrorStatus(); // get the error status message. it has two properties { status, statusText }
}
```

<!-- ## Resources

* [Changelog](https://github.com/axios/axios/blob/master/CHANGELOG.md)
* [Upgrade Guide](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
* [Ecosystem](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
* [Contributing Guide](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
* [Code of Conduct](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md) -->

## Credits
[Meyoron Aghogho (YoungMayor)](https://youngmayor.dev).
