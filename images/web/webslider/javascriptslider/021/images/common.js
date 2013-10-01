var download_msg_1 = "请安装最新的客户端";
var download_msg_2 = "请安装最新的web客户端";
var download_msg_3 = "下载并安装迅雷后使用本服务，取得最佳视听体验。如果已安装迅雷，请尝试重启Internet Explorer浏览器，若需要进一步帮助，请联系客服。";
var download_msg_4 = "提示：当前还不支持该浏览器，请使用Microsoft Internet Explorer访问！";
var download_msg_5 = "为了取得最佳音乐体验,请升级您的迅雷到最新版本！";

var pl_Found = 0; //0:代表大迅雷 1：代表web迅雷 -1:未找到
var pl_version = 2.1;
var pl_new = false;
var xunlei5_url = 'http://music.xunlei.com/download_xunlei5.htm';
//var xunlei5_url = 'http://down.sandai.net/Thunder5.7.3.389.exe';   // *** player.htm used

var tmp_src_ary = new Array();


/*
try{
	var vodObj= new ActiveXObject("DPClient.Vod");
	pl_Found=0;
	try{
		pl_version = vodObj.Property(1);
	}catch(e){
			
	}	
	vodObj = null;
	var pl_clsid="EEDD6FF9-13DE-496B-9A1C-D78B3215E266";
}catch(e){
	var pl_clsid="2EEDA47E-8D5C-4d7e-B4B6-E16E19218555";
	try{
		var vodObj= new ActiveXObject("DPClient.WebVod");	
		pl_Found=1;
		try{
			pl_version = vodObj.Property(1);
		}catch(e){
			
		}		
		vodObj = null;
	}catch(e){
		pl_Found=-1;
	}			
}

if (pl_version>2.1) {
	pl_new = true;
}*/

var thunder1 = null;
var pl_new = true;
try
{
	thunder1 = new ActiveXObject("ThunderAgent.Agent");
	var pl_clsid="EEDD6FF9-13DE-496B-9A1C-D78B3215E266";
	pl_Found=0;
	thunder1 = null;
}
catch(e)
{
	try
	{
		thunder1 = new ActiveXObject("ThunderAgent.Agent.1");
		var pl_clsid="EEDD6FF9-13DE-496B-9A1C-D78B3215E266";
		pl_Found=0;
		thunder1 = null;
	}
	catch(e)
	{
		try
		{
			thunder1 = new ActiveXObject("ThunderServer.webThunder.1");
			var pl_clsid="2EEDA47E-8D5C-4d7e-B4B6-E16E19218555";
			pl_Found=1;
			thunder1 = null;
		}
		catch(e)
		{
			pl_Found=-1;
			thunder1 = null;
		}
	}
}

function check_xlplay() {
	if (pl_Found == -1)
	{	
		if(navigator.appName != 'Microsoft Internet Explorer') {
			alert(download_msg_4);
			return false;
		}
		
		if(confirm(download_msg_3)) {
			setTimeout("window.location.href=xunlei5_url;", 500);
			//window.location.href=xunlei5_url;
			return false;
		} else {
			setTimeout("window.location.href='http://main.bbs.xunlei.com/main.fcg?club=%D1%B8%C0%D75&id=22219'", 500);
			//window.location.href="http://main.bbs.xunlei.com/main.fcg?club=%D1%B8%C0%D75&id=22219";
			return false;
		}
		
	}
	if (!pl_new) {
		
	}

	return true;

}

function this_download() {
	try {
		if (c_play_id>=0) {
			t_download(c_play_id);
		} else {
		}
	} catch (e) {
					
	}
}

function t_download_single(id, cid) {
	
	
	if(!check_xlplay()) return false;
	
	set_record(chapter_ids[id], 3, 'download');

	if (pl_Found == 0)
	{
		try
		{
			var ThunderAgent = new ActiveXObject("ThunderAgent.Agent");
			ThunderAgent.AddTask5(urls[id][cid], titles[id], "", titles[id], top.location.href, -1, 0, -1,  "", cids[id][cid], "", 1, "", -1);
			ThunderAgent.CommitTasks2(1);
		}
		catch (e)
		{
			
		}
		
	} else {
		try
		{
			var ThunderServer = new ActiveXObject("ThunderServer.WebThunder.1");			
			ThunderServer.CallAddTask2(urls[id][cid], titles[id], top.location.href, 1, cids[id][cid], "", "");
		}
		catch (e)
		{
			
		}
	}
	
}

function t_download(index) {
	
	
	if(!check_xlplay()) return false;
	
	set_record(chapter_ids[index], 3, 'download');

	if (pl_Found == 0)
	{
		try
		{
			var ThunderAgent = new ActiveXObject("ThunderAgent.Agent");
			var no = 0;
			try {
				if (index == c_play_id) {
					no = c_play_cid;
				} else if (cid_useds[index] != "" && cid_useds[index]>0) {
					no = cid_useds[index];
				}
			} catch (e) {
					
			}

			ThunderAgent.AddTask5(urls[index][no], titles[index], "", titles[index], top.location.href, -1, 0, -1,  "", cids[index][no], "", 1, "", -1);
			ThunderAgent.CommitTasks2(1);
		}
		catch (e)
		{
			
		}
		
	} else {
		try
		{
			var ThunderServer = new ActiveXObject("ThunderServer.WebThunder.1");
			var no = 0;
			try {
				if (cid_useds[index] != "" && cid_useds[index]>0)
				{
					no = cid_useds[index];
				}
			} catch (e) {
					
			}
			ThunderServer.CallAddTask2(urls[index][no], titles[index], top.location.href, 1, cids[index][no], "", "");
		}
		catch (e)
		{
			
		}
	}
	
}

function t_download_all(resourceids) {

	if(!check_xlplay()) return false;
	if(resourceids == ''){
	
		alert('很抱歉，当前画质的动画无下载资源！');
		return ;
	}
	
	set_record(anime_id, 1, 'download_all');
	t_downloads(resourceids);
}

function t_download_some(resourceids) {

	if(!check_xlplay()) return false;
	if(resourceids == ''){
	
		alert('很抱歉，当前画质的动画无下载资源！');
		return ;
	}

	var tids = new Array();
	
	tids = resourceids.split(",");
	
	for(i=0;i<tids.length;i++) {
		//alert(chapter_ids[tids[i]]);
		//set_record(chapter_ids[tids[i]], 3, 'download');
	}

	t_downloads(resourceids);
}


function t_downloads(resourceids) {
	
	


	var tids = new Array();
	tids = resourceids.split(",");

	if (pl_Found == 0)
	{
		try
		{
			var ThunderAgent = new ActiveXObject("ThunderAgent.Agent");
			for(i=0;i<tids.length;i++) {
				var index = tids[i];

				if (cids[index] != "")
				{
					ThunderAgent.AddTask5(urls[index], animes[index]+" - "+titles[index], "", animes[index]+" - "+titles[index], top.location.href, -1, 0, -1,  "", cids[index], "", 1, "", -1);
				}
			}
			
			ThunderAgent.CommitTasks2(1);

		}
		catch (e)
		{
			
		}

	} else {
		
		try
		{
			var ThunderServer = new ActiveXObject("ThunderServer.WebThunder.1");
			BatchId = ThunderServer.BeginBatchTask();
			
			for(i=0;i<tids.length;i++) {
				var index = tids[i];
				

				if (cids[index] != "")
				{
					
					ThunderServer.AddTaskToBatch(BatchId, urls[index], animes[index]+" - "+titles[index], top.location.href, cids[index], "");
				}
			}

			ThunderServer.EndBatchTask(BatchId);

		}
		catch (e)
		{
			
		}
	}
}

function set_record(id,t,c) {
	if (id<=0) return;
	 
	tmp_src_ary[id] = new Image();
	var href_t = 'http://tracker.anime.xunlei.com/set_anime_stat.php?id='+id+'&t='+t+'&c='+c+'&cache='+rand(9999999);
	tmp_src_ary[id].src=href_t;			
}

function set_record_preview(id) {
	if (id<=0) return;
	 
	tmp_src_ary[id] = new Image();
	var href_t = 'http://tracker.anime.xunlei.com/set_anime_stat.php?id='+id+'&t=1&c=guide_play&cache='+rand(9999999);
	tmp_src_ary[id].src=href_t;
}


function get_page_list(page, total_page, url){
	
	var return_str = '';
	var p_first = '首页';
	var p_previous = '上一页';
	var p_next = '下一页';
	var p_end = '尾页';
	var previous = '';
	var next = '';
	
	
	page = parseInt(page);
	total_page = parseInt(total_page);

	if (page<1) {
		page = 1;
	}
	if (page>total_page) {
		page = total_page;
	}
	var start_page = page-4;
	var end_page = page+4;
	if (start_page<1) {
		start_page = 1;
		end_page = start_page+7;
	}
	if (end_page>total_page) {
		end_page = total_page;
		start_page = end_page-7;
	}
	if (start_page<1) {
		start_page = 1;
	}

	for(var i=start_page; i<=end_page; i++) {
		if (i == page) {
			return_str += "<a href=\"javascript:;\" class=\"currA\">"+i+"</a> ";
		} else {
			return_str += "<a href='"+url+"?page="+i+"'>"+i+"</a> ";
		}
	}

	if (page>2)
	{
		//previous += "<a href='"+url+"?page=1'>"+p_first+"</a> ";
	}
	if (page>1)
	{
		var select_page = page-1;
		previous += "<a href='"+url+"?page="+select_page+"' class=\"prePage\">"+p_previous+"</a> ";
	}

	if (page<total_page)
	{
		var select_page = page+1;
		next += "<a href='"+url+"?page="+select_page+"' class=\"nextPage\">"+p_next+"</a> ";
	}
	if (page<total_page-1)
	{
		//next += "<a href='"+url+"?page="+total_page+"'>"+p_end+"</a>";
	}



	document.write(previous+return_str+next);
}

function rand(num){
	return Math.floor(Math.random()*num)+1; 
}

function doselectAll(theBox){
  	xState=true;
  	elm=theBox.form.elements;
	count = 0;
  	for(i=0;i<elm.length;i++) {
   		if(elm[i].type=="checkbox" && elm[i].disabled == '') {
			elm[i].checked=xState;
			count++;
		}
	}
	if(count == 0)alert('很抱歉！当前画质的动画没有可下载资源！');
}

function undoselectAll(theBox){
  	xState=false;
  	elm=theBox.form.elements;
	
  	for(i=0;i<elm.length;i++) {
   		if(elm[i].type=="checkbox") {
			elm[i].checked=xState;
		}
	}
}

function readCookie(name) {
	var cookieValue = "";
	var search = name + "=";
	if(document.cookie.length > 0) 	{ 
		offset = document.cookie.indexOf(search);
		if (offset != -1) { 
			offset += search.length;
			end = document.cookie.indexOf(";", offset);
			if (end == -1) end = document.cookie.length;
			cookieValue = unescape(document.cookie.substring(offset, end))
		}
	}
	return cookieValue;
}
// Example:
// writeCookie("myCookie", "my name", 24);
// Stores the string "my name" in the cookie "myCookie" which expires after 24 hours.
function writeCookie(name, value, hours) {
	var expire = "";
	if(hours != null) {
		expire = new Date((new Date()).getTime() + hours * 3600000);
		expire = "; expires=" + expire.toGMTString() + "; path=/";
	}
	document.cookie = name + "=" + escape(value) + expire;
}



if (!$) {
	var $ = function (tagId){
		return document.getElementById(tagId);
	}
}

function Ajax(url,pars,method,obj,asynchronous)  {
	var xmlHttp;  
	if(window.ActiveXObject){  
		try {  
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");  
		}  
		catch(e) {  
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");  
		} 
	} else if(window.XMLHttpRequest) {  
		xmlHttp = new XMLHttpRequest();  
	}    
	
	if(method.toLowerCase() == "get") {  
		url = url+"?"+pars;  
		xmlHttp.open("GET",url,asynchronous);  
		xmlHttp.send(null);  
	}  else  {  
		xmlHttp.open("POST",url,asynchronous);
		xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");  
		xmlHttp.send(pars);  
	}
	
	xmlHttp.onreadystatechange = function()  {  
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200)  {   
			obj.innerHTML = xmlHttp.responseText;
		}  
	}
}

// 执行搜索
function doSearch(form) {
	type = document.getElementById('type');
	keyword = document.getElementById('keyword');
	if (keyword.value == '') {
		alert('请输入关键字！');
		keyword.focus();
		return false;
	} else {
		if (keyword.value.replace(/[ ]+/g, '').length) {
			if (keyword.value.replace(/[ ]+/g, '').length < 2 && canSearch) {
				alert('关键字长度必须大于1，请重新输入！');
				keyword.focus();
				return false;
			} else {
				form.action = '/search/' + encodeURIComponent(keyword.value) + ',' + type.value;
				form.submit();
			}
		} else {
			alert('您输入的关键字有误，请重新输入！');
			keyword.focus();
			return false;
		}
	}
	if (!canSearch) {
		return false;
	}
}
function doSearchNav(form) {
	type = document.getElementById('typeNav');
	keyword = document.getElementById('keywordNav');
	keyword.value = keyword.value.replace('动画搜索', '');
	if (keyword.value == '') {
		alert('请输入关键字！');
		keyword.focus();
		return false;
	} else {
		if (keyword.value.replace(/[ ]+/g, '').length) {
			if (keyword.value.replace(/[ ]+/g, '').length < 2 && canSearch) {
				alert('关键字长度必须大于1，请重新输入！');
				keyword.focus();
				return false;
			} else {
				if (type.value != 4) {
					form.action = '/search/' + encodeURIComponent(keyword.value) + ',' + type.value;
				} else {
					form.action = '/booksearch/' + encodeURIComponent(keyword.value) + ',' + type.value;
				}
				form.submit();
			}
		} else {
			alert('您输入的关键字有误，请重新输入！');
			keyword.focus();
			return false;
		}
	}
	if (!canSearch) {
		return false;
	}
}
function doBookSearch(form) {
	type = document.getElementById('type');
	keyword = document.getElementById('keyword');
	if (keyword.value == '') {
		alert('请输入关键字！');
		keyword.focus();
		return false;
	} else {
		if (keyword.value.replace(/[ ]+/g, '').length) {
			if (keyword.value.replace(/[ ]+/g, '').length < 2 && canSearch) {
				alert('关键字长度必须大于1，请重新输入！');
				keyword.focus();
				return false;
			} else {
				form.action = '/booksearch/' + encodeURIComponent(keyword.value) + ',' + type.value;
				form.submit();
			}
		} else {
			alert('您输入的关键字有误，请重新输入！');
			keyword.focus();
			return false;
		}
	}
	if (!canSearch) {
		return false;
	}
}
function doBookSearchNav(form) {
	type = document.getElementById('typeNav');
	keyword = document.getElementById('keywordNav');
	keyword.value = keyword.value.replace('漫画搜索', '');
	if (keyword.value == '') {
		alert('请输入关键字！');
		keyword.focus();
		return false;
	} else {
		if (keyword.value.replace(/[ ]+/g, '').length) {
			if (keyword.value.replace(/[ ]+/g, '').length < 2 && canSearch) {
				alert('关键字长度必须大于1，请重新输入！');
				keyword.focus();
				return false;
			} else {
				form.action = '/booksearch/' + encodeURIComponent(keyword.value) + ',' + type.value;
				form.submit();
			}
		} else {
			alert('您输入的关键字有误，请重新输入！');
			keyword.focus();
			return false;
		}
	}
	if (!canSearch) {
		return false;
	}
}

// 执行翻页
function doPage(obj_name) {
	page_no = document.getElementById(obj_name);
	if (page_no.value == '') {
		alert('请输入页码！');
		page_no.focus();
	} else {
		if (!page_no.value.replace(/[0-9]+/g, '').length) {
			url = document.URL.replace(/\/page,[0-9]+/g, '');
			url += '/page,' + page_no.value;
			location.href = url;
		} else {
			alert('您输入的页码有误，请重新输入！');
			page_no.focus();
		}
	}
}

// 折叠人物简介
function switchDetail(button_obj, short_obj_name, long_obj_name) {
	p_short = document.getElementById(short_obj_name);
	p_long = document.getElementById(long_obj_name);
	
	if (p_long.style.display == 'none') {
		p_short.style.display = 'none';
		p_long.style.display = 'block';
		button_obj.innerHTML = '[收起全文]';
	} else {
		p_short.style.display = 'block';
		p_long.style.display = 'none';
		button_obj.innerHTML = '[查看全文]';
	}
}

// 切换分类列表中热门TV动画推荐
var clip_power = 1;
var clip = 0;
function switchSortTvRecommend(clip_i, total, power) {
	if (total) {
		for (i=0;i<total;i++) {
			document.getElementById('clip_' + i).className = '';
			document.getElementById('tv_recommend_' + i).style.display = 'none';
		}
		document.getElementById('clip_' + clip_i).className = 'currA';
		document.getElementById('tv_recommend_' + clip_i).style.display = 'block';
		clip = clip_i;
	}
	if (!power) {
		stopSwitchSortTvRecommend();
	}
}
function autoSwitchSortTvRecommend() {
	if (clip_power) {
		switchSortTvRecommend(clip, clip_total, 1);
		if (clip < clip_total - 1) {
			clip++;
		} else {
			clip = 0;
		}
	}
}
function stopSwitchSortTvRecommend() {
	clip_power = 0;
}
function startSwitchSortTvRecommend() {
	clip_power = 1;
}

function user_status(){
	var username=readCookie('usrname');
	if(username){
		$('usrname_c').innerHTML=username;
		$('login_c').style.display='none';
		$('register_c').style.display='none';
		$('hello_c').style.display='';
		$('collection_c').style.display='';
		$('collect_link').href='http://user.movie.xunlei.com/'+username+'/anime/all';
		
	}
}

function user_logout(){
	writeCookieWithDomain('usrname','',0,'xunlei.com');
	writeCookieWithDomain('sessionid','',0,'xunlei.com');
	writeCookieWithDomain('salt','',0,'xunlei.com');
	$('usrname_c').innerHTML='';
	$('login_c').style.display='';
	$('register_c').style.display='';
	$('hello_c').style.display='none';
	$('collection_c').style.display='none';
}

function writeCookieWithDomain(name, value, hours,domain) {
	var expire = "";
	if(hours != null) {
		expire = new Date((new Date()).getTime() + hours * 3600000);
		expire = "; expires=" + expire.toGMTString() + "; path=/";
	}
	document.cookie = name + "=" + escape(value)+';domain='+domain +';'+ expire;
}
