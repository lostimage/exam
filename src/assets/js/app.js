//=require jquery.min.js

//=require what-input.min.js

// Core Foundation files
//=require foundation.core.min.js

//=require foundation.util.keyboard.min.js
//=require foundation.util.mediaQuery.js
//=require foundation.util.triggers.min.js

//=require foundation.offcanvas.min.js 

// require foundation.util.*.min.js

// require foundation.dropdown.min.js
// require foundation.responsiveMenu.min.js
// require foundation.responsiveToggle.min.js
// require foundation.toggler.min.js

// to inlude foundation plugins add "=" sign below
//
// require foundation.abide.min.js
// require foundation.accordion.min.js
// require foundation.accordionMenu.min.js
// require foundation.drilldown.min.js
// require foundation.dropdownMenu.min.js
// require foundation.equalizer.min.js
// require foundation.interchange.min.js
// require foundation.magellan.min.js
// require foundation.orbit.min.js
// require foundation.reveal.min.js
// require foundation.slider.min.js
// require foundation.sticky.min.js
// require foundation.tabs.min.js
// require foundation.tooltip.min.js
// require foundation.zf.responsiveAccordionTabs.min.js

//=require slick.min.js


;(function($){
	$(document).foundation();

	$(document).ready(function(){
		var $midSlider = $('.ba-works-slider');

		$midSlider.slick({
			dots: true,
			appendDots:'.ba-works',
			prevArrow:'.ba-works-prev-arrow',
			nextArrow:'.ba-works-next-arrow',
			infinite:true
		});
		var $teamSlider = $('.ba-team-slider');

		$teamSlider.slick({
			dots: false,
			prevArrow:'.ba-prev-arrow',
			nextArrow:'.ba-next-arrow',
			infinite: true,
			slidesToShow : 3,
			slidesToScroll:1,
			responsive: [
				{
				  breakpoint: 960,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
				
				  }
				},
				{
				  breakpoint: 600,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				  }
				},
			
			]
		});
	});
	var map;
	function initMap() {
	  map = new google.maps.Map(document.getElementById('map'), {
		center: {lat:40.650002,lng: -73.949997},
		zoom: 13,
			styles: 
			[
				{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						},
						{
							"hue": "$theme-color"
						},
						{
							"saturation": 74
						},
						{
							"lightness": 100
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						},
						{
							"weight": 0.6
						},
						{
							"saturation": -85
						},
						{
							"lightness": 61
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						},
						{
							"color": "$theme-color"
						},
						{
							"lightness": 26
						},
						{
							"gamma": 5.86
						}
					]
				}
			]
			

	});
	var marker = new google.maps.Marker({
			position: {lat:40.650002,lng: -73.949997},
			map: map,
			icon:'assets/img/pin.svg',
		
		  });
	 
	}
	window.addEventListener('load', initMap);
	/// slow link scroll

	$(".ba-header").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$(".ba-button-up").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
})(jQuery);

















