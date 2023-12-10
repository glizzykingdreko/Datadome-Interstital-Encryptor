# datadome-interstital-encryptor

The `datadome-interstital-encryptor` is a Node.js module designed to assist in encrypting signals for the Datadome Interstitial Challenge, commonly referred to as the "5s challenge". This module replicates the same encryption process used in Datadome, allowing developers to handle Datadome-related encryption tasks within a Node.js environment.
[![Datadome Interstitial Encryptor](https://github.com/glizzykingdreko/datadome-interstital-encryptor/raw/main/img/banner.png)](https://github.com/glizzykingdreko/datadome-interstital-encryptor)

<p align="center">
  <a href="https://github.com/glizzykingdreko/datadome-interstital-encryptor/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/glizzykingdreko/datadome-interstital-encryptor"></a>
  <a href="https://github.com/glizzykingdreko/datadome-interstital-encryptor/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/glizzykingdreko/datadome-interstital-encryptor"></a>
  <a href="https://github.com/glizzykingdreko/datadome-interstital-encryptor/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/glizzykingdreko/datadome-interstital-encryptor"></a>
  <a href="https://www.npmjs.com/package/datadome-interstital-encryptor"><img alt="npm" src="https://img.shields.io/npm/v/datadome-interstital-encryptor"></a>
</p>

Checkout the source code on [GitHub](https://github.com/glizzykingdreko/datadome-interstital-encryptor)

## Table of Contents
- [datadome-interstital-encryptor](#datadome-interstital-encryptor)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [API](#api)
  - [Examples](#examples)
  - [Contributing](#contributing)
  - [License](#license)
  - [Connect with Me](#connect-with-me)

## Installation

Install the package via npm:

```
npm install datadome-interstital-encryptor
```

## Usage

To use `datadome-interstital-encryptor`, you need the initial Datadome cookie set by the website and the website's hash. The seed value is typically consistent across most websites.

Here's a basic example of how to use the module:

```js
const InterstitalEncryptor = require('datadome-interstital-encryptor');

// Initialize with your Datadome cookie, website hash, and optional seed
const cid = 'your-datadome-cookie';  // Replace with your Datadome cookie
const hash = 'your-website-hash';    // Replace with your website's hash
const encryptor = new InterstitalEncryptor(cid, hash);

// Add signals to be encrypted
encryptor.addSignal('signal1', 'value1');
encryptor.addSignal('signal2', 'value2');

// Retrieve the encrypted payload
const encryptedPayload = encryptor.getPayload();
console.log(encryptedPayload);
```

## Features

- **Easy to Integrate:** Designed to be easily integrated into any Node.js project requiring Datadome challenge encryption.
- **Customizable:** While a default seed value is provided, it allows for customization if your application requires a different seed value.
- **Efficient Encryption:** Efficiently encrypts signals as required by the Datadome 5s challenge.

## API

The module provides the following methods:

- `constructor(cid, hash, seed?)`: Initializes the encryptor with the provided Datadome cookie, website hash, and an optional seed.
- `addSignal(signal, value)`: Adds a new signal and its value to the encryptor.
- `getPayload()`: Returns the current encrypted payload.
- `getSignals()`: Retrieves all signals currently added to the encryptor.

## Examples

For more detailed examples, please refer to the `examples` folder in this package.

## Contributing

Contributions to the `datadome-interstital-encryptor` module are welcome. Please ensure that your code adheres to the existing style and includes tests covering new functionality.

## License

This project is licensed under the [MIT License](LICENSE).

## Connect with Me

- [Website](https://glizzykingdreko.github.io)
- [GitHub](https://github.com/glizzykingdreko)
- [Twitter](https://mobile.twitter.com/glizzykingdreko)
- [Medium](https://medium.com/@glizzykingdreko)
- [Email](mailto:glizzykingdreko@protonmail.com)
