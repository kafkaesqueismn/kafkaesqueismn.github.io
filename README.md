# metamorphs.dev

Source for my portfolio site: **https://metamorphs.dev**. Plain HTML, CSS and JavaScript, hosted on GitHub Pages.

## Publishing changes

```bash
git add . && git commit -m "update" && git push
```

The live site updates about a minute after each push.

## Adding a writeup

1. Copy `writeups/template.html` to `writeups/<name>.html` and fill it in.
   Delete the `noindex` line so search engines can find it.
2. In `index.html`, find the **Writeups** section. Add a card for it (there's a commented-out example to copy),
   and delete the "Coming soon" card once you have your first writeup.
3. Commit and push.

Only publish writeups for **retired** HackTheBox machines and finished challenges. Active ones are against the rules.

## Other files

- `assets/`: images, favicon and the link-preview image (`og.png`)
- `.well-known/security.txt`: security contact ([securitytxt.org](https://securitytxt.org))
- `CNAME`: custom domain for GitHub Pages
- `.nojekyll`: tells GitHub Pages to serve `.well-known/` as-is
