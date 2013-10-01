// NHN Flash UI common - Flash Contents
// v0.9 lastUpdate : 2007. 4. 5
var fc_isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var fc_isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var fc_isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;

function checkFlashPlayerVersion(){
	var _version;
	var _e;
	try {
		var _axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.5");
		_version = _axo.GetVariable("$version");
	} catch (_e) {
		_version = -1;
	}
	return _version;
}

function showFlash(_swfURL_,_flashID_,_width_,_height_,_wmode_,_flashVars_,_bgColor_){
	_wmode_ = (_wmode_ == undefined)? "transparent" : _wmode_;
	_bgColor_ = (_bgColor_ == undefined)? "#000000" : _bgColor_;
	
	if(fc_isIE && fc_isWin && !fc_isOpera){
		_object_ ='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+_width_+'" height="'+_height_+'" id="'+_flashID_+'" align="middle">';
		_object_ += '<param name="allowScriptAccess" value="always" />';
		_object_ += '<param name="quality" value="high" />'; 
		_object_ += '<param name="movie" value="'+_swfURL_+'" />';
		_object_ += '<param name="wmode" value="'+_wmode_+'" />'; 
		_object_ += '<param name="bgcolor" value="'+_bgColor_+'" />'; 
		_object_ += '<param name="FlashVars" value="'+_flashVars_+'">';
		_object_ += '</object>';
	}else{
		_object_ = '<embed src="'+_swfURL_+'" quality="high" wmode="'+_wmode_+'" FlashVars="'+_flashVars_+'" bgcolor="'+_bgColor_+'" width="'+_width_+'" height="'+_height_+'" name="'+_flashID_+'" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />'; 
	}
	document.write(_object_);
}

function findFlashObj(_flashID_){
	var tarObj = fc_isIE ? document.all[_flashID_] : document[_flashID_];	
	return tarObj;
}

// for 'Out of memory line at 56' error    - add 2007. 6. 12
function flashExternalCleanup() {
	__flash_unloadHandler = function(){
		externalProbSet = true;
		obj = document.getElementsByTagName('OBJECT');
	  	for (i=0;i<obj.length;i++){
			var theObj = eval(obj[i]);
			theObj.style.display = "none";
	   	for (var prop in theObj){
	    		if (typeof(theObj[prop]) == "function"){
	     			theObj[prop]=null
	    		}
	   	}
	  	}
	}
	if (window.onunload != __flash_unloadHandler){
		__flash_savedUnloadHandler = window.onunload;
		window.onunload = __flash_unloadHandler;
	}
}
window.onbeforeunload=flashExternalCleanup;

	