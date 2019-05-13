import contents from "./contents";

function init() {
    const root = document.getElementById("root");
    root.innerHTML = contents();
};

init();