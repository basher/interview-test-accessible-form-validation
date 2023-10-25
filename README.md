# Interview Test - Accessible Form Validation

## View static version of BUILD output.
> - No need to run `yarn` commands.
> - I have copied the Parcel bundler generated `build` output to the `STATIC_BUILD` folder, edited `index.html` to fix CSS/JS relative file paths, and removed `type="module"` from the script bundle to resolve CORS error when trying to execute JS locally from the file system.
- Please remove the `.txt` suffix from JS file.
- Then open `STATIC_BUILD/index.html` in a browser.

## TODO
1. Copy `build` to `STATIC_BUILD`.
    - Edit `index.html`.
    - Add `.txt` suffix to JS files.
2. Fix:
    - Remove redundant CSS.
    - Tweak styles.
3. Document:
    - `yarn start` etc.
    - Architecture (boilerplate, linters, etc).
    - JS disabled (progressive enhancement) form posts, but no data persists (could have used local storage for UI?).
    - a11y (added visually hidden aria-live for add/remove users).
    - a11y (tested with keyboard, NVDA, AxeCore).
    - Functionality tested in Firefox/Chrome/Edge on Windows 10.
    - Unable to test in Safari 12 using BrowserStackLocal desktop app.
4. Test:
    - Safari 12 support.
5. Unit tests.
