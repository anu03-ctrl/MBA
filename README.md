# Namma Ooru Namma Neeru

Single-page product website for Namma Ooru Namma Neeru packaged drinking water.
Plain HTML, CSS and JavaScript. No build step.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder.

## Deploy on GitHub Pages
Push to GitHub, then Settings > Pages > Deploy from branch > `main` / root.

## Structure
- `index.html` page content
- `css/style.css` styles and colour tokens (top of file)
- `js/script.js` product data (`data` array, with Kannada fields `nk`/`pk`) and Kannada/English toggle, slider, search, enquiry list, droplets
- `images/` label and bottle photos

## To edit
- Products: edit the `data` array in `js/script.js`.
- WhatsApp number: search for `910000000000` in `js/script.js`.
- Email and phone: edit the footer in `index.html`.
- Logo: replace the text logo in the `<nav>` of `index.html` with an `<img>`.
