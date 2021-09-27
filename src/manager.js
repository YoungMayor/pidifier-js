class Manager {
    /**
     * @param {string} url
     * @param {string} base64
     * @private
     * @ignore
     */
    constructor(url, base64) {
        this.url = url;
        this.base64 = base64;
        this.success = true
    }

    /**
     * Get the base64 encoding of the PDF
     * @returns {string}
     */
    getBase64() {
        return this.base64
    }

    /**
     * Get the Blob of the PDF
     * @returns {Blob}
     */
    getBlob() {
        return this.manager.toBlob();
    }

    /**
     * Get the dataURL of the PDF
     * @returns {string}
     */
    getDataURL() {
        return this.manager.toDataURL();
    }

    /**
     * Download the PDF
     * @param {string} filename What to save the download as
     * @returns {null}
     */
    download(filename = `Download of ${this.url}`) {
        return this.manager.download(filename)
    }
}

module.exports = Manager
