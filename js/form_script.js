document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Form validation (simple example)
    if (!name || !email || !subject || !message) {
        alert('Please fill out all required fields.');
        return;
    }

    // Display a success message
    document.getElementById('responseMessage').innerText = 'Thank you for contacting us. We will get back to you soon!';

    // Reset the form
    document.getElementById('contactForm').reset();
});
