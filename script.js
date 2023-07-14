// Get form elements
const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Get preview elements
const previewName = document.getElementById('preview-name');
const previewEmail = document.getElementById('preview-email');
const previewMessage = document.getElementById('preview-message');

// Listen for input events on the form inputs
form.addEventListener('input', updatePreview);

// Update the preview section with the input values in real time
function updatePreview() {
    previewName.textContent = nameInput.value;
    previewEmail.textContent = emailInput.value;
    previewMessage.textContent = messageInput.value;
}
