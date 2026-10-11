# AllrightSoft company site

Static company and product portfolio site for 올라잇소프트 (AllrightSoft).

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
- Train Gallery Android trial: https://github.com/tndud2505-ops/Train-Gallery-Downloads/releases/tag/v1.0.0-27-media-menu-20261011

The public page uses screenshots from the actual products. No generated illustration is shipped with the site.

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
| Train Gallery | Two user-approved actual Android captures supplied 2026-10-11 and already published in the portfolio; the trial link is a test-signed prerelease, not a Play Store release. |

Keep screenshots at their intrinsic ratios. New screenshots should receive dated
filenames; preserve previous assets for recovery. Generated layout concepts are
design references only and must not be presented as actual product screens.
