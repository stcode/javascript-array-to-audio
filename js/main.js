var w= new Worker("worker.js");
w.onmessage = function(event){
	var r = document.getElementById("result");
	if(r){}else{r=document.createElement('div');r.setAttribute('id','result');document.appendChild(r);}
    var dm = event || {};
    dm=dm.data || {};
    dm=dm.message || '';
	r.innerHTML = ''+dm;
};
w.postMessage(" ( 'message returned: ' + ( 1 + 1.02 ) ) ");