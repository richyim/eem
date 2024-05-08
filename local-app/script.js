window.addEventListener('DOMContentLoaded', (event) => {
    // Perform the GET request to obtain the current count
    fetch('http://127.0.0.1:8001/')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return response.text();
        })
        .then(count => {
            displayCount(count); // Display the count value on the page
            return count;
        })
        .then(count => {
            // Perform the POST request to increment the count
            return fetch('http://127.0.0.1:8001/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `count=${count}`
            });
        })
        .then(response => {
            // Handle the POST response (if needed)
            if (!response.ok) {
                throw new Error('POST request was not successful.');
            }
            return response.text();
        })
        .catch(error => console.error('Error:', error));
});

function displayCount(count) {
    const container = document.getElementById('counter-container');
    container.innerHTML = ''; // Clear previous count display

    // Split the count into digits and create a box for each digit
    count.split('').forEach(digit => {
        const digitBox = document.createElement('div');
        digitBox.classList.add('digit-box');
        digitBox.textContent = digit;
        container.appendChild(digitBox);
    });
}
