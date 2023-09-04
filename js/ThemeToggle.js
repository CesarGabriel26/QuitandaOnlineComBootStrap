//===================================================================================//
var header = document.getElementById('header')
var mains = document.getElementById('main')
var footer = document.getElementById('footer')

setInterval(() => {
    mains.style.minHeight = `calc(100% - (${header.clientHeight}px + ${footer.clientHeight}px + 18px))` 
}, 125);
