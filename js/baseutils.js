var busyIndicator = {};
busyIndicator.show = function()
{
	$('.load-spinner').addClass('show');
}

busyIndicator.hide = function()
{
	$('.load-spinner').removeClass('show');
}