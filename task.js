let modal = document.getElementById('myModal');


let btn = document.getElementById("myBtn");


let span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
}


span.onclick = function() {
    modal.style.display = "none";
    document.body.style.position = '';
    document.body.style.top = '';
}


