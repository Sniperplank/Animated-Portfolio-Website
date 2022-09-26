window.onload = function () {
    removeCurtain();
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
    document.getElementById("textOnCurtain-div").style.zIndex = "-2";
    document.getElementById("homeButton").style.zIndex = "1";
    document.getElementById("projectsButton").style.zIndex = "1";
    document.getElementById("aboutButton").style.zIndex = "1";
    document.getElementById("contactButton").style.zIndex = "1";
    document.getElementById("pageTitle").style.zIndex = "1";
    document.getElementById("pageInfo").style.zIndex = "1";
}
