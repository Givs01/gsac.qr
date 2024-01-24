document.addEventListener("DOMContentLoaded", function () {
    var splashScreen = document.getElementById("splash-screen");
    var homePage = document.getElementById("home-page");

    setTimeout(function () {
        splashScreen.style.display = "none";
        homePage.style.display = "block";
    }, 1000);
});
