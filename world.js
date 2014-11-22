window.onload = function(){
//Listen for clicks on the button with id of lookup.
//Use the following HTML for the button: <button id="lookup">Lookup</button>
//Fetch the data by opening an Ajax connection to fetch data from world.php
/*	$("lookup").observe()
	new Ajax.Request("url",
		{
		  method: "get",
		  onSuccess: functionName
		}
	);
	
	function functionName(ajax){
		do something with ajax.responseText;
	}*/
	
	function getInfo(){
		$("lookup").observe("click", function(){ 
		var term=$("term").getValue();
			new Ajax.Request("world.php",
				{
					method: "get",
					parameters: {lookup: term},
					onSuccess: function(ajax){
						var response = ajax.responseText || "No response text available.";
							$("result").update(response);
					},
					onFailure: function(){
						alert("ERROR! A problem occurred.");
					}         
				}
			); 
	   });
	}
}