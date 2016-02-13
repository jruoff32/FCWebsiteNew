/*
Change Email for the user
*/	
function changeEmail()
{
	Parse.initialize("zOfNbhG0EqEpfJn7JT4bzRHqATAS5zn1BoRw9JPC", "hhpsZgfoAGEKHHKO77rswfAkqGW66CfAP2jVUTgO");
	var username = document.getElementById("username").value;
	var password = document.getElementById("EmailPassword").value;
	var email = document.getElementById("newEmail").value;
	
	Parse.User.logIn( username, password,
	{
		success: function( user )
		{
			var currentUser = Parse.User.current();	//get logged in user
			currentUser.setEmail( email );
			
			currentUser.save( null, {	
				success: function( currentUser )	//changed email succesffully and log out afterwords
				{
					alert(" Your email has been changed successfully. " );	
					document.getElementById("email_form").reset();
					currentUser.logOut();
				},
				
				error: function( currentUser, error )	//if the user already has the email they try to change to no error will be thrown
				{
					alert(" That email is already in use. " );
				}
			});
		},
		error: function( user, error )	//the user logged in with wrong credentials
		{
			alert(" The username and password did not match. ");
		}
	});	//end Parse logIn
}

/*
Change Username for user
*/	
function changeUsername()
{
	Parse.initialize("zOfNbhG0EqEpfJn7JT4bzRHqATAS5zn1BoRw9JPC", "hhpsZgfoAGEKHHKO77rswfAkqGW66CfAP2jVUTgO");
	var currentUsername = document.getElementById("currentUsername").value;
	var password = document.getElementById("UsernamePassword").value;

	var desiredUsername = document.getElementById("desiredUsername").value.toLowerCase().replace(/\s+/g, '');
	
	Parse.User.logIn( currentUsername, password,
	{
		success: function( user )
		{
			var currentUser = Parse.User.current();	//get logged in user
			currentUser.setUsername( desiredUsername );
			
			currentUser.save( null, {	
				success: function( currentUser )	//lchanged username successfully and log out afterwords
				{
					alert(" Your username has been changed successfully. " );	
					document.getElementById("username_form").reset();
					currentUser.logOut();
				},
				
				error: function( currentUser, error )	//the username is already in use
				{
					alert(" That username is already in use. " );
				}
			});
		},
		error: function( user, error )	//the user logged in with wrong credentials
		{
			alert(" The username and password did not match. ");
		}
	});	//end Parse logIn
}
