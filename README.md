# express-dirname

A lightweight utility to reliably access `__dirname` in Express.js applications, supporting both CommonJS and ES Modules. This package simplifies working with file paths in Node.js environments where `__dirname` may not be available, such as ES Modules.

[![npm version](https://img.shields.io/npm/v/express-dirname.svg)](https://www.npmjs.com/package/express-dirname)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

- Seamless support for CommonJS and ES Modules.
- TypeScript-ready with included type definitions.
- Zero dependencies for a lightweight footprint.
- Simple API to get the directory path in any Node.js environment.

## Installation

Install the package using npm:

```bash
npm install express-dirname
```

## Usage

### CommonJS Example

In a CommonJS Express.js application, use `__filename` as the argument to `getDirname`:

```javascript
const express = require('express');
const path = require('path');
const { getDirname } = require('express-dirname');

const app = express();
const __dirname = getDirname(__filename);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### ES Modules Example

In an ES Modules Express.js application, pass `import.meta.url` to `getDirname`:

```javascript
import express from 'express';
import path from 'path';
import { getDirname } from 'express-dirname';

const app = express();
const __dirname = getDirname(import.meta.url);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### TypeScript Support

The package includes TypeScript definitions, so it works out of the box with TypeScript:

```typescript
import express from 'express';
import path from 'path';
import { getDirname } from 'express-dirname';

const app = express();
const __dirname: string = getDirname(import.meta.url);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

## API

### `getDirname(metaUrl: string): string`

Returns the directory path of the current module.

- **Parameters**:
  - `metaUrl`: In CommonJS, pass `__filename`. In ES Modules, pass `import.meta.url`. For CommonJS, if no argument is provided, it falls back to `__dirname`.
- **Returns**: A string representing the directory path.
- **Throws**: In ES Modules, an error is thrown if `metaUrl` is not provided or invalid.

## Why Use express-dirname?

Node.js ES Modules do not provide `__dirname` by default, which can complicate file path operations in Express.js applications. This package offers a unified solution to access the directory path across both CommonJS and ES Modules, ensuring compatibility and ease of use.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add your feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).

## Issues

Found a bug or have a feature request? Please open an issue on the [GitHub Issues page](https://github.com/Rakshit-027/express-dirname/issues).

## Author

Created by [Rakshit Waghmare](https://github.com/Rakshit-027).