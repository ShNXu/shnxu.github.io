// JavaScript Document

//第一站的图片添加
var ocon_photo = document.getElementById('con_photo');
var ocon_photo_li = ocon_photo.getElementsByTagName('li');
var ocon_photo_div = ocon_photo.getElementsByTagName('div');
var ocon_photo_p = ocon_photo.getElementsByTagName('p');
var ocon_photo_img = ['../image/dyz/1.png','../image/dyz/2.png','../image/dyz/3.png','../image/dyz/4.png','../image/dyz/5.png','../image/dyz/6.png'];
var ocon_photo_txt = ['布达拉宫<br />世界上海拔最高的宫殿。<br />立于拉萨市中心玛布日山上的布达拉宫不仅仅是这座城市的象征，更是雪域高原的象征，也是藏文化的博物馆。','羊湖<br />天上的圣境。<br />三大圣湖之一，在大约100万年前，巨大的泥石流在白地以西20公里处的羊舍附近堵塞了墨曲上游河谷，于是该湖成为内流湖。','雅鲁藏布江<br />是中国最长的高原河流。<br />位于西藏自治区境内，也是世界上海拔最高的大河之一。雅鲁藏布江大拐弯处的雅鲁藏布江大峡谷是世界第一大峡谷。','珠穆朗玛峰<br />世界的顶点。<br />珠穆朗玛峰不单是世上最高的山峰，同时是世界上最雄伟的山峰之一。它整体呈金字塔形，北坡海拔5800~6200米，南坡海拔5500~6100米，全为终年覆雪区域。','纳木错<br />闻名世界的西藏圣湖。<br />纳木错藏语的意思为“天湖”之意，位于藏北高原东南部，念青唐古拉山以北，西藏自治区当雄县和班戈县境内。湖面呈天蓝色，水天相融、浑然一体。','冈仁波齐<br />朝拜者心目中的世界中心。<br />冈仁波齐是世界公认的神山，人们对于冈仁波齐峰的崇拜可上溯至公元前1000年左右。因其在宗教意义上的神圣地位，至今是一座无人登顶的处女峰。'];
for(var i=0;i<ocon_photo_li.length;i++)
{
	ocon_photo_li[i].style.background = 'url('+ocon_photo_img[i]+')';
	ocon_photo_li[i].innerHTML = '<div><p>'+ocon_photo_txt[i]+'</p></div>';
}

//首页图片轮播

	
//第一站特色图片点击变换
$("#con_characteristic").width($(".character").width());
$("#con_characteristic2").width($(".character").width()*4);
var page=1;
$(".left").click(function()
{
	if(!$("#con_characteristic2").is(":animated"))
	{
		if(page==1)
		{
			$("#con_characteristic2").animate({left:"+=50"},200,function(){
				$(this).animate({left:"-=50"},200);
			});
			return false;
		}	
			$("#con_characteristic2").animate({left:"+="+$(".character").width()});
			page--;
	}
});
$(".right").click(function()
{
	if(!$("#con_characteristic2").is(":animated"))
	{
		if(page==4)
		{
			$("#con_characteristic2").animate({left:"-=50"},200,function(){
				$(this).animate({left:"+=50"},200);
			});
			return;
		}
		$("#con_characteristic2").animate({left:"-="+$(".character").width()});
		page++;
	}
});