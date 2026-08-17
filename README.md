# Your Portfolio

A single-page, no-build-step portfolio site. Three files: `index.html`, `style.css`, `script.js`, plus `data.js` — the only file you'll normally touch.

## Update your content

Open `data.js` and edit the values (name, email, projects, links, etc). Every "EDIT ME" comment marks something you should fill in — currently:
- Your email, phone, resume link, GitHub/LinkedIn URLs
- Project GitHub/live links (currently empty)
- Optionally a headshot URL (`photoUrl`) — leave blank to show your initials instead

No build tools, no npm install — just edit the file, save, and refresh the page.

## Preview locally

Open `index.html` directly in a browser, or run a quick local server from this folder:
```
python3 -m http.server 8000
```
then visit `http://localhost:8000`.

## Deploy (pick one — all free)

### Option A: GitHub Pages (recommended, tied to your GitHub profile)
1. Create a new GitHub repo, e.g. `portfolio`.
2. Push these four files to it:
   ```
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. In the repo: Settings → Pages → Source → select `main` branch, `/root`. Save.
4. Your site goes live at `https://YOUR_USERNAME.github.io/portfolio/` within a minute or two.

### Option B: Netlify (fastest, drag-and-drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag this whole folder onto the page.
3. It deploys instantly with a free `*.netlify.app` URL. You can rename it or attach a custom domain in site settings.

### Option C: Vercel
1. Install the CLI (`npm i -g vercel`) or use [vercel.com/new](https://vercel.com/new) and import the folder/repo.
2. Deploy — no build command needed since this is static HTML.

## Updating after deploy
- **GitHub Pages**: edit `data.js`, `git commit`, `git push` — it redeploys automatically.
- **Netlify/Vercel**: if connected to a GitHub repo, same as above. If you used drag-and-drop, just re-drag the folder after editing.
