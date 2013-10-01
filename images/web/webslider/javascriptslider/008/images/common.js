//****************************** ward frame start
if ( top.location !== self.location ) {
top.location=self.location;
}

//****************************** comment ajexa start
var flag=1;
function sendPostRequest()
{    
        var msg=document.getElementById("comment_visits");
		if(flag)
		{
		msg.innerHTML = '用户名:&nbsp;<INPUT id="shownum1" size=16 name=username class="name_input"><br/>验证码:&nbsp;<INPUT name=imgCode maxlength=4 class="img_code"><br/><img src="http://se.arting365.com/post.php" align="absmiddle" class="pic_code"><br/><input name="botton" type="submit" value="发表评论" onClick="javascript:{ return checkInputValid();}"  class="comement_button">';
		flag=0;
		}
}

//****************************** header_menu_news start
function header_menu_news()
    {
		document.write("<li><a href=\"http://www.arting365.com\" target=\"_blank\">首页</a></li>");
		document.write("<li><a href=\"http://opus.arting365.com\" target=\"_blank\">精品画廊</a></li>");
		document.write("<li><a href=\"http://www.arting365.com/media/\" target=\"_blank\">产业</a></li>");
		document.write("<li><a href=\"http://pk.arting365.com\" target=\"_blank\">创意擂台</a></li>");
		document.write("<li><a href=\"http://zj.arting365.com\" target=\"_blank\">大赛征集</a></li>");
		document.write("<li><a href=\"http://hr.arting365.com\" target=\"_blank\">创意人才</a></li>");
		document.write("<li><a href=\"http://www.21sea.com\" target=\"_blank\">教育</a></li>");
		document.write("<li><a href=\"http://zt.arting365.com\" target=\"_blank\">专题</a></li>");
		document.write("<li><a href=\"http://pic.arting365.com\" target=\"_blank\">图库</a></li>");
		document.write("<li><a href=\"http://Arttalk.arting365.com/\" target=\"_blank\">Arttalk</a></li>");
		document.write("<li><a href=\"http://blog.arting365.com\" target=\"_blank\">我的空间</a></li>");
		document.write("<li><a href=\"http://bbs.arting365.com\" target=\"_blank\">我的社区</a></li>");
		document.write("<li><a href=\"http://photo.arting365.com\" target=\"_blank\">摄影</a></li>");
		document.write("<li><a href=\"http://comic.arting365.com\" target=\"_blank\">动漫</a></li>");
		document.write("<li><a href=\"http://shop.arting365.com\" target=\"_blank\">数码商城</a></li>");
		document.write("<li><a href=\"http://search.arting365.com\" target=\"_blank\">搜索</a></li>");
		document.write("<li><a href=\"http://passport.arting365.com\" target=\"_blank\">用户中心</a></li>");
    }

//****************************** footer_menu_news start
function footer_menu_news()
    {
        document.write("<p>");
		document.write("<A href=\"http://zh.arting365.com/index.html\" target=_\"blank\">关于我们</A> |");
		document.write("<A href=\"http://zh.arting365.com/contact.html\" target=_\"blank\">联系我们</A> |");
		document.write("<a href=\"http://zh.arting365.com/navigation.html\" target=_\"blank\">站点导航</a> |");
		document.write("<a href=\"http://zh.arting365.com/links.html\" target=_\"blank\">合作伙伴</a> | ");
		document.write("<A href=\"http://zh.arting365.com/service.html\" target=_\"blank\">广告服务</A> |");
		document.write("<A href=\"http://zh.arting365.com/copyright.html\" target=_\"blank\">版权申明</A> | ");
		document.write("<A href=\"http://dir.arting365.com/index.html\" target=_\"blank\">网站地图</A>");
		document.write("</p>");
		document.write("<p>");
		document.write("<a href=\"http://www.miibeian.gov.cn\" target=_\"blank\">沪ICP备05004653号</a> &copy; 2001-2008");
		document.write("<a href=\"http://www.arting365.com\"  target=_\"blank\">Arting365.Com</a>, All rights reserved");
		document.write("</p>");
    }

//******************************************** right_bill contor start ********************************************
//****************************** right_bill start
function right_bill_news()
    {   
		//document.write("<a href=\"http://www.21sea.com/rule/2008-05-13/1210639868d190526.html\" target=\"_balnk\"><img src=\"http://www.arting365.com/bill/img/ch_opus.gif\" border=\"0\"></a>");
    }
	
//****************************** top_bill start
function top_bill_news()
    {
		document.write("<div style=\"width:600px; height:50px; overflow:hedden; \" /></div>");
    }

//****************************** sort_bill start
function sort_bill_news()
    {   
		right_bill_news()
	}

//******************************************** right_bill contor end ********************************************	

//******************************Big Tab function start************** //
function TabMenu(name,obj,n)
{
	for(i=1;i<=n;i++)
	{
		eval("document.getElementById('"+name+i+"').className=''");
		eval("document.getElementById('display_"+name+'_'+i+"').style.display='none'");
		
	}
	if( obj == '1') {
		eval("document.getElementById('"+name+obj+"').className='li_'+name+'_header_over'");
	}
	else {
		eval("document.getElementById('"+name+obj+"').className='li_'+name+'_over'");
		eval("document.getElementById('"+name+1+"').className='li_menu_header'");
	}
	eval("document.getElementById('display_"+name+'_'+obj+"').style.display=''");
}

//******************************Mini Tab function start************** //
function tabsMenu(name,obj,n)
{
	for(i=1;i<=n;i++)
	{
		eval("document.getElementById('"+name+i+"').className=''");
		eval("document.getElementById('display_"+name+'_'+i+"').style.display='none'");
	}
		eval("document.getElementById('"+name+obj+"').className='columnBarOver'");
		eval("document.getElementById('display_"+name+'_'+obj+"').style.display=''");
}
//******************************passport Tab function start************** //
function passportTas(name,obj,n)
{
	for(i=1;i<=n;i++)
	{
		eval("document.getElementById('"+name+i+"').className=''");
		eval("document.getElementById('display_"+name+'_'+i+"').style.display='none'");
	}
		eval("document.getElementById('"+name+obj+"').className='passportBarOver'");
		eval("document.getElementById('display_"+name+'_'+obj+"').style.display=''");
		eval("document.getElementById('display_"+name+"_bottom').style.display=''");
}

/*

function passport_C_Tas(name,obj,n)
{
	for(i=1;i<=n;i++)
	{
		eval("document.getElementById('"+name+i+"').className=''");
		eval("document.getElementById('display_"+name+"_bottom').style.display=''");
		eval("document.getElementById('display_"+name+'_'+i+"').style.display='none'");
	}
		eval("document.getElementById('display_"+name+"_bottom').style.display='none'");
}
*/

/******************************* Function of slide code *******************************/

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr;
  for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++){
	  x.src=x.oSrc;
  }
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function swapLayer(sById1, sById2){
	var div1	= document.getElementById(sById1);
	var div2	= document.getElementById(sById2);
	if(div1 == null || div2 == null) return;
	if(div1.style.display == 'none'){
		div1.style.display = "block";
		div2.style.display = "none";
	}else{
		div1.style.display = "none";
		div2.style.display = "block";
	}
}

function xwzImgRollOver(oImg, bType, sSrc){
	if(bType == true){
		if( oImg.getAttribute('xwzAlreadySrc') == null) oImg.setAttribute('xwzAlreadySrc', oImg.src);
		oImg.src = sSrc;
	}else{
		if( oImg.getAttribute('xwzAlreadySrc') != null) oImg.src = oImg.getAttribute('xwzAlreadySrc');
	}
}

function xwzRollingImageTrans(imageName, thumbnailName, eventName, winName){
	this.Index = 0;
	this.ListItem = new Array(0);
	this.Name = imageName;
	this.Thumbnail = thumbnailName;
	this.tmRotate = null;
	this.nInterval = 4500;
	this.eventName = eventName;
	this.winTarget = winName;
	
	if(window.xwzRollObject == null) window.xwzRollObject = new Array(0);
	window.xwzRollObject[this.Name] = this;

	this.install = function(){
		window.document.images[this.Name].onclick=this.goLink;
		if(this.ListItem.length == 0) return;
		this.tmRotate = setTimeout("window.xwzRollObject['" + this.Name + "'].rotateTrans()" , this.nInterval);
		var icons = document.getElementsByName(this.Thumbnail);
		for(var i = 0; i < icons.length; i++){
			if(this.eventName == 'over') icons[i].onmouseover=new Function("window.xwzRollObject['"+this.Name+"'].alterImage(" + i + ")");
			else icons[i].onclick=new Function("window.xwzRollObject['"+this.Name+"'].alterImage(" + i + ")");
		}
	}

	this.addItem = function(Link, ImgSrc, Icon1, Icon2 ){
		var itmX = {Link : "", ImgSrc : "", DefIcon : "", OvrIcon : ""};
		itmX.Link = Link;
		itmX.ImgSrc = ImgSrc;
		itmX.DefIcon = Icon1;
		itmX.OvrIcon = Icon2;
		this.ListItem[this.ListItem.length] = itmX;
	}

	this.alterImage = function(index){
		var icons = document.getElementsByName(this.Thumbnail);
		if(this.Index == index) return;
		if(this.ListItem[this.Index].DefIcon !="") icons[this.Index].src = this.ListItem[this.Index].DefIcon;

		this.Index = index;
		this.imgTrans();
		clearTimeout(this.tmRotate);
		this.tmRotate = null;
		this.tmRotate = setTimeout("window.xwzRollObject['" + this.Name + "'].rotateTrans()" , this.nInterval);

	}


	this.goLink = function(){
		var name = this.getAttribute('name');
		var xwzRoll = window.xwzRollObject[name];
		clearTimeout(xwzRoll.tmRotate);
		xwzRoll.tmRotate = null;
        xwzRoll.winTarget="_blank"; //定义是否弹出新页面
		if(xwzRoll.winTarget == '' || xwzRoll.winTarget == null){
			window.location.href=xwzRoll.ListItem[xwzRoll.Index].Link;
		}else{
			window.open(xwzRoll.ListItem[xwzRoll.Index].Link, xwzRoll.winTarget);
		}
	}


	this.rotateTrans = function(){
		var icons = document.getElementsByName(this.Thumbnail);
		var itmX = this.ListItem[this.Index];
		if(itmX.DefIcon !="") icons[this.Index].src = itmX.DefIcon;

		this.Index +=1;
		if(this.Index >= this.ListItem.length) this.Index = 0;

		this.imgTrans();
		
		clearTimeout(this.tmRotate);
		this.tmRotate = null;
		this.tmRotate = setTimeout("window.xwzRollObject['" + this.Name + "'].rotateTrans()" , this.nInterval);
	}


	this.imgTrans = function(){
		var icons = document.getElementsByName(this.Thumbnail);
		var itmX = this.ListItem[this.Index];
		if(itmX.OvrIcon !=null  && itmX.OvrIcon !="") icons[this.Index].src = itmX.OvrIcon;
		try{
			document.images[this.Name].filters[0].apply();
			document.images[this.Name].src = itmX.ImgSrc;
			document.images[this.Name].filters[0].play();
		}catch(e){
			document.images[this.Name].src = itmX.ImgSrc;
		}
	}
}


function xwzRollingMarqTrans(Name, eventName){
	this.Name = Name;
	this.Index = 0;
	this.ListItem = new Array(0);

	this.tmRotate = null;
	this.nInterval = 4500;
	this.eventName = eventName;

	if(window.xwzMarqObject == null) window.xwzMarqObject = new Array(0);
	window.xwzMarqObject[this.Name] = this;


	this.install = function(){
		if(this.ListItem.length == 0) return;
		this.tmRotate = setTimeout("window.xwzMarqObject['" + this.Name + "'].rotateTrans()" , this.nInterval);
		for(var i = 0; i < this.ListItem.length; i++){
			if(this.eventName == 'over') this.ListItem[i].Img.onmouseover=new Function("window.xwzMarqObject['"+this.Name+"'].alterTrans(" + i + ")");
			else this.ListItem[i].Img.onclick=new Function("window.xwzMarqObject['"+this.Name+"'].alterTrans(" + i + ")");
		}
	}

	this.addItem = function(targetObj, targetImg, Icon1, Icon2 ){
		var itmX = {Objects : null, Imgs : null, DefaultSrc : "",OverSrc : ""};
		itmX.Object = targetObj;
		itmX.Img = targetImg;
		itmX.DefaultSrc = Icon1;
		itmX.OverSrc = Icon2;
		this.ListItem[this.ListItem.length] = itmX;
	}


	this.alterTrans = function(index){
		if(this.Index == index) return;
		var itmX = this.ListItem[this.Index];
		if(itmX.DefaultSrc !="") itmX.Img.src = itmX.DefaultSrc;
		this.Index = index;
		this.objTrans();
		clearTimeout(this.tmRotate);
		this.tmRotate = null;
		this.tmRotate = setTimeout("window.xwzMarqObject['" + this.Name + "'].rotateTrans()" , this.nInterval);
	}

	this.rotateTrans = function(){
		var itmX = this.ListItem[this.Index];
		if(itmX.DefaultSrc !="") itmX.Img.src = itmX.DefaultSrc;

		this.Index +=1;
		if(this.Index >= this.ListItem.length) this.Index = 0;

		this.objTrans();
		
		clearTimeout(this.tmRotate);
		this.tmRotate = null;
		this.tmRotate = setTimeout("window.xwzMarqObject['" + this.Name + "'].rotateTrans()" , this.nInterval);
	}


	this.objTrans = function(){
		var itmX = this.ListItem[this.Index];
		if(itmX.Img !=null  && itmX.OverSrc !="") itmX.Img.src = itmX.OverSrc;
		for(var i =0; i <  this.ListItem.length; i++) this.ListItem[i].Object.style.display = 'none';
		try{
			itmX.Object.filters[0].apply();
			itmX.Object.style.display='';
			itmX.Object.filters[0].play();
		}catch(e){
			itmX.Object.style.display='';
		}
	}
}

function verticalWheel(id, height, nSec ){
	if(window.xwzWheelMarq == null) window.xwzWheelMarq = new Array(0);
	xwzWheelMarq[id]  = {
		install : function(id, height, nSec){
			this.id = id;
			this.div = document.getElementById('ID_DIV_KEYWORD');
			this.table = document.getElementById('ID_TABLE_KEYWORD');
			if(this.div == null) return;
			//this.div.style.cssText = "height:"+height+";position:relative;cursor:pointer;";
			this.div.style.cssText = "height:"+height+";overflow:hidden;position:relative;cursor:pointer;clip:rect(0 auto "+this.height+" 0);left:0;top:0";
			this.div.parentNode.style.position='relative'
			this.div.parentNode.onmouseover=function(){xwzWheelMarq[id].table.style.visibility ='visible';	xwzWheelMarq[id].nPause=true;}
			this.div.parentNode.onmouseout= function(){xwzWheelMarq[id].table.style.visibility ='hidden';xwzWheelMarq[id].nPause=false;}	

			this.index =0;
			this.height = height;
			this.items = new Array(0);
			this.tmID = null;
			this.nPause = false;
			this.nSec = nSec;
			var rows =this.table.tBodies[0].rows;
			for(var i = 0; i < rows.length; i++){
				this.items[i] = document.createElement("DIV");
				this.items[i].innerHTML=rows[i].innerHTML;
				this.items[i].style.padding="3";
				this.items[i].style.width="100%";
				this.items[i].style.height=this.height ;
				this.items[i].style.position="absolute";
				this.items[i].style.top = this.height*i;
				this.div.appendChild(this.items[i]);

				rows[i].cells[0].style.cssText="padding-left:5px;border-bottom:#CACACA 1px dotted;";
				rows[i].onmouseover=function(){this.style.backgroundColor="#FDF1F0";}
				rows[i].onmouseout=function(){this.style.backgroundColor="";}
				if(i >= rows.length -1){rows[i].cells[0].style.border="";}
			}
		},
		doWheel : function(){
			var itmN = this.items[this.index];
			var nSleep= 50;
			var nIndex= this.index+1 >=  this.items.length ? 0 :  this.index+1;
			clearTimeout(this.tmID); this.tmID = null;
			if(this.nPause != true){
				for(var i = 0; i < this.items.length; i++){
					this.items[i].style.top = parseInt(this.items[i].style.top)-1;
				}
				if(parseInt(itmN.style.top) <= this.height*-1){
					itmN.style.top = this.height*(this.items.length-1);
					this.index = this.index+1 >=  this.items.length ? 0 :  this.index+1;
					nSleep= this.nSec;
				}
			}else{
				if(parseInt(itmN.style.top) < (this.height/2)*-1){
					itmN.style.top = this.height*(this.items.length-1);
					this.index = this.index+1 >=  this.items.length ? 0 :  this.index+1;
				}

				for(var i = 0; i < this.items.length; i++){
					this.items[i].style.top =  this.height * (  (this.items.length -  this.index + i ) % this.items.length );
				}
				nSleep = 10;
			}
			
			this.tmID = setTimeout("xwzWheelMarq['" + this.id + "'].doWheel()", nSleep);
		}
	}

	xwzWheelMarq[id].install(id, height, nSec);
	xwzWheelMarq[id].tmID = setTimeout("xwzWheelMarq['" +id + "'].doWheel()", nSec);

}

/******************************* slide code end*******************************/

/******************************* Ajax in *******************************/
var showsid;
function getContent(sid,hid)
{
	showsid = sid;
	showhid = hid;
	sendHomePostRequest();
}

function createRequest(){
        if(typeof XMLHttpRequest!="undefined")        {
                return new XMLHttpRequest();
        }else if(typeof ActiveXObject!="undefined"){
                var xmlHttp_ver  = false;
                var xmlHttp_vers = ["MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp","Microsoft.XmlHttp"];
                if(!xmlHttp_ver){
                        for(var i=0;i<xmlHttp_vers.length;i++){
                                try{
                                        new ActiveXObject(xmlHttp_vers[i]);
                                        xmlHttp_ver = xmlHttp_vers[i];
                                        break;
                                }catch(oError){;}
                        }
                }
                if(xmlHttp_ver){
                        return new ActiveXObject(xmlHttp_ver);
                }else{
                        throw new Error("Could not create XML HTTP Request.");
                }
        }else{
                throw new Error("Your browser doesn't support an XML HTTP Request.");
        }
}

var xmlHttp;

function sendHomePostRequest()
{    
		xmlHttp = createRequest();
		var url = "./ajax.php?action=update&showsid="+showsid;
        xmlHttp.open("post", url, true);
		var queryString = "";
        xmlHttp.onreadystatechange = showData;
        xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");		
		xmlHttp.send(queryString);
}

function showData()
{  
		var msg=document.getElementById(showsid);
		var url = "./ajax.php?action=update&showsid="+showsid;
		var MTL=Math.ceil((showhid-32)/2-2);
        if(xmlHttp.readyState==4)
        { 
                if(xmlHttp.status==200)
                { 
						msg.innerHTML =  "<IFRAME SRC="+url+" id="+showsid+" NAME="+showsid+" WIDTH=100% HEIGHT="+showhid+" NORESIZE SCROLLING=No FRAMEBORDER=0 MARGINHEIGHT=0 MARGINWIDTH=0  style=\"margin:0px;padding:0px;\"></IFRAME>";
                }
        }
        else
        {
                switch(xmlHttp.readyState)
                {
                case 0:
						msg.innerHTML="<div style=\"padding-top:"+MTL+"px;text-align:center;font-size:12px;\"><img src=\"./images/loading.gif\" align=\"absmiddle\" style=\"margin-right:10px\">数据未初始化...</div>";
                        break;
                case 1:
						msg.innerHTML="<div style=\"padding-top:"+MTL+"px;text-align:center;font-size:12px;\"><img src=\"/images/loading.gif\" align=\"absmiddle\" style=\"margin-right:10px\">数据加载中...</div>";
                        break;
                case 2:
						msg.innerHTML="<div style=\"padding-top:"+MTL+"px;text-align:center;font-size:12px;\"><img src=\"/images/loading.gif\" align=\"absmiddle\" style=\"margin-right:10px\">数据连接完成...</div>";
                        break;
                case 3:
						msg.innerHTML="<div style=\"padding-top:"+MTL+"px;text-align:center;font-size:12px;\"><img src=\"/images/loading.gif\" align=\"absmiddle\" style=\"margin-right:10px\">正在交换数据...</div>";
                        break;
                default:
                        break;
                }
        }
}
/******************************* Ajax out *******************************/