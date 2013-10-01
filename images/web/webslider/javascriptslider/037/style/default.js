// JavaScript Document

// For PopUp
function popUp(URL, W, H, S) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=" + S + ",location=0,statusbar=0,menubar=0,resizable=0,width=" + W + ",height=" + H +",left = 315,top = 262');");
}

// Popup & resizable
function popUp2(URL, W, H, S) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=" + S + ",location=0,statusbar=0,menubar=0,resizable=1,width=" + W + ",height=" + H +",left = 315,top = 262');");
}


// For Quick Jump Menus
function MM_jumpMenu(targ,selObj,restore){
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
//Check form
function checkrequired(form) {
	var pass = true;
	for(i = 0; i < form.length; i++) {
		var tempobj = form.elements[i];
		if(tempobj.alt == "required" || tempobj.title == "required") {
			if(tempobj.value == '') {
				pass = false;
				break;
			}
		}
	}
	if(!pass) {
		alert("Please enter the required information.");
		tempobj.focus(); // set focus to missing field
		return false;
	}
	else { return true; } 
}

// chat window
function startchat(mypage) {
	var winl = (screen.width-480)/2;
	var wint = (screen.height-320)/2;
	var settings = 'height=320,width=480,top='+wint+',left='+winl+',scrollbars=no,resizable=no';
	toopen=window.open(mypage,'livechatwindow',settings);
	if (parseInt(navigator.appVersion) >= 4) {
		toopen.window.focus();
	}
}

// mouse rollover functions ---------------------------------
function paCreateRollOvers() {
	if(document.getElementById) {
		var paImages = document.getElementsByTagName('IMG');
		var paButtons = document.getElementsByTagName('INPUT');
	} 
	else if(document.all && navigator.userAgent.indexOf('Mac') == -1) {
		var paImages = document.all['mouseovers'].all.tags('IMG');
		var paButtons = document.all['mouseovers'].all.tags('INPUT');
	}
	else return;
	paPreloads = new Object();
	
	for (var i = 0; i < paImages.length; i++) {
		var paImageOffSrc = paImages[i].src + "";
		if(paImageOffSrc.indexOf("_off.") != -1) {
			var paImageOnSrc = paImageOffSrc.replace(/_off\./g, "_on.");
			paPreloads['paImageOff_' + i] = new Image();
			paPreloads['paImageOff_' + i].src = paImageOffSrc;
			paPreloads['paImageOn_' + i] = new Image();
			paPreloads['paImageOn_' + i].src = paImageOnSrc;
			/*paPreloads['paImageOn_' + i].onerror = function(){this.src='/images/blank.gif';}*/
			paImages[i].onmouseover = function(){this.src = this.src.replace(/_off\./g, "_on.");}
			paImages[i].onmouseout = function(){this.src = this.src.replace(/_on\./g, "_off.");}
		}
	} 
	
	for (var i = 0; i < paButtons.length; i++){
		if(paButtons[i].src){
			var paImageOffSrc = paButtons[i].src + "";
			if(paImageOffSrc.indexOf("_off.") != -1) {
				var paImageOnSrc = paImageOffSrc.replace(/_off\./g, "_on.");
				paPreloads['paImageOff_' + i] = new Image();
				paPreloads['paImageOff_' + i].src = paImageOffSrc;
				paPreloads['paImageOn_' + i] = new Image();
				paPreloads['paImageOn_' + i].src = paImageOnSrc;
				/*paPreloads['paImageOn_' + i].onerror = function(){this.src='/images/blank.gif';}*/
				paButtons[i].onmouseover = function(){this.src = this.src.replace(/_off\./g, "_on.");}
				paButtons[i].onmouseout = function(){this.src = this.src.replace(/_on\./g, "_off.");}
			}
		}
	} 
}

window.onload = paCreateRollOvers;
