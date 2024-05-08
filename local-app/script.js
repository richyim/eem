window.addEventListener('DOMContentLoaded', (event) => {
    fetch('http://127.0.0.1:8001/', {
        mode: 'no-cors' // Include no-cors mode in the fetch options
    })
    .then(response => {
        if (!response.ok && response.type !== 'opaque') {
            throw new Error('Network response was not ok.');
        }
        return response.text(); // This won't work with no-cors mode, as the response is opaque
    })
    .then(count => {
        displayCount(count); // Since we cannot read the response, this will not work as expected
        return count;
    })
    .then(count => {
        fetch('http://127.0.0.1:8001/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `count=${count}`,
            mode: 'no-cors' // Include no-cors mode in the fetch options
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
