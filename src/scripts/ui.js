// Todo: Implement smooth scrolling
var mouseWheelEvt = function (event) {
    if (document.body.doScroll)
        document.body.doScroll(event.wheelDelta>0?"left":"right");
    else if ((event.wheelDelta || event.detail) > 0)
        $('body').animate( { scrollLeft: '-=100' }, 500, 'linear' );
    else
        $('body').animate( { scrollLeft: '+=100' }, 500, 'linear' );

    return false;
}


function openPhotoSwipe() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    var items = [
    	{
            src: 'http://placeimg.com/640/480/nature',
            w: 964,
            h: 1024
        },
        {
            src: 'https://farm2.staticflickr.com/1043/5186867718_06b2e9e551_b.jpg',
            w: 964,
            h: 1024
        },
        {
            src: 'https://farm7.staticflickr.com/6175/6176698785_7dee72237e_b.jpg',
            w: 1024,
            h: 683
        }
    ];
    
    // define options (if needed)
    var options = {
			 // history & focus options are disabled on CodePen        
      	history: false,
      	focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};



$(document).ready(function() {
	document.body.addEventListener("mousewheel", mouseWheelEvt);
	$(".event").click(function() {
		openPhotoSwipe();
	})
});


