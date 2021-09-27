const axios = require('axios');
const PidifyError = require('./error');
const ImageManager = require('./ImageManager');
const PDFManager = require('./PDFManager');
const BASE_URL = 'https://pidifier.herokuapp.com';

/**
 * @class PidifierJS
 */
class PidifierJS {
    /**
     * Run pidification on the provided URL
     * @param {string} url The URL to pidify
     *
     * @static
     * @method
     * @returns {PDFManager}
     * @throws {PidifyError}
     */
    static async pidify(url) {
        return await axios
            .post(`${BASE_URL}/api/pdf/base64`, {
                url
            }).then((res) => {
                return new PDFManager(url, res.data)
            }).catch((err) => {
                return new PidifyError(url, err)
            });
    }

    /**
     * Run pidification-screenshot on the provided URL
     * @param {string} url The URL to pidify-screenshot
     *
     * @static
     * @method
     * @returns {ImageManager}
     * @throws {PidifyError}
     */
    static async screenshot(url) {
        return await axios
            .post(`${BASE_URL}/api/screenshot/base64`, {
                url
            }).then((res) => {
                return new ImageManager(url, res.data)
            }).catch((err) => {
                return new PidifyError(url, err)
            });
    }

    /**
     * Run pidification-preview on the provided URL
     * @param {string} url The URL to pidify-screenshot
     *
     * @static
     * @method
     * @returns {ImageManager}
     * @throws {PidifyError}
     */
    static async preview(url) {
        return await axios
            .post(`${BASE_URL}/api/preview/base64`, {
                url
            }).then((res) => {
                return new ImageManager(url, res.data)
            }).catch((err) => {
                return new PidifyError(url, err)
            });
    }
}

module.exports = PidifierJS
