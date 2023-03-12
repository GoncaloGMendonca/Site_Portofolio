$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
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



function copyToClipboard(textToCopy) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Text copied to clipboard: ' + textToCopy);
        const snackbar = document.getElementById('snackbar');
        snackbar.classList.add('show');
        setTimeout(() => {
          snackbar.classList.remove('show');
        }, 2500);
      })
      .catch((error) => {
        console.error('Failed to copy text: ', error);
      });
}
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



  

/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',() =>{
        const target = document.querySelector(tab.dataset.target) 


        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')

        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
                t.classList.remove('filter-tab-active')

        })
        tab.classList.add('filter-tab-active')
    })
})

/*-------------------Filter Posts--------------*/
const categoryButtons = document.querySelectorAll('.category-button');
const postGrid = document.querySelector('.post-grid');
const posts = postGrid.querySelectorAll('.post:not(.projects__modal)');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (category === 'all') {
      posts.forEach(post => post.style.display = 'block');
    } else {
      posts.forEach(post => {
        if (post.classList.contains(category)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    }
  });
});






/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})



sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`,{delay:500})
sr.reveal(`.profile__profession`,{delay:600})
sr.reveal(`.profile__social`,{delay:700})
sr.reveal(`.profile__info-group`,{interval:100,delay:800})
sr.reveal(`.profile__buttons`,{delay:800})
sr.reveal(`.filters__content`,{delay:900})
sr.reveal(`.filters`,{delay:1000})
