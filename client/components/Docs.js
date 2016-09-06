import React from 'react';

const Docs = React.createClass({
	render(){
		return(
			<div className="well well-lg">
				<h2>Docs</h2>

				<h3>Navigating the Site</h3>
				<br></br>

				<h4>CREATE</h4>
				<p>The <b>CREATE</b> tab is where you instantiate all of your databases and collections. You are currently limited to three (3) databases. Please email us at administrator@sheep.host if you need to rename a database or delete it or any collections within.</p>
				<br></br>
				<h4>Creating a Database</h4>
				<p>Enter the desired name of your database and the name of its first collection.</p>
				<p>Enter your desired schema in the form of a JSON object. Incorrect schema input will be rejected and neither the database or collection will be created.</p>
				<p><b>Correct example: </b>{String.fromCharCode(123)}"firstName": "String", "lastName": "String", "age": "Number"{String.fromCharCode(125)}</p>
				<p><b>Inorrect example: </b>firstName: String, lastName: String, age: Number</p>
				<br></br>
				<h4>Creating a Collection</h4>
				<p>To create a new collection within an existing database, simply enter the name of that database in lieu of a new one.</p>
				<br></br>

				<h4>DASHBOARD</h4>
				<p>The Dashboard tab contains all of your data we are hosting. You can navigate between all of your databases and each collection within those databases.</p>
				<p>The particular collection displayed on the dashboard at any given moment will display new documents, updates to existing documents and the removel of documents as those changes come in from your apps.</p>
				<h5>API Sandbox</h5>
				<p>Below the data is a sandbox for you to prototype your data performing simple CRUD instructions to the collection you are viewing.</p>
				<p>To <b>update</b> or <b>delete</b> documents, copy and paste the "_id" correspoding to that record into the designated input field.</p>
				<p>To <b>update</b> or <b>add</b> documents, enter the desired information in the form of a JSON object the same way you enter your schema on the <b>CREATE</b> page.</p>
				<p><b>Example: </b>{String.fromCharCode(123)}"firstName": "John", "lastName": "Doe", "age": "30"{String.fromCharCode(125)}</p>
				<br></br>

				<h4>PROFILE</h4>
				<p>The <b>PROFILE</b> tab contains all of your user information, a list of your databases and collections, as well as your API key information.</p>
				<p>Below all of this information is the auto-generated series of <b>script tags</b> to access our SDK...</p>
				<br></br>

				<h3>Using the SDK</h3>
				<p>To use the globally exposed <b>sheep</b> object, simply copy the <b>script tags</b> and paste them into the app's HTML file above your Javascript.</p>
				<p>Call the SDK methods via the  <b>sheep</b> object, and enter the desired database name and collection as the first two arguments.</p>
				<br></br>
				<h4>GET</h4>
				<b>sheep.get( [database_name], [collection_name], callback )</b>
				<p>Returns all of the documents in the collection to the <b>callback</b> in the third argument as an array of objects. Within the callback, call JSON.parse() on the returned array before using the data.</p>
				<p><b>Example: </b></p>
				<br></br>
				<h4>POST</h4>
				<b>sheep.get( [database_name], [collection_name], {String.fromCharCode(123)}data{String.fromCharCode(125)})</b>
				<p>Adds a record to a given collection. The third argument, <b>data</b> refers to an object with the key:value pairs, that follows the schema you created for that collection. A successful post will receive a response with status code 200.</p>
				<p><b>Example: </b></p>
				<br></br>
				<h4>PUT</h4>
				<b>sheep.put(  [database_name], [collection_name], {String.fromCharCode(123)}query{String.fromCharCode(125)}, {String.fromCharCode(123)}data{String.fromCharCode(125)} )</b>
				<p>Updates a record in a given collection. The third argument, <b>query</b> refers to an object with the key:value pair of the record you want to change, that follows the schema you created for that collection. The fourth argument, <b>data</b> refers to an object with the key:value pair(s) to change. A successful post will receive a response with status code 200.</p>
				<p><b>Example: </b></p>
				<br></br>
				<h4>DELETE</h4>
				<b>sheep.delete( [database_name], [collection_name], {String.fromCharCode(123)}query{String.fromCharCode(125)} )</b>
				<p>Deletes a record in a given collection. The third argument, <b>query</b> refers to an object with the key:value pair of the record you want to delete, that follows the schema you created for that collection. A successful post will receive a response with status code 200.</p>
				<p><b>Example: </b></p>
			</div>
		)
	}
})

export default Docs;