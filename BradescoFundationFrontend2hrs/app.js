'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if (className == "light-theme"){
            this.TextContent = "Dark";
    } else {
            this.TextContent = "Light";
    }
    console.log('Current class name:' + className);
});