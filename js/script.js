$(document).ready(function(){
	if($(window).width()>1199){
		$('.cards_block .item').hover(function(){
			$(this).addClass('hover');
		},
		function(){
			$(this).removeClass('hover');
		});
	}
	$('.tab').click(function(){
		$('.tab').removeClass('active').eq($(this).index()).addClass('active');
		var id = $(this).attr('id');
			if(id == 'all'){
				$('.tabs_content .tab_item').show();
			} else {
				$('.tabs_content .tab_item').hide();
				$('.tabs_content #'+id).show();
					if ($('.tabs_content #'+id).length == 0){
						$('.tabs_content').addClass('null');
					} else {
						$('.tabs_content').removeClass('null');
					}
			}	
	});
});