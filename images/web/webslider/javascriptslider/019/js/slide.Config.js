/*
 * kwooshung_Effects 幻灯片实现文件
 *
 * Copyright (c) 2009 KwooShung (CSS学习网 www.w3cfuns.com)
 *
 * Date: 2010年2月18日 16:36:08
 *
 * Author: KwooShung
 *
 * 本焦点广告版权归作者和w3cfuns.com共有，欢迎转载使用，但未经作者同意必须保留此段及以上声明，否则保留追究法律责任的权利。
 */
 
var config =
{
	dlID:"content",//幻灯片的ID名称
	width:460,//幻灯片的宽度
	height:226,//幻灯片的高度
	isImgSize:"on",//表示图片可否拉伸,on为可拉伸off为不可拉伸
	stTitle:300,//幻灯片标题宽度
	isStTitle:"on",//是否允许自动调整标题的宽度
	isDtInnerTags:"a",//a表示标签使用链接（可点击跳转)，span表示标题不可点击只能使用。注：此属性只有a和span两个值，其他无效。
	isDtInnerTagsNewOpen:1,//0表示在本窗口打开，1表示打开新窗口
	stTitleBg:"000",//幻灯片标题背景颜色，16进制表示，不用写#号，可缩写，与CSS写法一致。
	stTitleOpacite:80,//幻灯片标题背景的透明度
	isSlideTitle:"on",//是否开启幻灯标题效果，on为开启off为禁止
	isSlideMouseEffects:"off",//表示鼠标激活按钮后的切换效果是否开启。
	rightPitch:15,//页码右边距像素
	pitch:3,//页码空隙像素
	isPlay:"on",//是否自动播放，on为播放off为禁止
	Ms:5000,//幻灯切换毫秒数
	fadeInMs:1000,//渐显时间，注渐显毫秒数不能大于幻灯切换毫秒数。
	isSlideTitleMs:200,//幻灯标题效果时长豪秒数
	isOnMouse:1//是否开启鼠标选则页码,0关闭,1鼠标点击,2鼠标移动
};