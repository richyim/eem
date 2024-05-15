document.addEventListener('DOMContentLoaded', function () {
    // Function to open URLs in a new tab
    function openUrl(id, url) {
        var element = document.getElementById(id);
        element.addEventListener('click', function() {
            window.open(url, '_blank');
        });
    }

    // Register click event listeners for each list item
    openUrl('hello-world', 'https://richyim.github.io/eem/helloworld/');
    openUrl('alias', 'https://richyim.github.io/eem/alias/');
    openUrl('shutdown-interface', 'https://richyim.github.io/eem/shutdown-interface/');
    openUrl('timer', 'https://richyim.github.io/eem/timer/');
});
