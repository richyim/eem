document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var textInput = document.getElementById('textInput').value;
    var emailInput = document.getElementById('emailInput').value;
    
    // Replace with your actual access token and Webex Teams recipient email
    var accessToken = 'YOUR_ACCESS_TOKEN_HERE';
    var recipientEmail = emailInput; // Or the specific email you want to send a message to

    // Webex Teams API endpoint for creating messages
    var webexUrl = 'https://webexapis.com/v1/messages';

    // HTTP headers with the access token for authorization
    var headers = {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json'
    };

    // The body of the POST request
    var payload = {
        'toPersonEmail': recipientEmail,
        'text': textInput
    };

    // Make the POST request to send the message
    fetch(webexUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Message sent:', data);
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message: ' + error.message);
    });
});
