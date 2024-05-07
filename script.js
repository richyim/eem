document.addEventListener('DOMContentLoaded', function () {
    var helloWorldItem = document.getElementById('hello-world');
    
    helloWorldItem.addEventListener('click', function() {
        window.open('https://richyim.github.io/eem/helloworld/', '_blank');
    });
});
