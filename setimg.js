var count = 0;

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();  
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));  
    var expires = "expires=" + d.toUTCString();  
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function modebtn() {
    count += 1;
    var btn1 = document.getElementById("darkbtn");
    btn1.classList.toggle("text-light");
    btn1.classList.toggle("border");
    if (count % 2 != 0) {
        btn1.innerHTML = "&#9728;";
        setCookie("mode", "1", 10); /* will clear in given time */
        // document.cookie = "mode=1"  /* will clear when browser closed */

    } else {
        btn1.innerHTML = "&#9790;";
        setCookie("mode", "0", 10); /* will clear in given time */
        // document.cookie = "mode=0"  /* will clear when browser closed */
    }
}

function darkMode() {
    var ele1 = document.body;
    var ele2 = document.getElementById("navbar");
    var ele3 = document.getElementById("table");
    ele1.classList.toggle("dark-mode");
    ele2.classList.toggle("navbar-dark");
    ele2.classList.toggle("bg-dark");
    ele3.classList.toggle("text-light");
    var x = document.getElementsByName("jut");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.toggle("black-mode");
    }
    modebtn();
}

function darkMode2() {
    var ele1 = document.body;
    var ele2 = document.getElementById("navbar");
    ele1.classList.toggle("dark-mode");
    ele2.classList.toggle("navbar-dark");
    ele2.classList.toggle("bg-dark");
    var x = document.getElementsByName("row1");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].classList.toggle("black-mode");

    }
    modebtn();
}