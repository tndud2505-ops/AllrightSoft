# AllrightSoft

Interactive catalog at https://allrightsoftware.com/ . GitHub Pages publishes
`main:/`. Preserve `CNAME`, canonical URL, Naver verification, robots, sitemap,
HTTPS and existing email/DNS routing when updating the site.

## Current presentation · 2026-11-15

- The single source for order and operational status is Career_Management's
  `career_system/career_dossier/source/CAREER_SOURCE_MASTER.json`, `personal_projects`.
  The catalog derives `operationalStatus` and order from it, without a separate
  priority/classification registry. Twelve entries represent eleven public
  projects because USED PICK keeps separate web and Android entries.
- The plain left rail follows 서비스 중 → 폐기 → 검토 중. The source sequence is
  preserved, including Virtual MCU → 대화 분석 → MORI CAM → Doll Toss at the bottom.
  Platform/tool/game distinctions remain in each product's `kind` and detail line.
  Mobile folds the same list in place and closes it after selection.
- Existing live-product destinations are preserved. 폐기 entries keep historical
  descriptions and `과거 사이트` links; this is an owner project decision, not
  evidence that a server/domain was shut down. 검토 중 entries retain safe URLs
  labelled `검토용 화면` / `검토용 APK`; Doll Toss remains disabled without a URL.
  A reachable demo, APK or store review never upgrades operational status.
- Hover/click transitions, restrained pointer motion, image enlargement, Escape
  closing and focus return are available. Reduced-motion preferences are honored.
- Contact is the owner's explicitly authorized `tndud2505@naver.com` and
  `010-3940-3506`. Other private career/profile fields are not site content.
- This company site is independent of the personal Career_Profile site and
  career document generation workflow.

## Image provenance

Keep intrinsic image ratios and dated filenames. Generated layout concepts are
references only; they are never actual product screens. Previous assets are
retained for recovery.

| Entry | Selected source and limits |
| --- | --- |
| K Stock | Live public LG Electronics chart captured 2026-11-13; screenshot ends above the unrelated sponsor ad. Chart/research UI, not order execution. |
| USED PICK | Live Intel Core i5-12400F listings captured 2026-11-13. Displayed asking prices, not completed transactions. |
| Train Gallery | Actual native calendar and Vlog editor captures from approved November 6 store materials, with licensed sample exercise content. No claim of a newly captured production device. |
| 우리여정 | November 12 approved diary/map promotional composition using synthetic sample records. The underlying diary sample is October 23; not a new production capture. No private family pictures copied. |
| USED PICK 앱 | November 13 approved Picky composition and November 12 search poster, based on real Android TWA captures. Illustrations are promotional artwork. |
| MORI CAM | November 14 actual app UI: approved lemon/blue-vase sample camera and four-shot save/share screens. These are sample previews, not physical-camera or personal-face evidence. |
| Doll Toss | November 13 actual development-game introduction, copied from the approved operations screenshot. This is not proof of a public playable release. |
| Virtual MCU | Live public circuit/pin-route view captured November 13. Idle/build-required state; not proof of firmware execution. |
| Jira Obsidian | Latest safe approved September 9 installed-app sample-project capture. No private tenant data or release-version claim. |
| 대화 분석 | Approved September 8 fictional-conversation report, not a personal conversation. |
| COTEEPET / EMOTOWN | Existing October 11 actual public catalog captures; no newer safe approved source selected. Kept in the middle 폐기 history group at the owner's request. |

## Link and release boundaries

- Train Gallery opens the public Google Play package
  `com.trainingapp.traingallery`.
- USED PICK web and Android remain separate entries. The Android action opens
  the public Google Play listing for `com.usedpick.app`:
  https://play.google.com/store/apps/details?id=com.usedpick.app .
  Its official store title is `USED PICK — 중고 PC 부품 시세`; the web entry
  continues to open https://used-pick.com/ .
- 우리여정 opens the public Google Play listing for `app.dulharu.couple`:
  https://play.google.com/store/apps/details?id=app.dulharu.couple .
  The former trial APK action is removed. Family records and access restrictions
  remain private.
- Both listings were publicly available without login in South Korea on
  November 14, with install text and `SoftwareApplication` / `InStock` metadata.
  This confirms the Korean listings, not availability in every configured
  country or physical-device installation. Source evidence:
  `C:/DeVelop/Career_Management/career_system/products/operations-evidence/2026-11-14/app-public-status.json`.
  A later update under review does not make an already-public app unreleased.
- MORI CAM is included at the approved stage `검토 중 · Android 앱 · 테스트 APK 배포 · Google Play 심사 중`.
  Its action downloads the verified public 2.1.1 prerelease APK:
  https://github.com/tndud2505-ops/MORI-CAM-Downloads/releases/download/v2.1.1-camera-preview/MORI-CAM-2.1.1-release.apk .
  SHA256: `ac036763ed9ecf02aa05907b3e6568b83e6e92a914e365e4918f0d51be3663e3`.
  Play is not public in the November 15 Korean check; local 2.2.0 work and
  requested moving-video QR features are not claimed as published.
- Doll Toss is under 검토 중 and remains a developing 3D game. It has an internal catalog introduction
  and approved screenshot only, with no external test URL or playable-release claim.
- All eleven public projects remain visible with their source operational
  status and actual platform/build stage. Explicitly excluded projects are not
  restored. COTEEPET and EMOTOWN remain 폐기 history without active promotion.
- Jira Obsidian links the existing official Obsidian Context Map for Jira
  Marketplace listing. Do not describe development builds as public releases.
- 대화 분석 is labelled as a developing app and keeps its existing TXT-import link. It explores conversation evidence;
  it does not diagnose feelings or relationships.

## Preview and recovery

```powershell
python -m http.server 4198 --bind 127.0.0.1 --directory C:\DeVelop\AllrightSoft
```

The final source replaces the former banner/card catalog. Recovery base:
`16b0c48580ac8d7687a021d56d0968edee94d094`.

The November 13 baseline checked all ten selections and their original links;
1440px desktop and 390px/320px mobile showed no horizontal overflow. The grouped left
list, mobile collapse, image dialog/Escape/focus return and title-level actions
were checked.
Protected hosting/search files remain byte-identical. The November 15 ordering update
uses the existing Pages pipeline with a focused check of groups, status labels
and the affected history/review panels;
publication proof is stored under Career_Management's
`career_system/products/operations-evidence/2026-11-15/allrightsoft/`.

## Search registration

Canonical homepage: `https://allrightsoftware.com/`. Google Search Console's
existing domain property and homepage indexing were confirmed November 11;
the sitemap was submitted successfully with one discovered page. Naver ownership
verification, sitemap registration and homepage collection request completed
November 11. Registration does not guarantee ranking or immediate recrawling.
Keep the issued Naver token and public proof files in future releases.
