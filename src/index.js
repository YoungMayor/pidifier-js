const axios = require('axios');
const PidifyError = require('./error');
const Manager = require('./manager');
const BASE_URL = 'https://pidifier.herokuapp.com';

/**
 * @class PidifierJS
 */
class PidifierJS {
    /**
     * The class constructor
     * @constructor
     */
    constructor() {}

    /**
     * Run pidification on the provided URL
     * @param {string} url The URL to pidify
     * 
     * @method
     * @returns {Manager}
     * @throws {PidifyError}
     */
    async pidify(url) {
        return await axios
            .post(`${BASE_URL}/api/pdf/base64`, {
                url
            }).then((res) => {
                return new Manager(url, res.data)
            }).catch((err) => {
                return new PidifyError(url, err)
            });
    }
}

module.exports = PidifierJS