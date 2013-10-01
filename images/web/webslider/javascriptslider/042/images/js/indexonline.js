var u=(function(W){
	var t=function(){};
	t.prototype={
		autoscroll:function(){
			var _move;
			var _wrap=$('#id-iwb .newslist').find('ul');
			_wrap.hover(function(){
				clearInterval(_move);
			},function(){
				_move=setInterval(function(){
					var _field=_wrap.find('li:first');
					var _h=_field.innerHeight();
					_field.animate({marginTop:-_h+'px'},'slow',function(){
						_field.css('marginTop',0).appendTo(_wrap);
					})
				},5000)
			}).trigger('mouseleave')
		},
		showpic:function(){
			var url='';
			var url2='';
			var url3='';
			var url4='';
			$('#id-todaypic li img').click(function(){
				$('.iframe-tp').show();
				var licn=$(this).parents('li').attr('class');
				var num=licn.replace(/A/,'');
				if(num>=11 && num<=13){$('.iframe-tp').find('iframe').attr('src',url2+licn+'.html');}
				else if(num==7 ){$('.iframe-tp').find('iframe').attr('src',url3);}
				else if(num==8){$('.iframe-tp').find('iframe').attr('src',url4);}
				else{$('.iframe-tp').find('iframe').attr('src',url+licn+'.html');}
				return false;
			})
		},
		scroll:function(){
			$('.focusnext').each(function(){
				$(this).mouseover(function(){
					$(this).addClass('focusnext-hover')
				}).mouseout(function(){
					$(this).removeClass('focusnext-hover')
				}).click(function(){
					if(!$('.menucont li:first').is(":animated")){
						$('.menucont li:first').animate({marginLeft:'-='+74+'px'},'slow',function(){
							$('.menucont li:first').css('marginLeft',0).appendTo($('.menucont ul'));
						})
					}
				})
			});
			$('.focusprev').each(function(){
				$(this).mouseover(function(){
					$(this).addClass('focusprev-hover')
				}).mouseout(function(){
					$(this).removeClass('focusprev-hover')
				}).click(function(){
					if(!$('.menucont li:first').is(":animated")){
							$('.menucont li:first').animate({marginLeft:'+='+74+'px'},'slow',function(){
							$('.menucont li').css('marginLeft',0)
							$('.menucont li:last').prependTo($('.menucont ul'));
						})
					}
				})
			});
		},
		ishow:function(){
			$('.iwb-fx').toggle(function(){
				$('.ifxcont').css({'display':'block','top':$(this).position().top+20+'px','left':$(this).position().left+'px'});
				$(this).parents('li').addClass('newscurr');
			},function(){
				$('.ifxcont').css({'display':'none'});
				$(this).parents('li').removeClass('newscurr');
			})
		},
		ivideorank:function(){
			$(".ivideorank li").each(function(){
				$(this).hover(function(){
					$(this).addClass("cur").siblings().removeClass("cur");
				})	
			})	
		},
		fxsina:function(){
			$('#wb-renren').click(function(){
				window.open( _u,'', 'width=700, height=680, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
			})
		}
	}
	return new t();
})()
$(function(){
	u.autoscroll();
	u.showpic();
	u.scroll();
	u.ishow();
	u.ivideorank();
	u.fxsina();
	$('.iframe-slide').click(function(){
		$('.iframe-tp').find('iframe').attr('src','images/loading/loading.html');
		$('.iframe-tp').hide();
	})
})
var fnum=0;
var findex;
$(function(){
	flen=$('.focuscont li').length;
	var tm=setInterval('autoshow()',3000);
	$('.ifocus').hover(function(){
		clearInterval(tm);
	},function(){
		tm=setInterval('autoshow()',3000);
	})
	$('.focusmenu li').each(function(i){
		$(this).click(function(){
			findex=$('.focusmenu li').index(this);
			fnum=findex;
			$(this).addClass('curr').siblings().removeClass('curr');
			$('.focuscont li').eq(i).show().siblings().hide();
		});
	})
})
var autoshow=function(){
	if(fnum>=(flen-1)){
		fnum=0;
	}
	else{
		if(fnum>=4){
			$('.focusmenu li:first').animate({marginLeft:'-='+74+'px'},'slow',function(){
				$('.focusmenu li:first').css('marginLeft',0).appendTo($('.focusmenu ul'));
				$('.focusmenu li').eq(fnum-1).trigger('click')
			})
		}
		fnum++;
	}
	$('.focusmenu li').eq(fnum).trigger('click')
}
