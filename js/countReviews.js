function countReviews(){
	Parse.initialize("zOfNbhG0EqEpfJn7JT4bzRHqATAS5zn1BoRw9JPC", "hhpsZgfoAGEKHHKO77rswfAkqGW66CfAP2jVUTgO");

	var Plates = Parse.Object.extend("Post");
	var plateQuery = new Parse.Query(Plates);

	plateQuery.count({
  		success: function(count) {
    		// The count request succeeded. Show the count
    		$("#reviewCount").text(count + ' plates and counting!');
			//return count;
  		},
  		error: function(error) {
    		
  		}
	});


	

}
