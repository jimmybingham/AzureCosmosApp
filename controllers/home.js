var template = require('../views/template-main');  
//var test_data = require('../model/test-data');  
var CosmosDBdata = require('../model/CosmosDBdata'); 



exports.get = function(req, res) {  
  //var teamlist = test_data.teamlist;
	//var queryInput = 'SELECT * FROM c where c.name ="Claremont Free Church"';
	var queryInput = 'SELECT * FROM c';

    CosmosDBdata.CosmosList(queryInput)
		.then(function(fulfilled) {
			
		var keyNames = Object.keys(fulfilled[0]);
		var newRow = "";
		var newRowTemp = "";
		
		var startTag = "<tr>";
		var endTag = "</tr>";
		var newHeader = startTag;
		for(i=0;i<keyNames.length;i++) {
			
			var HeaderName = "<th>" + keyNames[i] + "</th>";
			newHeader += HeaderName ;
		};
		newHeader += endTag;
		
		
		//for(i=0;i<fulfilled.length-1;i++) {
		for(i=0;i<20;i++) {
			//console.log('each fulfilled');
			//console.log(fulfilled[i].name);
			newRowTemp = "";
			Object.keys(fulfilled[i]).forEach(function(key,index) {
				// key: the name of the object key
				// index: the ordinal position of the key within the object
				//console.log('Object Entries');				
				//console.log(Object.entries(fulfilled[i])[index][1]);
				var rowDetail = Object.entries(fulfilled[i])[index][1]
				newRowTemp += "<td>" + rowDetail + "</td>";
				
			});
			//console.log(newRowTemp);
			newRow += startTag + newRowTemp + endTag;
			
		};
		
	     res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.write(template.build("Test web page on node.js", 
		"Data from CosmosDB in Azure", 
		"Below is an extract from the Cosmos DB in Azure",
		newHeader,
		newRow
		));
		res.end();
  })

};