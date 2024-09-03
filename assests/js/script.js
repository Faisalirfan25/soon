const toggleContainer = document.getElementById('toggleContainer');
        const toggleSwitch = document.getElementById('toggleSwitch');
        const emailInput = document.getElementById('emailInput');
        const submitButton = document.getElementById('submitButton');

        function toggleEmailInput() {
            toggleContainer.classList.toggle('active');
            if (toggleContainer.classList.contains('active')) {
                emailInput.style.display = 'block';
            } else {
                emailInput.style.display = 'none';
            }
        }

        toggleSwitch.addEventListener('click', toggleEmailInput);

        submitButton.addEventListener('click', () => {
            // Here you would typically handle the email submission
            // For this example, we'll just close the email input
            toggleEmailInput();
        });