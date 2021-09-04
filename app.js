function animateValue(id, start, end, duration) {
    if (start === end) return;
    let range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const buttonCollor = document.querySelector("#playButton");
    buttonCollor.setAttribute("class", "colorUp")
    const obj = document.getElementById(id);
    const timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}




function myFunction() {
    start = Math.floor(Math.random() * 1000);
    end = Math.floor(Math.random() * 1000);
    animateValue("value", start, end, 5000)
     setTimeout(goodbye, 6000)
}











 function CustomAlert() {
    this.render = function (dialog) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        var dialogoverlay = document.getElementById('dialogoverlay');
        var dialogbox = document.getElementById('dialogbox');
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        document.getElementById('dialogboxhead').innerHTML = "The site says...";
        document.getElementById('dialogboxbody').innerHTML = "Too bad! You lost!";
        document.getElementById('dialogboxfoot').innerHTML = '<button id="dialogClass" onclick="Alert.ok()">OK</button>';
    }
    this.ok = function () {
        document.getElementById('dialogbox').style.display = "none";
        document.getElementById('dialogoverlay').style.display = "none";
    }
}


function goodbye (){
    var Alert = new CustomAlert();
    Alert.render()

}







