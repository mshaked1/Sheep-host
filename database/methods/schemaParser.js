'use strict';



  //Replace single quotes with double quotes
  function singleToDoubleQuote(str){
    return str.replace(/'/g, '"');
  }

  //Validates stringified JSON is converted to object
  function validatedParsedJSON (jsonString){
    try {
      var parsedString = JSON.parse(jsonString);

      // If statement handle JSON.parse cases that doesn't throw errors:
      // Neither JSON.parse(false) or JSON.parse(1234) throw errors
      // JSON.parse(null) returns null and typeof null === "object"
      if (parsedString && typeof parsedString === "object") {
        return parsedString;
      }
    }
    catch (parsedString) { 
      //throw new Error('Not valid parsed JSON');
    }
      return false;
  };

  //Recursively traverses object and replace string to schema types
  function traverseObjReplaceTypes(obj){
    for(var key in obj){
      if(typeof obj[key] === "object") {
        traverseObjReplaceTypes(obj[key]);
      }
      if(typeof obj[key] === 'string'){
        var value = obj[key].toLowerCase();  
        switch (value) {
          case 'array':
          return obj[key] = Array;
          case 'buffer':
          return obj[key] = Buffer;
          case 'boolean':
          return obj[key] = Boolean;
          case 'date':
          return obj[key] = Date;
          case 'number':
          return obj[key] = Number;
          case 'string':
          return obj[key] = String;
          case 'object':
          return obj[key] = Object;
          default:
          return obj[key] = value;
        }
      }
    }
  }

// checks if schema is valid
//add middleware to /database post route in create.js file
function schemaCheck(req, res, next){
  console.log('schemaCheck req', req.body)
  var schema = req.body.schema;
  var schemaDoubleQuote = singleToDoubleQuote(schema);
  if(validatedParsedJSON(schemaDoubleQuote)){
  	req.body.schema = schemaDoubleQuote;
  	console.log('validatedSchema')
    next();
  } else {
  	res.json({error : 'Incorrect schema format'})
  }
}



module.exports = { schemaCheck, singleToDoubleQuote, validatedParsedJSON, traverseObjReplaceTypes };
