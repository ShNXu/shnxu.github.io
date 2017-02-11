// JavaScript Document
$(function(){
    $('#content').fullpage({
		scrollingSpeed: 400,             //滚动速度
		css3: true,                      //是否使用 CSS3 transforms 滚动
		resize: true,                    //字体是否随着窗口缩放而缩放
		anchors: ["page1","page2","page3","page4","page5"],//定义锚链接
		verticalCentered: false,         //内容是否垂直居中 
		afterRender: function(){         //页面结构生成后的回调函数
			$("#homePage").addClass("home_zoom");
			$("#photo").animate({opacity:"1"},1000,function(){
				$("#p1").fadeIn(700,function(){
					$("#p2").fadeIn(650,function(){
						$(this).next().fadeIn(600,function(){
							$(this).next().fadeIn(550,function(){
								$("#list").fadeIn(300);
							});
						});
					});
				});
			});	
		},
		afterLoad: function(anchorLink,index){
        //滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数,
		//anchorLink 是锚链接的名称，index 是序号，从1开始计算 
			if(index==1){}
			if(index==2){
				$("#aboutMe").animate({opacity:"1"},1000,function(){
				$("#about_title span").fadeIn(700,function(){
					$("#about_title hr").fadeIn(650,function(){
						$("#about_list").fadeIn(600,function(){
							$("#about_text").fadeIn(550)
						});
					});
				});
			});	
			}
			if(index==3){
				$("#skill").animate({opacity:"1"},1000,function(){
				$("#skill_title span").fadeIn(700,function(){
					$("#skill_title hr").fadeIn(650,function(){
						$("#skill_list").fadeIn(580,function(){
							$("#skill_text").fadeIn(530)
						});
					});
				});
				});
			}
			if(index==4){
				$("#work").animate({opacity:"1"},1000,function(){
				$("#work_title span").fadeIn(700,function(){
					$("#work_title hr").fadeIn(650,function(){
						$("#work_list").fadeIn(600);
					});
				});
				});
				
			}
			if(index==5){
				$("#contact").animate({opacity:"1"},1000,function(){
					$("#contact_title span").fadeIn(700,function(){
					$("#contact_title hr").fadeIn(650,function(){
						$("#contact_text").fadeIn(550)
					});
				});
				});
			}
		}
	});
});


//首页图片
var ophoto = document.getElementById('photo');
var ophoto_li = ophoto.getElementsByTagName('li');
var ophoto_arr = ['photo0.png','photo2.png','photo3.png'];
var ophoto_arr1 = ['photo4.png','photo5.png','photo7.png'];

for(var i=0;i<ophoto_arr.length;i++)
{
	ophoto_li[i].index = i;
	ophoto_li[i].style.background = 'url(image/'+ophoto_arr[i]+') no-repeat';
	ophoto_li[i].onmouseover = function()
	{
		this.style.background = 'url(image/'+ophoto_arr1[this.index]+') no-repeat';
		this.style.transition = '1s';
	}
	ophoto_li[i].onmouseout = function()
	{
		this.style.background = 'url(image/'+ophoto_arr[this.index]+') no-repeat';
	}
}

//列表文字切换
$("#list a").hover(function(){
	$(this).find('span').fadeToggle(200,"easeInOutCubic");
});

//个人简介页的文字切换
var oabout_list = document.getElementById('about_list');
var oabout_list_li = oabout_list.getElementsByTagName('li');
var oabout_text = document.getElementById('about_text');
var oabout_div = oabout_text.getElementsByTagName('div')[1];
var oinformation = oabout_text.getElementsByClassName('information');

for(var i=0;i<oabout_list_li.length;i++)
{
	oabout_list_li[i].index = i;
	oabout_list_li[i].onclick = function()
	{
		for(var i=0;i<oabout_list_li.length;i++)
		{
			oinformation[i].style.display = 'none';
		}
		oabout_div.style.display = 'none';
		oinformation[this.index].style.display = 'block';
	}
}

//专业技能页的div切换
var oskill_list = document.getElementById('skill_list');
var oskill_list_li = oskill_list.getElementsByTagName('li');
var oskill_content = document.getElementById('skill_content');
var oskill_content1 = oskill_content.getElementsByClassName('skill_content1');
var oskill_text = document.getElementById('skill_text');

for(var i=0;i<oskill_list_li.length;i++)
{
	oskill_list_li[i].index = i;
	oskill_list_li[i].onclick = function()
	{
		for(var i=0;i<oskill_list_li.length;i++)
		{
			oskill_content1[i].style.display = 'none';
		}
		oskill_text.style.display = 'none';
		oskill_content1[this.index].style.display = 'block';
	}
}

$('.email_img').click(function(){
	$('.email').slideDown(200);
	$('.tel').slideUp(200)
});

$('.tel_img').click(function(){
	$('.tel').slideDown(200);
	$('.email').slideUp(200)
});


