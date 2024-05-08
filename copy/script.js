function fetchAndDisplaySourceCode(url, elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(sourceCode => {
            const codeBlock = document.getElementById(elementId);
            if (codeBlock) {
                codeBlock.textContent = sourceCode;
            }
        })
        .catch(error => {
            console.error('Fetching and displaying source code failed:', error);
        });
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Your existing code here...
    
    // Fetch and display the source code from the external URL
    fetchAndDisplaySourceCode('https://richyim.github.io/eem/local-app/index.html', 'codeBlock');
});
