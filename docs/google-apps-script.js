/**
 * Google Apps Script — Survey Submission Webhook
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a Google Sheet with these column headers in row 1:
 *    Timestamp | Name | Phone | Email | Total Score | Income | Spending | Emergency | Debt | Savings | Goals
 * 
 * 2. Open Extensions → Apps Script
 * 
 * 3. Paste this entire script and save
 * 
 * 4. Deploy → New deployment → Web app:
 *    - Execute as: Me
 *    - Who has access: Anyone
 *    - Click Deploy
 * 
 * 5. Copy the Web App URL and add it to your .env.local:
 *    SURVEY_SHEET_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_ID/exec
 * 
 * 6. Redeploy after any code changes (Deploy → Manage deployments → Edit → New version)
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // If this is a standalone script (not opened directly via Extensions -> Apps Script in a sheet),
    // getActiveSpreadsheet() returns null. In that case, you must open it by ID.
    if (!ss) {
      // REPLACE THE ID BELOW WITH YOUR GOOGLE SHEET ID
      // You can find the ID in the URL: https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
      var spreadsheetId = "YOUR_SPREADSHEET_ID_HERE"; 
      ss = SpreadsheetApp.openById(spreadsheetId);
    }
    
    var sheet = ss.getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.name || "",
      data.phone || "",
      data.email || "",
      data.totalScore || 0,
      data.income || "",
      data.spending || "",
      data.emergency || "",
      data.debt || "",
      data.savings || "",
      data.goals || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for CORS preflight (not always needed, but good to have)
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok", message: "Survey webhook is active" }))
    .setMimeType(ContentService.MimeType.JSON);
}
