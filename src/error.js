class PidifyError {
    constructor(url, error) {
        this.url = url;
        this.error = error;
        this.success = false

        this.error_response = error.response ? error.response : {
            data: 'Pidification failed',
            status: 500,
            statusText: "An error occurred"
        }

        console.log(this.error)
    }

    getErrorMessage() {
        return this.error_response.data
    }

    getErrorStatus() {
        return {
            status: this.error_response.status,
            statusText: this.error_response.statusText
        }
    }

}

module.exports = PidifyError