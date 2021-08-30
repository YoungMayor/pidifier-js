const Base64 = require("@youngmayor/base64")

class Manager {
    constructor(url, base64) {
        this.url = url;
        this.base64 = base64;
        this.success = true

        this.manager = Base64.managePDF(base64);
    }

    getBase64() {
        return this.base64
    }

    getBlob() {
        return this.manager.toBlob();
    }

    getDataURL() {
        return this.manager.toDataURL();
    }

    download(filename = `Pidification of ${this.url}.pdf`) {
        return this.manager.download(filename)
    }
}

module.exports = Manager