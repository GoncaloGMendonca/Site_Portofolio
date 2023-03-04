$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

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




/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => 'dark';

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// We validate if the user previously chose a topic
if (localStorage.getItem('selected-theme')) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList.add(darkTheme);
  themeButton.classList.add(iconTheme);
}

const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';



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
