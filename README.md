# Interview Test - Accessible Form Handling & Validation

## Project pre-requisites
- Node 16 is required as a minimum - see https://nodejs.org/en/download.
- `npm install --global yarn` - installs Yarn if not already installed.

## View website in a browser
- `yarn start` - installs project dependencies (if not already installed), starts Parcel dev server, and launches the website at http://localhost:4321/.


## Testing with Jest
- `yarn test`.
- `yarn coverage` - generates HTML coverage reports in `coverage/lcov-report/` folder.

> NOTE: Parcel doesn't use Babel for transpilation, unlike Jest. The [addition of a .parcelrc config](https://parceljs.org/languages/javascript/#usage-with-other-tools) file allows Parcel to ignore the `.babelrc.json` config altogether.
