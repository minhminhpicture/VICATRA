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
      data.company || "",
      data.tax_id || "",
      data.name || "",
      data.phone || "",
      data.website || "",
      data.address || "",
      data.category || "",
      data.product_count || "",
      data.demand || "",
      data.target_market || "",
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
      "Ten Doanh nghiep",
      "MST",
      "Ho va ten đại diện",
      "Dien thoai / Zalo",
      "Website",
      "Dia chi nhà máy",
      "Nganh hang",
      "So luong SP",
      "Nhu cau chinh",
      "Thi truong muc tieu",
      "Mo ta chi tiet",
      "Trang gui"
    ]);
  }

  return sheet;
}
