console.log("hello world");

window.applicationCache.addEventListener('updateready',
    updateSite, false);

    function updateSite(event) {
        console.log("update function fired");
    window.applicationCache.swapCache();
    location.reload();
}