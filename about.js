<script>
    document.addEventListener('DOMContentLoaded', function() {
        var elements = document.querySelectorAll('b1, b3, p');

        elements.forEach(function(element) {
            element.addEventListener('touchstart', function() {
                element.style.transform = 'scale(1.03)';
                element.style.boxShadow = '5px 5px 15px rgba(255, 255, 255, 0.1)';
            });

            element.addEventListener('touchend', function() {
                element.style.transform = '';
                element.style.boxShadow = '';
            });
        });
    });
</script>
