$(function(){
	
	/*左右滚动*/
//	$(".loanDetailPlay").pageSlider({
//    pageSelector:".fullItem",
//    horizontal:true,
//    loop:true,
//    prevBtn:$("#scrollLeftArrow"),
//    nextBtn:$("#scrollRightArrow")
//	});

  	/*上下滚动*/
//  	loaded();
//	var myScroll;
//
//	function loaded() {
//		myScroll = new IScroll('#muiTimeLine', {
//			scrollbars: true,
//			mouseWheel: true,
//			interactiveScrollbars: true,
//			shrinkScrollbars: 'scale',
//			fadeScrollbars: true
//		});
//	}

//	$.getJSON("json/loanDetail.json",function(res){
//		if( res.status == 0 ){
//			$("#detailName").html(res.staPrincipal,res.beInterest);
//		}else if( res.status == 1 ){
//			$("#detailName").html(0);
//		}
//	});


//  var slideTab = $('.loanDetailBox .loanDetailPlay').swipeSlide({
//      continuousScroll:true,
//      autoSwipe : false,
//      lazyLoad : true
//  });
//  
//  $('.loanDetailBox').on('tap','#scrollLeftArrow', function(i){
//      slideTab[0].goTo('prev');
//  });
//  $('.loanDetailBox').on('tap','#scrollRightArrow', function(i){
//      slideTab[0].goTo('next');
//  });

	

	$("#slider1").responsiveSlides({
        maxwidth: 640,
        auto: false,
        nav: true,
        speed: 800
    });
	

});






