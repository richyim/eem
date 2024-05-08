window.addEventListener('DOMContentLoaded', (event) => {
    fetch('http://127.0.0.1:8001/', {
        mode: 'no-cors' // This mode will prevent you from reading the response
    })
        .then(response => response.text())
        .then(count => {
            displayCount(count);
            return count;
        })
        .then(count => {
            // After displaying the count, send a POST request to increment it
            fetch('http://127.0.0.1:8001/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `count=${count}`
                mode: 'no-cors'
            });
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
