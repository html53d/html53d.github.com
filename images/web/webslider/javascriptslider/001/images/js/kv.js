/**kv 切换**/
var tabTimer = null;   
function G(obj){   
    return document.getElementById(obj);   
}   
function switchTab(n){   
    for(var i = 1; i <= 8; i++){   
        G("tab_" + i).className = "";   
        G("tab_con_" + i).style.display = "none";
		G("tab_smallmenu_" + i).style.display = "none"; 
    }   
    G("tab_" + n).className = "on";   
    G("tab_con_" + n).style.display = "block";
	G("tab_smallmenu_" + n).style.display = "block"; 
    autoSwitchTab(n);   
}   
function autoSwitchTab(j){   
    clearTimeout(tabTimer);   
    var j = (j >= 8) ? 1 : j + 1;   
    tabTimer = setTimeout("switchTab(" + j + ")",16000);   
}   
autoSwitchTab(1); 