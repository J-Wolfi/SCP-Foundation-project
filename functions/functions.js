let icon = document.getElementById('icon');
icon.addEventListener('click', function(){
    if(icon.classList.contains('active')){
        icon.classList.remove('active');
    } else icon.classList.add('active');
});

window.addEventListener("resize", function() {
    if(icon.classList.contains('active')){
        icon.classList.remove('active');
    }
});