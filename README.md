# WEE-SUPPORT — Independent Frontend

Standalone static frontend for the WEE-SUPPORT redesign. It does not require Wix source code.

## Routes
- `/` — homepage
- `/services-1` — services
- Pricing Plans — intentionally withheld from the public build for now

The included `_redirects`, `netlify.toml`, and `vercel.json` preserve the clean routes when deployed.

## Run locally
```bash
python3 -m http.server 8080
```
Open `http://localhost:8080/`.

## Deploy
### Netlify
Drag this folder/ZIP into Netlify Drop, or connect the repository. No build command is required; publish directory is `.`.

### Vercel
Import the folder/repository as a static project. No build command is required.

## Current dependency
The exact existing WEE-SUPPORT logo remains referenced from the current public Wix asset URL because the original logo file is not available locally. Replace that reference with a local `/assets/brand/wee-support-logo.png` once the logo file is obtained.

The Pricing Plans page is intentionally excluded from this release and is not linked publicly.

## Design direction
- Overhaul mode
- Preserve WEE-SUPPORT identity and existing primary labels
- Asymmetric editorial hero
- Controlled accent palette
- Responsive layouts
- Reduced-motion support
- No framework/build dependency
