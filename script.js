// 1. Button Click Event
const clickButton = document.getElementById('clickButton');
clickButton.addEventListener('click', () => {
    clickButton.textContent = 'You clicked me!';
    clickButton.style.backgroundColor = '#28a745';
});

// 2. Hover Effect
const hoverBox = document.getElementById('hoverBox');
hoverBox.addEventListener('mouseover', () => {
    hoverBox.style.backgroundColor = '#e0e0e0';
});
hoverBox.addEventListener('mouseout', () => {
    hoverBox.style.backgroundColor = '';
});

// 3. Keypress Detection
const keyPressInput = document.getElementById('keyPressInput');
keyPressInput.addEventListener('keypress', (event) => {
    console.log(`Key pressed: ${event.key}`);
});

// 4. Image Gallery Slideshow (Basic)
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        item.style.transform = 'scale(1.1)';
        setTimeout(() => {
            item.style.transform = '';
        }, 500);
    });
});

// 5. Tabs / Accordion
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
        const tabId = e.target.id;
        const contentId = 'content' + tabId.slice(-1);
        const content = document.getElementById(contentId);

        // Hide all tab contents
        document.querySelectorAll('.tab-content').forEach(tc => tc.style.display = 'none');

        // Show current content
        content.style.display = 'block';
    });
});

// 6. Form Validation
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }

    if (password.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();
    }
});