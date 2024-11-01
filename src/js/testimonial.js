/* SCRIPT PÁGINA TESTIMONIOS */
function changeVideo(videoSrc) {
    const mainVideo = document.getElementById('main-video');
    mainVideo.src = videoSrc;
    mainVideo.play(); // Inicia la reproducción automáticamente
}