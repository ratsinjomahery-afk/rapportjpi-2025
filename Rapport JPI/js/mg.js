if (localStorage.getItem("isLoggedIn") !== "true"){
    window.location.replace("../login.html");
}

document.getElementById("logout").addEventListener("click",function() {
    
    showModalLogout("🫡 Te hivoaka amin'ity pejy ity ve ianao ?", "TANDREMO !");
});

// boutton terminer le rapport
const fin = document.getElementById("finish");
fin.addEventListener("click", function(e){
    e.preventDefault();
    redact(e);
});

//oui pour sortir
function agree(){
    window.location.replace("../login.html");
    localStorage.removeItem("isLoggedIn");
}

//bloquer la retour
history.pushState(null, "", location.replace);
window.onpopstate = function () {
    history.pushState(null, "", location.replace);
    showModalNotice("😏 Tsy afaka miverina ianao","TANDREMO !");
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
    
    // format date mg
    const date = new Date(dateStr);
    
    const options = {
        weekday: 'long',  // anaran'ny andro
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };
    const andro = ["Alahady", "Alatsinainy", "Talata", "Alarobia", "Alakamisy", "Zoma", "Asabotsy"];
    const volana = [
        "Janoary", "Febroary", "Martsa", "Aprily", "Mey", "Jona",
        "Jolay", "Aogositra", "Septambra", "Oktobra", "Novambra", "Desambra"
    ];
    
    const anaranAndro = andro[date.getDay()];
    const jour = String(date.getDate()).padStart(2, '0');
    const anaranVolana = volana[date.getMonth()];
    const taona = date.getFullYear();
    
    const formated = `${anaranAndro} ${jour} ${anaranVolana} ${taona}`;
    
    // format heure
    const [hour, minute] = sTimeStr.split(":"); // Maka ora sy minitra
    
    const formattedStime = `${parseInt(hour)} ora ${parseInt(minute)} minitra`;
    
    // format heure
    const [hour1, minute2] = eTimeStr.split(":"); // Maka ora sy minitra
    
    const formattedEtime = `${parseInt(hour1)} ora ${parseInt(minute2)} minitra`;
    
    // condition si formulaire vide
    if (!nbOne || !nbTwo || !inpPlace || !dateStr || !sTimeStr || !eTimeStr || !lead || !nbrParticipant || !inpAgenda || !inpObjective){
        if (!inpPlace || !dateStr || !sTimeStr || !eTimeStr || !inpAgenda || !inpObjective){
            showModalNotice("😡 Fenoy daholo ny fafana azafady !","TANDREMO !");
        } else if (checkboxes.length === 0 ){
            showModalNotice("😏 Iza avy ny Birao tonga nanatrika ?","TANDREMO !");
        } else if (checkedValuesTwo.length === 0 ){
            showModalNotice("😏 Iza avy no mpitan-tsoratra ?","TANDREMO !");
        } else if (!nbrParticipant){
            showModalNotice("😏 Firy ny tonga nanatrika ?","TANDREMO !");
        } else if (!nbOne || !nbTwo){
            showModalNotice("😏 Tatitra faha-firy io ?","TANDREMO !");
        }
        
        const start = new Date("2025-08-02T" + sTimeStr + ":00");
        const end = new Date("2025-08-02T" + eTimeStr + ":00");
        
        // si heure de début inférieure heure de fin
        if (start >= end) {
            showModalNotice("⏱️ Jereo ny ora nanombohana sy namaranana fa tsy lojika !","TANDREMO !");
            return;
        }
        
        // si toutes les formulaires ne son pas vide
    } else {
        const formData ={
            OutNbOne: nbOne,
            OutNbTwo : nbTwo,
            outPlace : inpPlace,
            outDate : formated,
            outStime : formattedStime,
            outEtime: formattedEtime,
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
            window.location.href ="../output/mg/outmg.html";
        }, 12000);
    }
    
    //alert(checkedValues.join(", "));
    
    
}


/*
<input type="date" id="myDate">
<button onclick="formatDateFr()">Alefa</button>

<p id="result"></p>

<script>
function formatDateFr() {
const dateStr = document.getElementById("myDate").value;
if (!dateStr) return alert("Misafidiana daty!");

const date = new Date(dateStr);

const options = {
weekday: 'long',
day: '2-digit',
month: 'long',
year: 'numeric'
};

// Maka daty amin'ny teny frantsay
let formatted = date.toLocaleDateString('fr-FR', options);

// Asiana majuscule ny litera voalohany
formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);

document.getElementById("result").innerText = formatted;
}
</script>



<input type="date" id="myDate">
<button onclick="formatDateMalagasy()">Alefa</button>

<p id="result"></p>

<script>
function formatDateMalagasy() {
const dateStr = document.getElementById("myDate").value;
if (!dateStr) return alert("Misafidiana daty!");

const date = new Date(dateStr);

const andro = ["Alahady", "Alatsinainy", "Talata", "Alarobia", "Alakamisy", "Zoma", "Asabotsy"];
const volana = [
"Janoary", "Febroary", "Martsa", "Aprily", "Mey", "Jona",
"Jolay", "Aogositra", "Septambra", "Oktobra", "Novambra", "Desambra"
];

const anaranAndro = andro[date.getDay()];
const jour = String(date.getDate()).padStart(2, '0');
const anaranVolana = volana[date.getMonth()];
const taona = date.getFullYear();

const result = `${anaranAndro} ${jour} ${anaranVolana} ${taona}`;

document.getElementById("result").innerText = result;
}
</script>


time
<input type="time" id="myTime">
<button onclick="formatHeureMalagasy()">Alefa</button>

<p id="result"></p>

<script>
function formatHeureMalagasy() {
const timeStr = document.getElementById("myTime").value; // ex: "12:53"
if (!timeStr) return alert("Safidio ny ora!");

const [hour, minute] = timeStr.split(":"); // Maka ora sy minitra

const formatted = `${parseInt(hour)} ora ${parseInt(minute)} minitra`;

document.getElementById("result").innerText = formatted;
}
</script>


*/