// JavaScript Document
    var CASE_ITEM_HEIGHT=152;
	var CASE_ANIMATION_TIME=200;

	$('#case_content li').hover(
		function(){
			var $cover=$(this).children('.cover');

			$cover.stop(true);
			var start_height=$cover.height();
			if(start_height==CASE_ITEM_HEIGHT)return false;			
			
			var duration=Math.ceil(CASE_ANIMATION_TIME*(CASE_ITEM_HEIGHT-start_height)/CASE_ITEM_HEIGHT);
			$cover.animate({ 'height':CASE_ITEM_HEIGHT },duration,'swing');
		},
		function(){
			var $cover=$(this).children('.cover');

			$cover.stop(true);
			var start_height=$cover.height();
			if(start_height==0)return false;			
			
			var duration=Math.ceil(CASE_ANIMATION_TIME*start_height/CASE_ITEM_HEIGHT);
			$cover.animate({ 'height':0 },duration,'swing');
		}
	)
	var HKUC_SWITCH_CLASS='active';
	$('.hkuc_switch').filter(':not(.hover_switch)').click(function(){
		var $this=$(this);
		if($this.is('.'+HKUC_SWITCH_CLASS))return true;
		
		$('#'+$this.siblings('.'+HKUC_SWITCH_CLASS).removeClass(HKUC_SWITCH_CLASS).attr('id')+'_content').hide();
		$this.addClass(HKUC_SWITCH_CLASS);
		$('#'+$this.attr('id')+'_content').show();
	});
	$('.hkuc_switch.hover_switch').hover(function(){
		var $this=$(this);
		if($this.is('.'+HKUC_SWITCH_CLASS))return true;
		
		$('#'+$this.siblings('.'+HKUC_SWITCH_CLASS).removeClass(HKUC_SWITCH_CLASS).attr('id')+'_content').hide();
		$this.addClass(HKUC_SWITCH_CLASS);
		$('#'+$this.attr('id')+'_content').show();
	},$.noop());
$('#dsz_img').hkuc_fs_trans({
		'auto':2000,
		'zIndex':5,
		'type':'slide',
		'number':true
	});
	
	
	
	$("#dsz_playground").width($(".dsz_character").width());
var page=1;
$(".left").click(function()
{
	if(!$("#dsz_playground2").is(":animated"))
	{
		if(page==1)
		{
			$("#dsz_playground2").animate({left:"+=50"},200,function(){
				$(this).animate({left:"-=50"},200);
			});
			return false;
		}	
			$("#dsz_playground2").animate({left:"+="+$(".dsz_character").width()});
			page--;
	}
});
$(".right").click(function()
{
	if(!$("#dsz_playground2").is(":animated"))
	{
		if(page==4)
		{
			$("#dsz_playground2").animate({left:"-=50"},200,function(){
				$(this).animate({left:"+=50"},200);
			});
			return;
		}
		$("#dsz_playground2").animate({left:"-="+$(".dsz_character").width()});
		page++;
	}
});