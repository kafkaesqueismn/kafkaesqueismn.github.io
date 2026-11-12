# metamorphs.dev

Source for my portfolio site: **https://metamorphs.dev**. Plain HTML, CSS and JavaScript, hosted on GitHub Pages.

## Publishing changes

```bash
git add . && git commit -m "update" && git push
```

The live site updates about a minute after each push.

## Files

- `index.html`, `style.css`, `script.js`: the homepage
- `blog/`, `writeups/`, `feed.xml`, `sitemap.xml`: generated pages. Don't edit them by hand.
- `assets/`: images, favicon and the link-preview image (`og.png`)
- `.well-known/security.txt`: security contact ([securitytxt.org](https://securitytxt.org))
- `CNAME`: custom domain for GitHub Pages
- `.nojekyll`: tells GitHub Pages to serve files as-is
