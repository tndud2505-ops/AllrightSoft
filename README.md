# AllrightSoft product catalog

Static product catalog for 올라잇소프트 (AllrightSoft). The homepage opens
directly on product descriptions, screenshots, category filters and product links.

Production: https://allrightsoftware.com/

The static site is published from `main:/` through GitHub Pages. Preserve the
root `CNAME` (`allrightsoftware.com`) when publishing; website updates must not
change DNS or company email routing.

## Local preview

```powershell
python -m http.server 4197 --bind 127.0.0.1 --directory C:\DeVelop\AllrightSoft
```

Open `http://127.0.0.1:4197/`. If an origin has an unrelated cached service worker,
use a fresh local port instead of clearing another project's browser data.

## Product sources

- K Stock: https://kstockclock.com/
- USED PICK: https://used-pick.com/
- COTEEPET: https://coteepet.com/ko/
- EMOTOWN: https://emotown.com/ko/
- Virtual MCU: https://virtual-mcu-training-env.pages.dev/
- Obsidian Context Map for Jira: https://marketplace.atlassian.com/apps/1923219004/obsidian-context-map-for-jira
- Train Gallery introduction: https://tndud2505-ops.github.io/Career_Profile/projects/train-gallery.html
- Train Gallery Google Play: https://play.google.com/store/apps/details?id=com.trainingapp.traingallery&hl=en_US
- 우리여정 introduction: https://tndud2505-ops.github.io/Career_Profile/projects/dulharu.html
- 대화 분석 introduction: https://tndud2505-ops.github.io/Career_Profile/projects/saigyeol-chat-analysis.html

The public page uses screenshots from the actual products. No generated illustration is shipped with the site.

## Current catalog · 2026-11-13

- Nine public product introductions, synchronized with Career Management's
  `career_system/career_dossier/source/CAREER_SOURCE_MASTER.json` and
  `career_system/wiki/product_features.md`. Company-site product order remains
  independent of the personal portfolio.
- Company introduction, marketing hero, location, separate contact section and
  GitHub profile link have been removed. A small product-inquiry email remains
  in the footer. Navigation stays visible on mobile without a menu toggle.
- 우리여정 and 대화 분석 link only to their existing public introductions.
  The private development URLs and family screenshots are not copied here.
  Android trial / in-development labels distinguish these from released products.
- Train Gallery uses the current approved home and vlog images from October 27
  at their full portrait ratios, with a Korean Google Play link. The earlier
  screenshots are retained as recovery assets.
- Jira's display name is `Jira Obsidian · 지라 옵시디언`; the existing official
  Obsidian Context Map for Jira Marketplace link is preserved.
- Keep the canonical URL, Naver verification, robots, sitemap, CNAME, HTTPS and
  mail routing intact. Company-site edits alone do not regenerate resumes,
  career-description documents or the personal Career_Profile homepage.

## October 2026 refresh

- Seven products with verified descriptions, inline feature summaries and direct
  product links; USED PICK is a PC-component comparison service, not a phone gallery.
- Data / content / developer-tool filters, keyboard-accessible image enlargement,
  original-size links and a responsive mobile menu.
- White, navy and cobalt company layout; self-hosted Pretendard Variable under the
  included SIL Open Font License (`assets/fonts/OFL.txt`).
- Public contact is `support@allrightsoftware.com`. Only city/country is published;
  private legal identifiers, home address and receiving inbox are not site content.

### Screenshot provenance and claim boundaries

| Product | Actual screen used |
| --- | --- |
| K Stock | Live LG Electronics detail chart, captured 2026-10-11; research UI, not trading advice or order execution. |
| USED PICK | Live Intel Core i5-12400F results, captured 2026-10-11; listing/displayed prices, not completed transaction prices. |
| COTEEPET | Loaded Korean 42-pet catalog, captured 2026-10-11; normal scroll places the unrelated ad above the visible content. |
| EMOTOWN | Loaded Korean 129-set gallery, captured 2026-10-11. |
| Virtual MCU | Live circuit/pin-path view, captured 2026-10-11; idle/build-required state, not proof of firmware execution. |
| Jira app | Latest available installed-app sample project screen dated 2026-09-09. Marketplace listing verified 2026-10-11 as v2.9.0 / Try it free; no customer-adoption claims. |
| Train Gallery | Two user-approved actual Android captures supplied 2026-10-11 and already published in the portfolio; the Google Play link identifies the app without asserting availability or price. |

Keep screenshots at their intrinsic ratios. New screenshots should receive dated
filenames; preserve previous assets for recovery. Generated layout concepts are
design references only and must not be presented as actual product screens.

## Search registration · 2026-11-11

The existing homepage introduces Train Gallery (트레인갤러리) and Obsidian
Context Map for Jira (지라 옵시디언). Their Korean names are visible beside
the official English headings, and Train Gallery links directly to Google Play.

- Canonical site: `https://allrightsoftware.com/`.
- `sitemap.xml` lists only the existing homepage on this domain; external app
  stores and portfolio pages are not sitemap entries.
- `robots.txt` allows crawling and advertises the sitemap.
- GitHub Pages run `42993034811` successfully published commit `f8b9ab4`.
  The primary verified HTTP 200 for the homepage, robots and sitemap; the served
  head contains the issued Naver tag, both Korean product names are visible, and
  the Google Play link targets the requested package.
- Google Search Console already had the verified domain property and indexed
  homepage. The new sitemap was submitted on November 11 and reports success
  with one discovered page. Google also confirmed the updated homepage's
  indexing request was added to its crawl queue. No new token or DNS change
  was needed.
- Naver ownership verification completed after the user authorized security
  character entry. `sitemap.xml` was registered at 18:18:47 KST on November 11,
  and homepage collection request 1 was accepted at 18:19:17 KST. Search result
  appearance is not yet verified.
- No new landing pages, app changes, CNAME changes, or email-routing changes
  are included.

Preserve the public proof and sitemap in future site releases. Google confirmed
the existing homepage is indexed; the updated wording is queued for recrawling.
Registration and sitemap submission do not establish that either product has
been indexed or guarantee its search ranking.
