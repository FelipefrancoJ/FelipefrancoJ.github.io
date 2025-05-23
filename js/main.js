(function($){"use strict";function subpages_resize(){var subpagesHeight=$('.pt-page-current').height();$(".subpages").height(subpagesHeight+50);}
function portfolio_init(){var portfolio_grid=$('#portfolio_grid'),portfolio_filter=$('#portfolio_filters');if(portfolio_grid){portfolio_grid.shuffle({speed:450,itemSelector:'figure'});$('.site-main-menu').on("click","a",function(e){portfolio_grid.shuffle('update');});portfolio_filter.on("click",".filter",function(e){portfolio_grid.shuffle('update');e.preventDefault();$('#portfolio_filters .filter').parent().removeClass('active');$(this).parent().addClass('active');portfolio_grid.shuffle('shuffle',$(this).attr('data-group'));setTimeout(function(){subpages_resize();},500);});}}
$(function(){$('#contact-form').validator();$('#contact-form').on('submit',function(e){if(!e.isDefaultPrevented()){var url="contact_form/contact_form.php";$.ajax({type:"POST",url:url,data:$(this).serialize(),success:function(data)
{var messageAlert='alert-'+data.type;var messageText=data.message;var alertBox='<div class="alert '+messageAlert+' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+messageText+'</div>';if(messageAlert&&messageText){$('#contact-form').find('.messages').html(alertBox);if(messageAlert=="alert-success"){$('#contact-form')[0].reset();}}}});return false;}});});function mobileMenuHide(){var windowWidth=$(window).width();if(windowWidth<1024){$('#site_header').addClass('mobile-menu-hide');}}
$(window).on('load',function(){$(".preloader").fadeOut("slow");var ptPage=$('.subpages');if(ptPage[0]){PageTransitions.init({menu:'ul.site-main-menu',});}}).on('resize',function(){mobileMenuHide();setTimeout(function(){subpages_resize();},500);}).scroll(function(){if($(window).scrollTop()<20){$('.header').removeClass('sticked');}else{$('.header').addClass('sticked');}}).scrollTop(0);$(document).on('ready',function(){var $portfolio_container=$(".portfolio_grid");$portfolio_container.imagesLoaded(function(){portfolio_init(this);});$(' #portfolio_grid > figure ').each(function(){$(this).hoverdir();});var $container=$(".blog-masonry");$container.imagesLoaded(function(){$container.masonry();});$('.menu-toggle').on("click",function(){$('#site_header').toggleClass('mobile-menu-hide');});$('.site-main-menu').on("click","a",function(e){mobileMenuHide();});$('.sidebar-toggle').on("click",function(){$('#blog-sidebar').toggleClass('open');});$(".testimonials.owl-carousel").owlCarousel({nav:true,items:3,loop:false,navText:false,margin:25,responsive:{0:{items:1,},480:{items:1,},768:{items:2,},1200:{items:2,}}});$('.text-rotation').owlCarousel({loop:true,dots:false,nav:false,margin:0,items:1,autoplay:true,autoplayHoverPause:false,autoplayTimeout:3800,animateOut:'zoomOut',animateIn:'zoomIn'});$('body').magnificPopup({delegate:'a.lightbox',type:'image',removalDelay:300,mainClass:'mfp-fade',image:{titleSrc:'title',gallery:{enabled:true},},iframe:{markup:'<div class="mfp-iframe-scaler">'+
'<div class="mfp-close"></div>'+
'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
'<div class="mfp-title mfp-bottom-iframe-title"></div>'+
'</div>',patterns:{youtube:{index:'youtube.com/',id:null,src:'%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=1'},gmaps:{index:'//maps.google.',src:'%id%&output=embed'}},srcAction:'iframe_src',},callbacks:{markupParse:function(template,values,item){values.title=item.el.attr('title');}},});$('.ajax-page-load-link').magnificPopup({type:'ajax',removalDelay:300,mainClass:'mfp-fade',gallery:{enabled:true},});$('.form-control').val('').on("focusin",function(){$(this).parent('.form-group').addClass('form-group-focus');}).on("focusout",function(){if($(this).val().length===0){$(this).parent('.form-group').removeClass('form-group-focus');}});$("#map").googleMap();$("#map").addMarker({address:"15 avenue des champs Elysées 75008 Paris"});}).on("DOMSubtreeModified",subpages_resize);})(jQuery);
function openEmail(event) {
    event.preventDefault();
    window.open("mailto:felipefranco1407@gmail.com", "_blank");
}

function openInstagram(event) {
    event.preventDefault();
    window.open("https://www.instagram.com/FelipeFrancoJ/", "_blank");
}

function openWpp(event) {
    event.preventDefault();
    window.open("https://wa.me/5511989365941", "_blank");
}