// Show the message page when clicking the first button
function showMessagePage() {
    document.getElementById("landing-page").classList.remove("active");
    document.getElementById("message-page").classList.add("active");
}

window.onload = () => {
    const music = document.getElementById('background-music');
    music.muted = false; // Unmute after page loads
  };
  