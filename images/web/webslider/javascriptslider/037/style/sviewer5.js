// easing function: expo-, bounce-, elas-, back-
jQuery(function(){
   jQuery("div.svw2").prepend("<img src='img/loadingAnimation.gif' class='ldrgif' alt='loading...'/ >"); 
});
var j = 0;
jQuery.fn.slideView = function(settings) {
	 settings = jQuery.extend({
     easeFunc: "easeInOutExpo",
     easeTime: 750,
	 autoPlay:7000,
     toolTip: false
  }, settings);
	return this.each(function(){
		var container = jQuery(this);
		//container.find("img.ldrgif").remove(); 
		container.find("img.ldrgif").fadeOut(); 
		// next - prev button
		container.prepend("<div id='navright' style='display:block'><a href='javascript:void(0);'><img src='images/arright_off.png' alt='Next Photo' border=0 /></a></div><div id='navleft' style='display:block'><a href='javascript:void(0);'><img src='images/arrleft_off.png' alt='Prev Photo' border=0 /></a></div>"); 
		//container.find("#navright").show().end().find("#navleft").show(); 
		container.removeClass("svw2").addClass("stripViewer");		
		var pictWidth = container.find("li").find("img").width();
		var pictHeight = container.find("li").find("img").height();
		var pictEls = container.find("li").size();		
		var stripViewerWidth = pictWidth*pictEls;
		container.find("ul").css("width" , stripViewerWidth); 
		container.css("width" , pictWidth);
		container.css("height" , pictHeight);
		container.each(function(i) {

			var intvID = 0; // set interval
			var cntClick = 0;  // nth image

			jQuery(this).append("<div class='stripTransmitter' id='stripTransmitter" + j + "'><ul><\/ul><\/div>");
			
			// qtn
			jQuery("div#stripTransmitter" + j + " ul").append("<li style='width:60px' class='navb'><a class='navrs1' href='#'>Prev<\/a><\/li>");	

				jQuery(this).find("li").not($(".navb")).each(function(n) {
						jQuery("div#stripTransmitter" + j + " ul").append("<li><a class='navs' title='" + jQuery(this).find("img").attr("alt") + "' href='#'>"+(n+1)+"<\/a><\/li>");												
				});

			// qtn
			jQuery("div#stripTransmitter" + j + " ul").append("<li style='width:60px' class='navb'><a class='navrs2' href='#'>Next<\/a><\/li>");	
			
			// prev - no used no implemented
			jQuery("div#stripTransmitter" + j + " a.navrs1").click( function(){
					clearInterval(intvID);
					var pos1 = jQuery("a.navrs1").parent().parent().parent().prev("ul").css("left");
					pos1 = pos1.substring(0,pos1.indexOf("px"));
					pos1 = (pos1 == 0) ? -stripViewerWidth : pos1;
					var cnt = (pos1*1) + pictWidth;
					jQuery("a.navs").removeClass("current").end().find("a.navs:eq("+Math.ceil(cnt/(-960))+")").addClass("current");
					jQuery("a.navrs1").parent().parent().parent().prev("ul").animate({ left: cnt}, settings.easeTime, settings.easeFunc);
					return false;
			});
					
			// next - no used no implemented
			jQuery("div#stripTransmitter" + j + " a.navrs2").click( function(){
					clearInterval(intvID);
					var pos1 = jQuery("a.navrs2").parent().parent().parent().prev("ul").css("left");
					pos1 = pos1.substring(0,pos1.indexOf("px"));
					var cnt = (pos1 - pictWidth)%stripViewerWidth;
					jQuery("a.navs").removeClass("current").end().find("a.navs:eq("+Math.ceil(cnt/(-960))+")").addClass("current");
					jQuery("a.navrs2").parent().parent().parent().prev("ul").animate({ left: cnt}, settings.easeTime, settings.easeFunc);
					return false;
			});

			// next button - dir: left -> right, loop back to the first one at the end of loop
			jQuery("div#navright").click( function(){
					clearInterval(intvID);
					cntClick = cntClick +1;	
					var cnt = - (pictWidth*(cntClick%pictEls))%stripViewerWidth;
					jQuery("a.navs").removeClass("current").end().find("a.navs:eq("+Math.abs(cntClick)+")").addClass("current");
					jQuery("a.navrs2").parent().parent().parent().prev("ul").animate({ left: cnt}, settings.easeTime, settings.easeFunc);	
					// debug jQuery("#body").prepend("["+cntClick+" "+cnt+"]"); 
					return false;
			});
			// prev button: dir: right -> left
			jQuery("div#navleft").click( function(){
					clearInterval(intvID);
					cntClick = (cntClick==0) ? (pictEls - 1) :  (cntClick - 1);	
					var cnt =  - (pictWidth*(cntClick%pictEls))%stripViewerWidth;
					jQuery("a.navs").removeClass("current").end().find("a.navs:eq("+Math.abs(cntClick)+")").addClass("current");
					jQuery("a.navrs1").parent().parent().parent().prev("ul").animate({ left: cnt}, settings.easeTime, settings.easeFunc);
	
					// debug jQuery("#body").prepend("["+cntClick+" "+cnt+"]"); 
					return false;
			});

			// set interval - main dir: left -> right
			intvID = setInterval(function(){		
				cntClick = cntClick +1;	
				var cnt = - (pictWidth*(cntClick%pictEls))%stripViewerWidth;
				jQuery("a.navs").removeClass("current").end().find("a.navs:eq("+Math.abs(cntClick)+")").addClass("current");
				jQuery("a.navrs2").parent().parent().parent().prev("ul").animate({ left: cnt}, settings.easeTime, settings.easeFunc);
				// debug jQuery("#body").prepend("["+cntClick+" "+cnt+"]"); 
				},settings.autoPlay);

			/**/
			jQuery("div#stripTransmitter" + j + " a.navs").each(function(z) {
				
				jQuery(this).bind("click", function(){		 
					clearInterval(intvID);
					jQuery(this).addClass("current").parent().parent().find("a.navs").not(jQuery(this)).removeClass("current"); // wow!
					var cnt = - (pictWidth*z);
					jQuery(this).parent().parent().parent().prev("ul").animate({ left: cnt}, settings.easeTime, settings.easeFunc);
					return false;
				   });
				});  
		
			jQuery("div#stripTransmitter" + j).css("width" , pictWidth);
			jQuery("div#stripTransmitter" + j + " a.navs:eq(0)").addClass("current");

		if(settings.toolTip){
					container.next(".stripTransmitter ul").find("a.navs").Tooltip({
						track: true,
						delay: 0,
						showURL: false,
						showBody: false
						});
					} 
					});
				j++;
		  });	
};
