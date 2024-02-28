function getTodosFromAPI() {
  var url = "https://jsonplaceholder.typicode.com/todos";
  var response = UrlFetchApp.fetch(url);
  if (response.getResponseCode() === 200) {
    var todos = JSON.parse(response.getContentText());
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Inventory");;
    sheet.clearContents();
    var headerRow = ["userId", "id", "title", "completed"];
    sheet.appendRow(headerRow);
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
      var dataRow = [todo.userId, todo.id, todo.title, todo.completed];
      sheet.appendRow(dataRow);
    }
    Logger.log("Todos data added to sheet successfully!");
  } else {
    Logger.log("Error fetching data: " + response.getResponseCode());
  }
}
