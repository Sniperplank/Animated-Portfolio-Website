window.onload = function () {
    removeCurtain();
};

async function removeCurtain() {
    await sleep(4500);
    document.getElementById("curtain-0").style.zIndex = "-2";
    document.getElementById("content").style.zIndex = "1";
    document.getElementById("textOnCurtain").style.zIndex = "-2";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}