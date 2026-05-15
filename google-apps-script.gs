const SPREADSHEET_ID = "1TkgLebtV5cpnnEEXwPXy_vpvtZESpIsV_pTiVM5t-fE";
const SHEET_NAME = "Leads";

function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = getOrCreateSheet_(spreadsheet);
  const data = e.parameter || {};

  sheet.appendRow([
    new Date(),
    data.language || "",
    data.name || "",
    data.phone || "",
    data.address || "",
    data.company || "",
    data.product || "",
    data.page || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet_(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Thoi gian",
      "Ngon ngu",
      "Ho va ten",
      "Dien thoai / Zalo",
      "Dia chi",
      "Doanh nghiep",
      "Nhom san pham",
      "Trang gui",
    ]);
  }

  return sheet;
}
