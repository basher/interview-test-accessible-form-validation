# Interview Test - Accessible Form Validation

## View static version of BUILD output.
- No need to run `yarn` commands.
- The `STATIC_BUILD` folder is a copy of the generated `build`. I have edited `index.html` to fix CSS/JS file paths, and removed `type="module"` to resolve CORS error when running JS locally from the file system.
- Remove the `.txt` suffix from JS files.
- Simply open `STATIC_BUILD/index.html` in browser.

## TODO
1. Copy `build` to `STATIC_BUILD`.
    - Edit `index.html`.
    - Add `.txt` suffix to JS files.
2. Fix:
    - Remove redundant CSS.
    - Tweak styles (e.g. font sizes, form field widths).
3. Document:
    - `yarn start` etc.
    - Architecture (boilerplate, linters, etc).
    - JS disabled (progressive enhancement) form posts, but no data persists (could have used local storage for UI?).
    - a11y (added visually hidden aria-live for add/remove users).
4. Test:
    - Safari 12 support.
5. Unit tests.
