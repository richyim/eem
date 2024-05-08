// Function to fetch the source code of the URL
async function fetchSourceCode(url, elementId) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        document.getElementById(elementId).value = text;
    } catch (error) {
        console.error('Error fetching source:', error);
        document.getElementById(elementId).value = 'Failed to load source code.';
    }
}

// Fetch and display the source code in the text boxes
(async () => {
    const urls = {
        html: 'https://richyim.github.io/eem/local-app/index.html',
        js: 'https://richyim.github.io/eem/copy/script.js',
        css: 'https://richyim.github.io/eem/copy/styles.css',
    };
    await fetchSourceCode(urls.html, 'sourceHTML');
    await fetchSourceCode(urls.js, 'sourceJS');
    await fetchSourceCode(urls.css, 'sourceCSS');
})();

// Function to copy text to clipboard
function copyToClipboard(elementId) {
    const textarea = document.getElementById(elementId);
    textarea.select();
    document.execCommand('copy');
}
