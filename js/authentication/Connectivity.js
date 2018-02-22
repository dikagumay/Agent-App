var Connectivity ={};

Connectivity.isConnect = false;

Connectivity.onConnect = function()
{
	Connectivity.isConnect = true;
}


Connectivity.onDisConnect = function()
{
	Connectivity.isConnect = false;
}