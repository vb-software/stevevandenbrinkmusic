# Steve VandenBrink · Keys & Piano

Static promo site — plain HTML/CSS/JS, no build step.

```
index.html        page layout + copy
css/style.css     dark theme (colors are variables at the top)
js/data.js        ← videos, gigs, YouTube channel — edit this to update the site
js/main.js        renders videos/gigs, handles the form
images/           piano.jpg (hero), live.jpg (about)
```

## Updating content

Everything routine lives in `js/data.js`:

- **Videos** — add `{ id: "<YouTube URL or ID>", title: "...", note: "..." }`. Videos load as a thumbnail and only pull in the YouTube player when clicked (faster page, no tracking until play).
- **Gigs** — add `{ date: "YYYY-MM-DD", title, venue, city, time?, link?, private? }`. Upcoming vs. past sorts itself by date. Use `private: true` for weddings/funerals to hide venue details.
- **YouTube channel** — set `youtubeChannel`.

## Inquiry form

The form posts to [Formspree](https://formspree.io) (free tier is plenty for a booking form):

1. Create a form at formspree.io with the email you want inquiries sent to.
2. Copy the form ID (the `xxxxxxx` in `https://formspree.io/f/xxxxxxx`).
3. Replace `YOUR_FORM_ID` in `index.html`.

## Preview locally

```
python3 -m http.server 8000
```
then open http://localhost:8000

## Hosting

Since the repo is private, the simplest free options are **Cloudflare Pages** or **Netlify** — connect the repo, no build command, publish directory `/`. Every push to `main` redeploys. (GitHub Pages also works, but on a private repo it requires a paid GitHub plan.) Point a custom domain at whichever you choose.

## Cache busting

`index.html` loads CSS/JS with `?v=N`. After changing `css/style.css`, `js/main.js` or `js/data.js`, bump the number so browsers pick up the new file instead of a cached copy.
