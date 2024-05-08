// Function to fetch the source code of the URL
async function fetchSourceCode(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        return text;
    } catch (error) {
        console.error('Error fetching source:', error);
        return 'Failed to load source code.';
    }
}

// Display the source code in the text box
(async () => {
    const url = 'https://richyim.github.io/eem/local-app/index.html';
    const sourceCode = await fetchSourceCode(url);
    document.getElementById('sourceCode').value = sourceCode;
})();

// Function to copy text to clipboard
function copyToClipboard() {
    const textarea = document.getElementById('sourceCode');
    textarea.select();
    document.execCommand('copy');
}
