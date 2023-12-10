const createPayloadEncryptor = require('./lib/payloadEncryptor');

class InterstitalEncryptor {
    /**
     * Creates an instance of InterstitalEncryptor.
     * @param {String} cid - The Datadome cookie
     * @param {String} hash - Hash of the website
     * @param {Number} [seed=4046101435] - Seed (usually 4046101435)
     * @memberof InterstitalEncryptor
     * @example
     * const encryptor = new InterstitalEncryptor(
     *  cid, 
     *  hash
     * );
    */
    constructor(cid, hash, seed=4046101435) {
        this.cid = cid;
        this.hash = hash;
        this.seed = seed;
        this.signals = [];
        this.encryptor = createPayloadEncryptor(
            this.cid,
            this.hash,
            this.seed
        );
    }

    /**
     * Encrypts the data using the cid, hash, and seed
     * @param {Array} data - Array of arrays of signals and values
     * @returns {String} - Encrypted payload
     * @memberof InterstitalEncryptor
     * @example
     * const data = [
     * ['signal1', 'value1'],
     * ['signal2', 'value2'],
     * ['signal3', 'value3']
     * ];
     * const encryptor = new InterstitalEncryptor(cid, hash);
     * const encryptedPayload = encryptor.encrypt(data);
     * console.log(encryptedPayload);
     * // => '....'
     */
    encrypt(data) {
        for (let i = 0; i < data.length; i++) {
            // encData(data[i][0], data[i][1]);
            this.encryptor.addSignal(data[i][0], data[i][1]);
        }
        this.signals = data
        return this.encryptor.buildPayload();
    }

    /**
     * Adds a signal to the encryptor
     * @param {String} signal - Signal to add
     * @param {String} value - Value of the signal
     * @memberof InterstitalEncryptor
     * @example
     * const signal = 'signal1';
     * const value = 'value1';
     * const encryptor = new InterstitalEncryptor(cid, hash);
     * encryptor.addSignal(signal, value);
     * console.log(encryptor.getSignals());
     * // => [['signal1', 'value1']]
     * console.log(encryptor.getPayload());
     * // => '....'
    */
    addSignal(signal, value) {
        this.signals.push([signal, value]);
        this.encryptor.addSignal(signal, value);
    }

    /**
     * Returns the encrypted payload
     * @returns {String} - Encrypted payload
     * @memberof InterstitalEncryptor
     * @example
     * const encryptor = new InterstitalEncryptor(cid, hash);
     * encryptor.addSignal('signal1', 'value1');
     * console.log(encryptor.getSignals());
     * // => [['signal1', 'value1']]
    */
    getSignals() {
        return this.signals;
    }

    /**
     * Returns the encrypted payload
     * @returns {String} - Encrypted payload
     * @memberof InterstitalEncryptor
     * @example
     * const encryptor = new InterstitalEncryptor(cid, hash);
     * encryptor.addSignal('signal1', 'value1');
     * console.log(encryptor.getPayload());
     * // => '....'
    */
    getPayload() {
        return this.encryptor.buildPayload();
    }
}

module.exports = InterstitalEncryptor;