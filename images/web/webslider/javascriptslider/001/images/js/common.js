// JScript 文件
// highlight nav menu
jQuery(function(){
    var _curl = location.href.toLowerCase();
    var _nav = 'nav01';
    
    jQuery('a[class=selected]').removeClass('selected');
    
    if(_curl.indexOf('yingjiang.aspx')>=0){
        _nav = 'nav02';
    }

    if(_curl.indexOf('haw_mach.aspx')>=0||_curl.indexOf('regesiter.aspx')>=0){
        _nav = 'nav03';
    }
    
    if(_curl.indexOf('mystery.aspx')>=0){
        _nav = 'nav04';
    }
    
    if(_curl.indexOf('award_list.aspx')>=0){
        _nav = 'nav05';
    }

    jQuery('div[class=bottom_menu] > ul > li[class='+_nav+'] > a').addClass('selected');
//    jQuery('div[class=bottom_menu] > ul > li').each(function(i,o){
//        var _url = jQuery(o).find('a').attr('href');
//        
//        if(_curl.lastIndexOf(_url)!=-1){
//             jQuery(o).children().addClass('selected');
//        }
//        
//    });  
});

/*
function slidePic(){
     var j = jQuery.noConflict();
     var pic = '';
     if(__hashtable.length==0){
        for(var l=1;l<21;l++){
            pic ='Upload/template/tpl-' + l.toString() + '.jpg';
            __hashtable.push(pic);
        }
     }
     
     if(!__stopSlide){
           _slide();
                  
           try{
                __timer = window.setInterval(_slide,5000);
           }catch(e)
           {
           }
       }
//     j.getJSON('ajax/ajaxhandler.ashx',function(json){
//       __hashtable = json;
//       
//       if(!__stopSlide){
//           _slide();
//                  
//           try{
//                __timer = window.setInterval(_slide,5000);
//           }catch(e)
//           {
//           }
//       }
//     });   
}

var __i=0;
var __hashtable = [];
var __timer;
var __stopSlide = false;

function _slide(){
    
   var j = jQuery.noConflict();
        
    if(typeof(__hashtable)!='undefined'){
        if(__i>=__hashtable.length){
            __i = 0;
        }
        j('#imgShow').show();
        j('#ctl00_cphContent_imgResult').hide();
        j('#imgShow').fadeOut("slow",function(){j('#imgShow').attr('src',__hashtable[__i]);}).fadeIn('slow',function() {
        
            j('#imgShow').attr('src',__hashtable[__i]);
        });
        __i++; 
    }
}

function stopSlide(){
     var j = jQuery.noConflict();
     
     __stopSlide = true;
    j('#imgShow').hide();
    j('#ctl00_cphContent_imgResult').show();
}
*/

//png;
function setPng(obj) {
 obj.width=obj.height=1;
 obj.className=obj.className.replace(/\bpng\b/i,'');
 obj.style.filter =
 "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
 obj.src=''; 
 return '';
}
 
 //playSwf("134x49_torino.swf",134,49);
function playSwf(fPath,width,height) 
{	
	//alert(fPath,width,height);
	var str;
	str = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" id=\"flashc\" name=\"flashc\" width=\""+width+"\" height=\""+height+"\">\n\r";
	str += "	<param name=\"movie\" value=\""+fPath+"\" />\n\r";
	str += "	<param name=\"quality\" value=\"high\" />\n\r";
    str += "	<param name=\"wmode\" value=\"transparent\" />\n\r";
	str += "	<embed src=\""+fPath+"\" quality=\"high\" wmode=\"transparent\" width=\""+width+"\" height=\""+height+"\" type=\"application/x-shockwave-flash\"></embed>\n\r";
	str += "</object>\n\r";
	//alert(str);
	document.write(str);
}


function ShowMenu01()
{
	$("#gnb1").addClass("current");
}
function HideMenu01()
{
	$("#gnb1").removeClass();
}
function ShowMenu02()
{
	$("#gnb2").addClass("current");
}
function HideMenu02()
{
	$("#gnb2").removeClass();
}
function ShowMenu03()
{
	$("#gnb3").addClass("current");
}
function HideMenu03()
{
	$("#gnb3").removeClass();
}


/**菜单产品切换**/
function ShowProduct(o)
{
	$("#SmallProduct1").hide();
	$("#SmallProduct2").hide();
    $("#SmallProduct3").hide();
	if (o==1)
	{
		$("#SmallProduct1").show();
		$("#SmallProduct2").hide();
        $("#SmallProduct3").hide();
		$("#smenu01").addClass("current");
		$("#smenu02").removeClass();
		$("#smenu03").removeClass();
	}
	if (o==2)
	{
		$("#SmallProduct1").hide();
		$("#SmallProduct2").show();
        $("#SmallProduct3").hide();
		$("#smenu01").removeClass();
		$("#smenu02").addClass("current");
		$("#smenu03").removeClass();
	}
	if (o==3)
	{
		$("#SmallProduct1").hide();
		$("#SmallProduct2").hide();
        $("#SmallProduct3").show();
		$("#smenu01").removeClass();
		$("#smenu02").removeClass();
		$("#smenu03").addClass("current");
	}
}
