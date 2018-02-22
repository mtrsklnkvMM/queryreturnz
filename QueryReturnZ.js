require(["esri/tasks/query"], function(ll)
{
	if( typeof esri.tasks.Query.prototype.toJson == 'function' )
	{
		esri.tasks.Query.prototype.toJson2 = esri.tasks.Query.prototype.toJson;
		esri.tasks.Query.prototype.toJson = function(f)
		{
			var myJson = this.toJson2(f);
			myJson.returnZ = true;
			console.log(myJson)
			return myJson;
		}
	}
});