var radiogomb;
var select;
var kekes;
var film;

function elsofeladat(){
    var elso = document.getElementsByName("radiogomb");
    for(let i = 0; i < elso.length; i++){
        if(elso[i].checked){
            console.log(elso[i].value);
            radiogomb = elso[i].value;
        }
    }
}

function masodikfeladat(){
    var masodik = document.getElementById("masodik");
    select = masodik.options[masodik.selectedIndex].value;
    console.log(masodik.options[masodik.selectedIndex].value);
}

function negyedikfeladat(){
    var negyedik = document.getElementById("negyedik");
    kekes = negyedik;
    console.log(kekes);
}

function otodikfeladat(){
    var otodik = documnet.getElementById("otodik");
    film = otodik;
    console.log(film);
}