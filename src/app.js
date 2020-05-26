let arrow = document.getElementById('arrow');
arrow.addEventListener('click', function(e) {
    e.preventDefault();
    scroll(0, 860);
});

// $("nav").click(function() {
//     $("#navAnchor").animate({
//         top: 200;
//     });
// };