const SPREADSHEET_ID = "1TkgLebtV5cpnnEEXwPXy_vpvtZESpIsV_pTiVM5t-fE";
const SHEET_NAME = "Leads";

function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = getOrCreateSheet_(spreadsheet);
    
    // Parse JSON payload sent as text/plain from the website form.
    let data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        // Fallback if not JSON
        data = e.parameter || {};
      }
    } else {
      data = e.parameter || {};
    }

    const rowData = [
      new Date(),
      data.language || "",
      data.name || "",
      data.phone || "",
      data.address || "",
      data.company || "",
      data.product || "",
      data.page || ""
    ];

    sheet.appendRow(rowData);

    // Return JSON for direct Apps Script tests; the website submits with no-cors.
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Data added successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
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
      "Trang gui"
    ]);
  }

  return sheet;
}
