document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your user ID
    emailjs.init('YOUR_USER_ID');

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!form.checkValidity()) {
            event.stopPropagation();
            form.classList.add('was-validated');
            return;
        }

        const status = document.getElementById('status');
        const serviceID = 'YOUR_SERVICE_ID';
        const templateID = 'YOUR_TEMPLATE_ID';

        // Send the email
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                status.innerHTML = 'Message sent successfully!';
                status.style.color = 'green';
                form.reset();
                form.classList.remove('was-validated');
            }, (err) => {
                status.innerHTML = 'Failed to send message. Please try again later.';
                status.style.color = 'red';
                console.error('EmailJS Error:', err);
            });
    });

    // Theme switching logic
    const savedTheme = localStorage.getItem('theme') || 'light';
    switchTheme(savedTheme);

    const themeSelect = document.getElementById('theme-select');
    themeSelect.value = savedTheme;
});

function switchTheme(theme) {
    const body = document.body;

    // Remove all theme classes
    body.classList.remove('light-mode', 'dark-mode', 'blue-mode');
    // Add the selected theme class
    body.classList.add(`${theme}-mode`);

    // Save the selected theme in local storage
    localStorage.setItem('theme', theme);
}
