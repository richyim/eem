document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Prepare data to be sent in the fetch request
    var formData = {
        text: document.getElementById('textInput').value,
        email: document.getElementById('emailInput').value
    };
    
    // Example fetch request (this won't actually work unless you have an endpoint to send data to)
    fetch('your-endpoint-url', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'mode': 'no-cors' // Usually 'no-cors' is used in the options object, not headers
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
});
