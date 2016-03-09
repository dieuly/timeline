// Generatejson
var fs = require("fs");
var resultJson;
xlsxj = require("xlsx-to-json");
xlsxj({
	input: "datasource.xlsx", 
	output: "datasource.json"
}, function(err, result) {
    resultJson = result.filter(function(item) {
        return item.id !== "";
    });
});

setTimeout(function() {
    // json = fs.readFileSync("datasource.json", "utf8");
    fs.writeFileSync("datasource.js", "var dataSource = ", "utf8");
    fs.appendFileSync("datasource.js",  JSON.stringify(resultJson), "utf8");
    fs.appendFileSync("datasource.js",  ";", "utf8");
    
    // Then remove empty rows
    
}, 1000);