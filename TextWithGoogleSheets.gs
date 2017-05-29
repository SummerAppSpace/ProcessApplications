/* usage:
This tutorial follows: https://www.twilio.com/blog/2016/02/send-sms-from-a-google-spreadsheet.html
 • create a Twilio account, add $20 in credit and get a phone number. You'll need the acountid, auth token and phone number to fill in to
 • Create a spreadsheet in GoogleSheets with a 3 column header:
 Phone Number, Message, Status (this can be one sheet in many tabs)
 • Fill in the fields below the header in the sheet
 • Go to Tools->Script Editor
 • Enter the below script.
 • Make sure your sheet is the only one open, can be in another tab, and that the correct tab of the sheet is open, go back to the code
 • Test by entering a number of your choice to the sendSmsTest after filling everything out, and select Run->sendSmsTest from the script editor
 •  When you are ready, Select Run->SendAll
 */
function sendSms(to, body) {
  var messages_url = "https://api.twilio.com/2010-04-01/Accounts/YOURACCOUNTSID/Messages.json";

  var payload = {
    "To": to,
    "Body" : body,
    "From" : "YOURTWILIONUMBER"
  };

  var options = {
    "method" : "post",
    "payload" : payload
  };

  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode("YOURACCOUNTSID:YOURAUTHTOKEN")
  };

  UrlFetchApp.fetch(messages_url, options);
}

function sendAll() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var dataRange = sheet.getRange(startRow, 1, numRows, 2) 
  var data = dataRange.getValues();

  for (i in data) {
    var row = data[i];
    try {
      response_data = sendSms(row[0], row[1]);
      status = "sent";
    } catch(err) {
      Logger.log(err);
      status = "error";
    }
    sheet.getRange(startRow + Number(i), 3).setValue(status);
  }
}

function myFunction() {
  sendAll();
}

function sendSmsTest() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var messages_url = "https://api.twilio.com/2010-04-01/Accounts/YOURACCOUNTSID/Messages.json";
 
  var payload = {
    "To": "YOURTESTNUMBER",
    "Body" : "just another test",
    "From" : "YOURTWILIONUMBER"
  };
 
  var options = {
    "method" : "post",
    "payload" : payload
  };
 
  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode("YOURACCOUNTSID:YOURAUTHTOKEN")
  };
 
  UrlFetchApp.fetch(messages_url, options);
}

function sendSms(to, body) {
  var messages_url = "https://api.twilio.com/2010-04-01/Accounts/YOURACCOUNTSID/Messages.json";
 
  var payload = {
    "To": to,
    "Body" : body,
    "From" : "YOURTWILIONUMBER"
  };
 
  var options = {
    "method" : "post",
    "payload" : payload
  };
 
  options.headers = { 
    "Authorization" : "Basic " + Utilities.base64Encode("YOURACCOUNTSID:YOURAUTHTOKEN")
  };
 
  UrlFetchApp.fetch(messages_url, options);
}
 
function sendAll() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; 
  var numRows = sheet.getLastRow() - 1; 
  var dataRange = sheet.getRange(startRow, 1, numRows, 2) 
  var data = dataRange.getValues();
 
  for (i in data) {
    var row = data[i];
    try {
      response_data = sendSms(row[0], row[1]);
      status = "sent";
    } catch(err) {
      Logger.log(err);
      status = "error";
    }
    sheet.getRange(startRow + Number(i), 3).setValue(status);
  }
}
 
function myFunction() {
  sendAll();
}