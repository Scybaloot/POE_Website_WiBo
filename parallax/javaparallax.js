
$(window).scroll(function(e){
		parallax();
	});

function parallax(){
	var scrolled = $(window).scrollTop();
	background_div = ".backgroundclass1;"
	if (scrolled > 400 && scrolled <= 800){
		var background_div = ".backgroundclass2";
	}
	else if (scrolled > 800 && scrolled < 1200){
		var background_div = ".backgroundclass3";
	}
	//else if (scrolled > 1200 && scrolled < 1600){
	//	var background_div = ".backgroundclass4";
	//}

	$(background_div).css('top',(scrolled*1)+'px');
};
