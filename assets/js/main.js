$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});






function setupCarousels() {
  // Get all carousels on the page
  var carousels = document.querySelectorAll('.carousel');

  // Loop through each carousel and set it up
  for (var i = 0; i < carousels.length; i++) {
    var carousel = carousels[i];

    // Set up the carousel here, using whatever library or code you prefer
    // For example, if you're using Bootstrap, you could call the carousel() method:
    $(carousel).carousel();
  }
}

// Call the setupCarousels() function when the page is loaded
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
const posts = postGrid.querySelectorAll('.post');

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





/*--------------Links--------- */
/* 
const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');

function updateUrl() {
  const url = new URL(window.location.href);
  url.hash = 'post1-modal';
  window.history.pushState({}, '', url);
}

function resetUrl() {
  const url = new URL(window.location.href);
  url.hash = '';
  window.history.pushState({}, '', url);
}

if (window.location.hash === '#post1-modal') {
  document.getElementById('post1-modal').style.display = 'block';
}

openModalBtn.addEventListener('click', () => {
  document.getElementById('post1-modal').style.display = 'block';
  updateUrl();
});

closeModalBtn.addEventListener('click', () => {
  document.getElementById('post1-modal').style.display = 'none';
  resetUrl();
});

 */


/* $(document).ready(function(){
  // Get the modal ID from the URL
  var modalId = window.location.hash.substr(1);
  if(modalId) {
      // If a modal ID is present in the URL, open that modal
      $("#" + modalId).modal('show');
  } else {
      // If no modal ID is present in the URL, open the default modal
      $("#imageModal1").modal('show');
  }
});
  */


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
