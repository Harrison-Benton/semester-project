// Select modal elements
const faqModal = document.getElementById('faqModal');
const faqTrigger = document.querySelector('.faq-link'); // The clickable div/link
const closeButton = document.querySelector('.close-button');

// Open the modal when the clickable div is clicked
faqTrigger.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  faqModal.style.display = 'block'; // Show the modal
});

// Close the modal when the close button is clicked
closeButton.addEventListener('click', () => {
  faqModal.style.display = 'none'; // Hide the modal
});

// Close the modal by clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === faqModal) {
    faqModal.style.display = 'none';
  }
});
