const openModalButton = document.getElementById('open-modal');
const closeModalButton = document.getElementById('close-modal');
const modalContainer = document.getElementById('modal-container');

openModalButton.addEventListener('click', function() {
  modalContainer.style.display = 'block';
});

closeModalButton.addEventListener('click', function() {
  modalContainer.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = 'none';
  }
});
