var n=0;
var showNum = document.getElementById("num");
function Mea(value){
	n=value;
	setBg(value);
	plays(value);
	cons(value);
	}
function setBg(value){
	for(var i=0;i<4;i++)
   if(value==i){
		showNum.getElementsByTagName("div")[i].className='bigon';
		} 
	else{	
		showNum.getElementsByTagName("div")[i].className='bigoff';
		}  
	} 
function plays(value){
	try
	{
		with (fc)
		{
			filters[0].Apply();
			for(i=0;i<4;i++)i==value?children[i].style.display="block":children[i].style.display="none"; 
			filters[0].play(); 
		}
	}
	catch(e)
	{
		var divlist = document.getElementById("fc").getElementsByTagName("div");
		for(i=0;i<4;i++)
		{
			i==value?divlist[i].style.display="block":divlist[i].style.display="none";
		}
	}

	
}
function cons(value){
	try
	{
		with (con)
		{
				for(i=0;i<4;i++)i==value?children[i].style.display="block":children[i].style.display="none"; 		
		}
	}
	catch(e)
	{
		var divlist = document.getElementById("con").getElementsByTagName("div");
		for(i=0;i<4;i++)
		{
			i==value?divlist[i].style.display="block":divlist[i].style.display="none";
		}		
	}
}

function clearAuto(){clearInterval(autoStart)}
function setAuto(){autoStart=setInterval("auto(n)", 2000)}
function auto(){
	n++;
	if(n>3)n=0;
	Mea(n);
} 
function sub(){
	n--;
	if(n<0)n=3;
	Mea(n);
} 
setAuto(); 
