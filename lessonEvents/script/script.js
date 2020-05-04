window.addEventListener('resize', function () {
    document.getElementById('window-width').innerHTML = `${window.innerWidth} - ${window.innerHeight}`;
});
window.addEventListener("wheel", function () {
    alert('В тебе хоть мишка є?');
});
document.addEventListener("mousemove", function (event) {
    console.log(event);
    document.getElementById('windowX').innerHTML = `${event.screenX}`;
});
// window.addEventListener("mousemove", function (event) {
//     document.getElementById('windowY').innerHTML = ``;
// });