const btn = document.querySelector("input[type=submit]");

// Source - https://stackoverflow.com/a/22938571
// Posted by Girish
// Retrieved 2026-06-29, License - CC BY-SA 3.0

function checkboxes(){
    var inputElems = document.getElementsByTagName("input"),
    count = 0;

    for (var i=0; i<inputElems.length; i++) {       
        if (inputElems[i].type == "checkbox" && inputElems[i].checked == true){
            count++;
        }
    }
    /*alert(count);*/
    return count;
}

class Game {
    constructor(name, description, link, isChecked) {
        this.name = name;
        this.description = description;
        this.link = link;
        this.isChecked = isChecked;
    }
}



btn.addEventListener("click", (e) => {
  e.preventDefault();

    for (let i = 0; i < checkboxes(); i++) {
        if (document.getElementById("game1").checked) {
            window.open("https://www.nytimes.com/games/wordle/index.html");
            i += 1;
        }
        if (document.getElementById("game2").checked) {
            window.open("https://worldle.teuteuf.fr/");
            i += 1;
        }
        if (document.getElementById("game3").checked) {
            window.open("https://crossherd.clevergoat.com/");
            i += 1;
        }
        if (document.getElementById("game4").checked) {
            window.open("https://stacked.clevergoat.com/");
            i += 1;
        }
        if (document.getElementById("game5").checked) {
            window.open("https://www.nytimes.com/games/connections");
            i += 1;
        }
        
    }
});