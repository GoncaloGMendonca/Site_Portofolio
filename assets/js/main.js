
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
 
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))




/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)





/*=============== Video hover  ===============*/

document.addEventListener("DOMContentLoaded", function() {
    const videoWrappers = document.querySelectorAll(".video-wrapper");
    
    videoWrappers.forEach(function(wrapper) {
      const video = wrapper.querySelector(".video");
  
      wrapper.addEventListener("mouseenter", function() {
        video.play();
      });
  
      wrapper.addEventListener("mouseleave", function() {
        video.pause();
        video.currentTime = 0;
      });
    });
  });
  


  

/*=========================== Filter tabs==============================*/
const radioButtons = document.querySelectorAll('input[name="radio"]');
const posts = document.querySelectorAll('.post');

radioButtons.forEach(radioButton => {
  radioButton.addEventListener('change', () => {
    const selectedFilter = radioButton.value;

    posts.forEach(post => {
      const postCategories = post.getAttribute('data-category').split(' ');

      if (selectedFilter === 'all' || postCategories.includes(selectedFilter)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    });
  });
});






// sistema de pausar os video no modal no hover no rato
function setupCarousels() {
  var carousels = document.querySelectorAll('.carousel');

  for (var i = 0; i < carousels.length; i++) {
    var carousel = carousels[i];

    $(carousel).carousel(); // set up the carousel

    // Pause the carousel when the mouse is over it
    carousel.addEventListener('mouseover', function() {
      $(this).carousel('pause'); // pause the carousel
    });

    // Resume the carousel when the mouse leaves it
    carousel.addEventListener('mouseout', function() {
      $(this).carousel('cycle'); // resume the carousel
    });
  }
}

window.onload = function() {
  setupCarousels();
};

// sistema de pausar os video no modal no slide over
function setupCarousels() {
  var carousels = document.querySelectorAll('.carousel');

  for (var i = 0; i < carousels.length; i++) {
    var carousel = carousels[i];

    $(carousel).carousel(); // set up the carousel

    carousel.addEventListener('slide.bs.carousel', function(event) {
      var currentSlide = event.from; // get the current slide index
      var slideItems = this.querySelectorAll('.carousel-item'); // get all slide items
      var slideVideos = slideItems[currentSlide].querySelectorAll('video'); // get all videos in the current slide
      var slideIFrames = slideItems[currentSlide].querySelectorAll('iframe'); // get all iframes in the current slide

      // Pause all videos in the current slide
      for (var j = 0; j < slideVideos.length; j++) {
        if (!slideVideos[j].paused) {
          slideVideos[j].pause();
        }
      }

      // Pause all iframes in the current slide
      for (var k = 0; k < slideIFrames.length; k++) {
        var iframeSrc = slideIFrames[k].src;
        slideIFrames[k].src = iframeSrc; // reload the iframe to pause it
      }
    });
  }
}

window.onload = function() {
  setupCarousels();
};




  // get all modal elements
var modalElements = document.querySelectorAll('.modal');

// loop through each modal element
modalElements.forEach(function(modalElement) {

  // get the video element
  var iframeElement = modalElement.querySelector('iframe');

  // add event listener for when the modal is shown
  modalElement.addEventListener('shown.bs.modal', function() {

    // set the src attribute of the iframe to start the video
    if (iframeElement) {
      var iframeSrc = iframeElement.getAttribute('src');
      iframeElement.setAttribute('src', iframeSrc + '?autoplay=0');
    }
  });

  // add event listener for when the modal is hidden
  modalElement.addEventListener('hidden.bs.modal', function() {

    // set the src attribute of the iframe to stop the video
    if (iframeElement) {
      var iframeSrc = iframeElement.getAttribute('src');
      iframeElement.setAttribute('src', iframeSrc.replace('?autoplay=0', ''));
    }
  });

});


