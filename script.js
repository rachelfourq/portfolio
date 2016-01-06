$(document).ready(function() {
	console.log('working')

  $('.honeycombs').honeycombs({
    combWidth: 250,
    margin: 10
  });

// not working
// $('#fullpage').fullpage({
//   lockAnchors: false,
//   anchors:['first', 'second', 'third', 'fourth', 'fifth'],


//   // Scrolling
//   css3: true,
//   scrollingSpeed: 700,
//   autoScrolling: true,
//   fitToSection: true,
//   fitToSectionDelay: 1000,
//   scrollBar: false,
//   easing: 'easeInOutCubic',
//   easingcss3: 'ease',


//   // Accessibility
//   keyboardScrolling: true,
//   animateAnchor: true,
//   recordHistory: true,



//   // Custom Selectors
//   sectionSelector: '.section',


//   // Events
//   onLeave: function(index, nextIndex, direction){},
//   afterLoad: function(anchorLink, index){},
//   afterRender: function(){},
//   afterResize: function(){},
//   afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
//   onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
// });
});
