"use strict";

var documentClient = require("documentdb").DocumentClient;
var config = require("../config");
var url = require('url');

var client = new documentClient(config.endpoint, { "masterKey": config.primaryKey });

var HttpStatusCodes = { NOTFOUND: 404 };
var databaseUrl = `dbs/${config.database.id}`;
var collectionUrl = `${databaseUrl}/colls/${config.collection.id}`;

exports.CosmosList = function(queryInput) {
//var CosmosData = function(queryInput) {
    //console.log(`Querying collection through index:\n${config.collection.id}`);

    let p1 = new Promise((resolve, reject) => {
        client.queryDocuments(
            collectionUrl,
            //'SELECT * FROM c where c.name ="Claremont Free Church"'
			queryInput
        ).toArray((err, results) => {
            if (err) reject(err)
            else {
                for (var queryResult of results) {
					//console.log('queryResult');
					//console.log(queryResult);
                    //let resultString = JSON.stringify(queryResult);
                    //console.log(`\tQuery returned ${resultString}`);
					//console.log('resultString');
					//console.log(resultString);
					//return queryResult;
                }
                //console.log();
				console.log('results');
				console.log(results);
                resolve(results);
				//return results;

            }
        });
    });
	
	return p1;
	
};

//exports.CosmosList = CosmosData(queryInput);