const Base64 = require("@youngmayor/base64");
const Manager = require("./manager");

/**
 * @class ImageManager
 * @extends {Manager}
 */
class ImageManager extends Manager {
    /**
     * @param {string} url
     * @param {string} base64
     * @private
     * @ignore
     */
    constructor(url, base64) {
        super(url, base64)

        this.manager = Base64.manageImage(base64, 'png')
    }

    /**
     * Download the PDF
     * @param {string} filename What to save the download as
     * @returns {null}
     */
    download(filename = `Pidification of ${this.url}.png`) {
        return this.manager.download(filename)
    }
}

module.exports = ImageManager
