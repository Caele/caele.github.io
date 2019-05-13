import contents from "./contents.js";

function init() {
    const root = document.getElementById("root");
    root.innerHTML = contents();
};

init();