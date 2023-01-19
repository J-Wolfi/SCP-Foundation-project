let icon = document.getElementById('icon');
let content = document.getElementById('content');
let sideMenuLink = document.getElementById('side-menu-link');
icon.addEventListener('click', function(){
    if(icon.classList.contains('active')){
        icon.classList.remove('active');
        content.classList.remove('no-click');
    } 
    else {
        icon.classList.add('active');
        content.classList.add('no-click');
    } 
});
window.addEventListener("resize", function() {
    if(icon.classList.contains('active')){
        icon.classList.remove('active');
        content.classList.remove('no-click');
    }
});
function closeMenu(){
    if(icon.classList.contains('active')){
        icon.classList.remove('active');
        content.classList.remove('no-click');
    } 
}