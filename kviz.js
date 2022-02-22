var radiogomb;
var select;
var marvel;
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

function harmadikfeladat(){
    var harmadik = document.getElementById("harmadik").value;
    marvel = harmadik;
    console.log(marvel);
}

function negyedikfeladat(){
    var negyedik = document.getElementById("negyedik").value;
    kekes = negyedik;
    console.log(kekes);
}

function otodikfeladat(){
    var otodik = document.getElementById("otodik").value;
    film = otodik;
    console.log(film);
}
function ellenorzogomb(){
    var pontszam = 0;
    if(radiogomb == "Naughty Dog"){
        pontszam += 1;
    }
    if(select == "Socket AM4"){
        pontszam += 1;
    }
    if(marvel == "A"){
        pontszam += 1;
    }
    if(kekes == "Mátra"){
        pontszam += 1;
    }
    if(film == "Guy Ritchie"){
        pontszam += 1;
    }
    console.log(pontszam);

    var valaszok = document.getElementById("valaszok").innerHTML = "<h4>Helyes válaszok:</h4><p>1.: Naughty Dog</p><p>2.: Socket AM4</p><p>3.: A</p><p>4.: Mátra</p><p>5.: Guy Ritchie</p>"
    var elertpontszam = document.getElementById("elertpontszam").innerText = "Elért pontszám: " + pontszam;
}