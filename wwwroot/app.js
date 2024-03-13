window.toggleTheme = function (theme) {
    switch (theme) {
        case "dark":
            document.documentElement.classList.remove("dark");
            break;
        default:
            document.documentElement.classList.add("dark");
            break;
    }
};