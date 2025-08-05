if (localStorage.getItem("isLoggedIn") !== "true"){
    window.location.replace("../index.html");
}

document.getElementById("logout").addEventListener("click",function() {
    showModalLogout("🫡 Voulez-vous vraiment quitter cette page ?", "ATTENTION !");
});

// boutton terminer le rapport
const fin = document.getElementById("finish");
fin.addEventListener("click", function(e){
    e.preventDefault();
    redact(e);
});

//bloquer la retour
history.pushState(null, "", location.replace);
window.onpopstate = function () {
    history.pushState(null, "", location.replace);
    showModalNotice("😏 Retour désactivé.","ATTENTION !");
}

//oui pour sortir
function agree(){
    window.location.replace("../index.html");
    localStorage.removeItem("isLoggedIn");
}

function loadeng(){
    window.location.replace("../eng/eng.html");
}

function loadmg(){
    window.location.replace("../mg/mg.html");
}

function  loadfr(){
    window.location.replace("../fr/français.html");
}


// fonction Modal logout
function showModalLogout(message, title = "Message") {
    const modalBody = document.getElementById("modalAlertBodyLogout");
    const modalTitle = document.getElementById("alertModalLabelLogout");
    
    modalBody.textContent = message;
    modalTitle.textContent = title;
    
    // show modal
    let modal = new bootstrap.Modal(document.getElementById('alertModalLogout'));
    modal.show();
}

// fonction Modal notice
function showModalNotice(message, title = "Message") {
    const modalBody = document.getElementById("modalAlertBodyNotice");
    const modalTitle = document.getElementById("alertModalLabelNotice");
    
    modalBody.textContent = message;
    modalTitle.textContent = title;
    
    // Mampiseho ny modal
    let modal = new bootstrap.Modal(document.getElementById('alertModalNotice'));
    modal.show();
}

// fonction Modal succès
function showModalSuccess(message, title = "Message") {
    const modalBody = document.getElementById("modalAlertBodySuccess");
    const modalTitle = document.getElementById("alertModalLabelSuccess");
    
    modalBody.textContent = message;
    modalTitle.textContent = title;
    
    // Mampiseho ny modal
    let modal = new bootstrap.Modal(document.getElementById('alertModalSuccess'));
    modal.show();
}

function redact (e){
    e.preventDefault();
    const nbOne = document.getElementById("numberOne").value;
    const nbTwo = document.getElementById("numberTwo").value;
    const inpPlace = document.getElementById("inputPlace").value;
    const dateStr = document.getElementById("inputDate").value;
    const sTimeStr = document.getElementById("s_time").value;
    const eTimeStr = document.getElementById("e_time").value;
    const lead = document.getElementById("leaderMeeting").value;
    const nbrParticipant = document.getElementById("numberParticipant").value;
    const inpAgenda = document.getElementById("InputAgenda").value;
    const inpObjective = document.getElementById("InputObjective").value;
    
    //checkbox boardMembers Value
    const checkedValues = [];
    const checkboxes = document.querySelectorAll('input[name="option"]:checked');
    
    checkboxes.forEach((checkbox) => {
        checkedValues.push(checkbox.value);
    });
    
    // chekbox secretariat Value
    const checkedValuesTwo = [];
    const checkboxesTwo = document.querySelectorAll('input[name="option1"]:checked');
    
    checkboxesTwo.forEach((checkbox) => {
        checkedValuesTwo.push(checkbox.value);
    });
    
    // format date fr
    const date = new Date(dateStr);
    
    const options = {
        weekday: 'long',  // anaran'ny andro
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };
    const andro = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const volana = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Séptembre", "Octobre", "Novembre", "Décembre"
    ];
    
    const anaranAndro = andro[date.getDay()];
    const jour = String(date.getDate()).padStart(2, '0');
    const anaranVolana = volana[date.getMonth()];
    const taona = date.getFullYear();
    
    const formated = `${anaranAndro} ${jour} ${anaranVolana} ${taona}`;
    
    // format heure français heure de début
    const [hour, minute] = sTimeStr.split(":"); // Maka ora sy minitra

    const formatedfr = `${parseInt(hour)} heure ${parseInt(minute)} minutes`;
    
    // format heure anglais end Time
    const [hourfr, minutefr] = eTimeStr.split(":"); // Maka ora sy minitra

    const formattedfr = `${parseInt(hourfr)} heure ${parseInt(minutefr)} minutes`;
    
    // condition si formulaire vide
    if (!nbOne || !nbTwo || !inpPlace || !dateStr || !sTimeStr || !eTimeStr || !lead || !nbrParticipant || !inpAgenda || !inpObjective){
        if (!inpPlace || !dateStr || !sTimeStr || !eTimeStr || !inpAgenda || !inpObjective){
            showModalNotice("😡 Merci de remplir tous les champs !","ATTENTION !");
        } else if (checkboxes.length === 0 ){
            showModalNotice("😏 Qui parmi les membres du bureau étaient présents ?","ATTENTION !");
        } else if (checkedValuesTwo.length === 0 ){
            showModalNotice("😏 Qui a été le secrétaire ?","ATTENTION !");
        } else if (!nbrParticipant){
            showModalNotice("😏 Combien de personnes étaient présentes ?","ATTENTION !");
        } else if (!nbOne || !nbTwo){
            showModalNotice("😏 C’est quel numéro de rapport ?","ATTENTION !");
        }
        
        const start = new Date("2025-08-02T" + sTimeStr + ":00");
        const end = new Date("2025-08-02T" + eTimeStr + ":00");
        
        // si heure de début inférieure heure de fin
        if (start >= end) {
            showModalNotice("⏱️ The start and end times are not logical, please review them. !","ATTENTION !");
            return;
        }
        
        // si toutes les formulaires ne son pas vide
    } else {
        const formData ={
            OutNbOne: nbOne,
            OutNbTwo : nbTwo,
            outPlace : inpPlace,
            outDate : formated,
            outStime : formatedfr,
            outEtime: formattedfr,
            outLead: lead,
            outBroadMembers : checkedValues.join(", "),
            outParticipants: nbrParticipant,
            outAgenda : inpAgenda,
            outObjective: inpObjective,
            outSecretariat : checkedValuesTwo.join("<br>"),
        }
        
        // stocker la session
        sessionStorage.setItem("formData", JSON.stringify(formData));
        let spin = document.getElementById("spinMg");
        let textFinish = document.getElementById("finish");
        spin.className = "spinner-border spinner-border-sm";
        textFinish.textContent = "Exportation en cours ...";
        textFinish.disabled = true;
        
        setTimeout (()=> {
            textFinish.textContent = "Analyse ...";
        }, 3000);
        
        setTimeout (()=> {
            textFinish.textContent = "Correction ...";
        }, 6000);
        
        setTimeout (()=> {
            textFinish.textContent = "Presque terminé ...";
        }, 8000);
        
        setTimeout (()=> {
            showModalSuccess("😊 Exportation réussie 😉", "Succès 👍");
        }, 10000);
        
        setTimeout (()=> {
            window.location.href ="../output/fr/outfr.html";
        }, 12000);
    }
    
    //alert(checkedValues.join(", "));
    
    
}



/*document.getElementById("logout").addEventListener("click",()=> {
    
showModalLogout("🫡 Are you sure yout want to leave this page ?", "ATTENTION !");
});

function agree(){
window.location.replace("../login.html");
localStorage.removeItem("isLoggedIn");
}

if (localStorage.getItem("isLoggedIn") !== "true"){
window.location.replace("../login.html");
}

history.pushState(null, "", location.replace);
window.onpopstate = function () {
history.pushState(null, "", location.replace);
alert("Retour désactivé");
}

if (localStorage.getItem("isLoggedIn") !== "true"){
window.location.replace("../login.html");
}

function loadfr(){
window.location.replace("../fr/français.html");
}

function loadeng(){
window.location.replace("../eng/eng.html");
}

function loadmg(){
window.location.replace("../mg/mg.html");
}

// fonction Modal
function showModalLogout(message, title = "Message") {
const modalBody = document.getElementById("modalAlertBodyLogout");
const modalTitle = document.getElementById("alertModalLabelLogout");

modalBody.textContent = message;
modalTitle.textContent = title;

// Mampiseho ny modal
let modal = new bootstrap.Modal(document.getElementById('alertModalLogout'));
modal.show();



format heure

<input type="time" id="myTime">
<button onclick="formatSpokenTime()">Submit</button>

<p id="result"></p>

<script>
function formatSpokenTime() {
const timeStr = document.getElementById("myTime").value;
if (!timeStr) return alert("Please select a time!");

let [hour, minute] = timeStr.split(":").map(Number);

const ampm = hour >= 12 ? "PM" : "AM";

// 24h to 12h conversion
const hour12 = hour % 12 === 0 ? 12 : hour % 12;
const nextHour12 = (hour12 % 12) + 1;

let result = "";

if (minute === 0) {
result = `${hour12} o'clock ${ampm}`;
} else if (minute === 15) {
result = `quarter past ${hour12} ${ampm}`;
} else if (minute === 30) {
result = `half past ${hour12} ${ampm}`;
} else if (minute === 45) {
result = `quarter to ${nextHour12} ${ampm}`;
} else if (minute < 30) {
result = `${minute} minutes past ${hour12} ${ampm}`;
} else {
    result = `${60 - minute} minutes to ${nextHour12} ${ampm}`;
}

document.getElementById("result").innerText = result;
}
</script>


}*/