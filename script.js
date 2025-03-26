document.addEventListener("DOMContentLoaded", function () {
    const themeButton = document.getElementById("themeButton");
    const currentTheme = localStorage.getItem("theme");

    // Aplica o tema salvo
    if (currentTheme === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
        themeButton.textContent = "☀️";
    }

    themeButton.addEventListener("click", function () {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            document.documentElement.setAttribute("data-theme", "light");
            localStorage.setItem("theme", "light");
            themeButton.textContent = "🌙";
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            localStorage.setItem("theme", "dark");
            themeButton.textContent = "☀️";
        }
    });
});
