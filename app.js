let arrow = document.getElementById('arrow');
arrow.addEventListener('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(".tech-skills").offset().top
    }, 1500);
});