# VICATRA Landing Page

Static bilingual landing page for VICATRA - Vietnam Cambodia Trading.

## Preview locally

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Connect Lead Form To Google Sheets

The website is ready to submit leads to Google Sheets through Google Apps Script.

1. Open the target Google Sheet.
2. Go to `Extensions` > `Apps Script`.
3. Paste the content from `google-apps-script.gs`.
4. Deploy as a `Web app`.
5. Set `Execute as` to `Me`.
6. Set `Who has access` to `Anyone`.
7. Copy the Web App URL.
8. Paste it into `GOOGLE_SHEETS_WEB_APP_URL` in `script.js`.

The spreadsheet ID is already configured:

```text
1TkgLebtV5cpnnEEXwPXy_vpvtZESpIsV_pTiVM5t-fE
```
