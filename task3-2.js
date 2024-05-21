// Toggle Submenu
function toggleSubmenu() {
    const submenu = document.getElementById('submenu');
    submenu.style.display = submenu.style.display === 'none' || submenu.style.display === '' ? 'block' : 'none';
  }
  
  // Select Form Type and Update Menu Item
  function selectFormType(type) {
    const formTypeMenu = document.getElementById('formTypeMenu');
    formTypeMenu.textContent = type;
    toggleSubmenu(); // Close the submenu after selection
  }
  
  // Form Validation and Submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    let valid = true;
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
  
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
  
    // Reset error messages
    nameError.textContent = '';
    emailError.textContent = '';
  
    // Name validation
    if (name.length < 3) {
      nameError.textContent = 'Name must be at least 3 characters long';
      valid = false;
    }
  
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address';
      valid = false;
    }
  
    if (valid) {
      const contentDiv = document.getElementById('content');
      contentDiv.textContent = 'Submitted successfully';
    }
  });
  