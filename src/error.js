/**
 * @class PidifyError
 */
class PidifyError {
    /**
     * @param {string} url 
     * @param {object} error 
     * @private
     * @ignore
     */
    constructor(url, error) {
        this.url = url;
        this.error = error;
        this.success = false

        this.error_response = error.response ? error.response : {
            data: 'Pidification failed',
            status: 500,
            statusText: "An error occurred"
        }
    }

    /**
     * Get the error message
     * @returns {string|json}
     */
    getErrorMessage() {
        return this.error_response.data
    }

    /**
     * Return the status object containing both status and statusText
     * @returns {object}
     */
    getErrorStatus() {
        return {
            status: this.error_response.status,
            statusText: this.error_response.statusText
        }
    }

}

module.exports = PidifyError