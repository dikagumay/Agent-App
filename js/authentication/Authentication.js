var Authentication = {};



Authentication.data = {};

Authentication.data.isOfflineLogin = false;

Authentication.data.salesForce = {}; 

Authentication.login = function(username, password)
{
	AuthenticationOnline.login(username, password);	
}

Authentication.success = function()
{
	// initialize master data
	
	
	// initialize agent / candidate data
	var isAgent = false;
	
	if(isAgent)
	{
		Authentication.successAgent();
	}
	else
	{
		Authentication.successCandidate();
	}
	
}

Authentication.successAgent = function()
{
	// initialize agent data
	
	// agent page
	//$("#MainContent").load(path + "pages/a-dashboard.html");
	document.getElementById("MainContent").innerHTML='';
	document.getElementById("homePru").style.display = "block";
}

Authentication.successCandidate = function()
{
	// initialize candidate data
	
	// candidate page
	//$("#MainContent").load(path + "pages/c-home.html");
}


Authentication.failed = function()
{
	//alert("failed");
	
}

Authentication.logout = function()
{
	WL.Client.logout(SalesForceRealm.realm);
}