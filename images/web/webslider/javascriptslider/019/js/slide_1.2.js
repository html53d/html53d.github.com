/*
 * kwooshung_Effects 幻灯片实现文件
 *
 * Copyright (c) 2009 KwooShung (www.w3cfuns.com)
 *
 * Date: 2010年2月18日 16:36:08
 *
 * Author: KwooShung
 *
 * 本焦点广告版权归作者和w3cfuns.com共有，欢迎转载使用，但未经作者同意必须保留此段及以上声明，否则保留追究法律责任的权利。
 */
 
/*
 *
 *全局变量定义开始
 *
 */
 
var plays = 0;
var i = 0;
var state = 0;

/*
 *全局变量定义结束
 *
 *效果启动开始
 */

window.onload = function()
{
	slide_Start();//焦点广告启动方法
};

/*
 *效果启动结束
 *
 *焦点广告开始
 */

function slide_Start()
{
	dtInnerTags();
	pageNum();
	if(verify())
	{
		slideSize();
		slideTitleSet();
		if(config.isPlay == "on")
		{
			slidePlay();
		}
		switch (config.isOnMouse)
		{
			case 0:return false; 
			break;case 1:slideClick();  
			break;case 2:slideHover();
		}
	}
}

function verify()
{
	if(verify_Ms() && verify_Width())
	{
		return true;
	}
	else
	{
		if(verify_Ms() == false)
		{
			alert("渐显时间，注渐显毫秒数不能大于幻灯切换毫秒数");
		}
		else if(verify_Width() == false)
		{
			alert("幻灯片标题宽度不能大于总宽度减去页码的总宽度");
		}
		return false;
	}
}

function verify_Ms()
{
	if(config.Ms < config.fadeInMs)
	{
		return false;
	}
	else
	{
		return true;
	}

}

function verify_Width()
{
	if(config.isStTitle == "on")
	{
		$("#slideTitle").css("width",config.width - parseInt($("#"+config.dlID +" .pageNum:eq(0)").css("right")) + 17);
		return true;
	}
	else
	{
		if((config.width - parseInt($("#"+config.dlID +" .pageNum:eq(0)").css("right")) + 17) < config.stTitle)
		{
			return false;
		}
		else
		{
			return true;
		}
	}
}

function slideTitleSet()
{
	$("#"+config.dlID +" dt").css("background","#" + config.stTitleBg);
	$("#"+config.dlID +" dt").css("opacity",config.stTitleOpacite / 100);
}

function slideSize()
{
	if(config.isImgSize == "on")
	{
		$("#"+config.dlID + ",#"+config.dlID +" dd img").css({width:config.width+"px",height:config.height+"px"});
	}
	else
	{
		$("#"+config.dlID).css({width:config.width+"px",height:config.height+"px"});
	}
	$("#slideTitle").css("width",config.stTitle+"px");
}

function slideClick()
{
	$("#"+config.dlID+" .pageNum").click
	(
	 	function()
		{
			plays = parseInt($(this).text()) - 1;
			if(config.isSlideMouseEffects == "off"){state = 1;}
			animation();
		}
	);
}

function slideHover()
{
	$("#"+config.dlID+" .pageNum").mouseover
	(
	 	function()
		{
			plays = parseInt($(this).text()) - 1;
			if(config.isSlideMouseEffects == "off"){state = 1;}
			animation();
		}
	);
}

function pageNum()
{
	var rightPitch = config.rightPitch;
	var pitch = config.pitch;
	for(var i = 1; i <= $("#"+config.dlID+" dd").length; i++)
	{
		$("#"+config.dlID+" dt").html($("#"+config.dlID+" dt").html()+"<a class=\"pageNum\">"+ i +"</a>");
	}
	for(var i = $("#"+config.dlID+" .pageNum").length-1; i >= 0; i--)
	{
		$("#"+config.dlID+" .pageNum:eq("+ i +")").css("right",""+ rightPitch +"px");
		rightPitch = rightPitch + (17 + pitch);
	}
}

function dtInnerTags()
{
	if(config.isDtInnerTags == "a")
	{
		if(config.isDtInnerTagsNewOpen == 0)
		{
			$("#"+config.dlID+" dt").html("<a id=\"slideTitle\" class=\"font14 bold white\" target=\"_self\" href=\"#\"></a>");
		}
		else if
		(config.isDtInnerTagsNewOpen == 1)
		{
			$("#"+config.dlID+" dt").html("<a id=\"slideTitle\" class=\"font14 bold white\" target=\"_blank\" href=\"#\"></a>");
		}
	}
	else if(config.isDtInnerTags == "span")
	{
		$("#"+config.dlID+" dt").html("<span id=\"slideTitle\" class=\"font14 bold white\"></span>");
	}
}

function slidePlay()
{
	var seconds = config.Ms;animation();
	setTimeout("slidePlay()",seconds);
}

function animation()
{
	pageNumBackgroundRestore();
	$("#"+config.dlID+" .pageNum:eq("+ plays +")").attr("class",$("#"+config.dlID+" .pageNum:eq("+ plays +")").attr("class")+" pageNumHover");
	plays = plays + 1;
	if(plays == $("#"+config.dlID+" .pageNum").length)
	{
		plays = 0;
	}
}

function pageNumBackgroundRestore()
{
	state == 0?effects_Fade():effects_Hide();
	$("#"+config.dlID+" .pageNum").attr("class","pageNum");
	state = 0;
}

function effects_Fade()
{
	var play = plays;
	$("#"+config.dlID+" dd img").fadeOut();
	titleEffects(plays);
	$("#"+config.dlID+" dd img:eq("+ play +")").fadeIn(config.fadeInMs);
}

function effects_Hide()
{
	var play = plays;
	$("#"+config.dlID+" dd img").hide();
	titleEffects(plays);
	$("#"+config.dlID+" dd img:eq("+ play +")").show();
}

function titleEffects(num)
{
	if(config.isSlideTitle == "on")
	{
		$("#slideTitle").animate
		(
			{top:50},
			config.isSlideTitleMs,
			function()
			{
				$("#slideTitle").html($("#"+config.dlID+" dd img:eq("+ num +")").attr("alt"));
				$("#slideTitle").attr("href",$("#"+config.dlID+" dd a:eq("+ num +")").attr("href"));
			}
		);
	}
	else
	{
		$("#slideTitle").html($("#"+config.dlID+" dd img:eq("+ num +")").attr("alt"));
	}
	$("#slideTitle").animate({top:18},config.isSlideTitleMs);
}