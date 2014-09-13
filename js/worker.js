

function onmessage(event)
{
	var rtn = 'Event parameter was null or undefined.';
	if(event && event.data)
	{
		rtn = eval(event.data);
	}
	postMessage(rtn);
}