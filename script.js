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
const keypressInput = document.getElementById('keypressInput');
keypressInput.addEventListener('keypress', (event) => {
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
        const contentId = 'content' + e.target.id.slice(-1);
        const content = document.getElementById(contentId);
        
        // Toggle content visibility
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
});

// 6. Form Validation
const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    // Email validation
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
