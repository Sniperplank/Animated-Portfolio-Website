window.onload = function () {
    removeCurtain();
    manageButtonsVisibility();
};

window.setInterval(function () {
    ;
}, 1000);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function removeCurtain() {
    await sleep(4500);
    document.getElementById("curtain-0").style.zIndex = "-2";
    document.getElementById("content").style.zIndex = "1";
    document.getElementById("textOnCurtain").style.zIndex = "-2";
}

async function manageButtonsVisibility() {
    await sleep(5200);
    document.getElementById("projectsButton").style.visibility = "visible"
    await sleep(5200);
    document.getElementById("aboutButton").style.visibility = "visible"
    await sleep(5200);
    document.getElementById("contactButton").style.visibility = "visible"
}
