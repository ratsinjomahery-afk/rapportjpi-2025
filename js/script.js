document.getElementById("createAccount").addEventListener("click", function(){
    window.location.replace("create/create.html");
});

//loginForm
async function sha256(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
}
async function logForm (e){
    e.preventDefault();
    const email = document.getElementById("logEmail").value;
    const password = document.getElementById("logPwd").value;
    
    if (!email || !password) {
        showModalVide("😡 Veuillez remplir tous les champs svp !","ATTENTION !");
        return;
    }
    
    const hashedPassword = await sha256(password);
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const userFound = users.find(user => user.email === email && user.password === hashedPassword);
    
    if (userFound) {
        localStorage.setItem("isLoggedIn", "true");
        const spin = document.getElementById("spinner");
        const textSubmit = document.getElementById("submit");

        const btn = document.getElementById('btnProgress');
        const bar = document.getElementById('progressInside');
        const text = document.getElementById('btnText');

        const disableEmail = document.getElementById('logEmail');
        const disablePassword = document.getElementById('logPwd');

        let progress = 0;
        text.textContent = "0% Loading...";
        spin.className = "spinner-border spinner-border-sm";
        const interval = setInterval(() => {
            progress++;
            bar.style.width = progress + "%";
            if (progress === 0){
                text.textContent = "0% Loading.";
                spin.className = "spinner-border spinner-border-sm";
                textSubmit.disabled = true;
                disableEmail.disabled = true;
                disablePassword.disabled = true;
            } else if (progress === 1){
                text.textContent = "0% Loading..";
                spin.className = "spinner-border spinner-border-sm";
                textSubmit.disabled = true;
                disableEmail.disabled = true;
                disablePassword.disabled = true;
            } else if (progress === 2){
                text.textContent = "0% Loading...";
                spin.className = "spinner-border spinner-border-sm";
                textSubmit.disabled = true;
                disableEmail.disabled = true;
                disablePassword.disabled = true;
            } else if (progress === 3){
                text.textContent = "0% Loading.";
                spin.className = "spinner-border spinner-border-sm";
                textSubmit.disabled = true;
            } else if (progress === 4){
                text.textContent = "0% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 5){
                text.textContent = "0% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 6){
                text.textContent = "0% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 7){
                text.textContent = "0% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 8){
                text.textContent = "0% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 9){
                text.textContent = "0% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 10) {
                text.textContent = "10% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 11){
                text.textContent = "10% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 12){
                text.textContent = "10% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 13){
                text.textContent = "10% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 14){
                text.textContent = "10% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 15){
                text.textContent = "10% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 16){
                text.textContent = "10% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 17){
                text.textContent = "10% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 18){
                text.textContent = "10% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 19){
                text.textContent = "10% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 20){
                text.textContent = "20% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 21){
                text.textContent = "20% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 22){
                text.textContent = "20% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 23){
                text.textContent = "20% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 24){
                text.textContent = "20% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 25){
                text.textContent = "20% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 26){
                text.textContent = "20% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 27){
                text.textContent = "20% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 28){
                text.textContent = "20% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 29){
                text.textContent = "20% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 30){
                text.textContent = "30% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 31){
                text.textContent = "30% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 32){
                text.textContent = "30% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 33){
                text.textContent = "30% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 34){
                text.textContent = "30% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 35){
                text.textContent = "30% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 36){
                text.textContent = "30% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 37){
                text.textContent = "30% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 38){
                text.textContent = "30% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 39){
                text.textContent = "30% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 40){
                text.textContent = "40% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 41){
                text.textContent = "40% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 42){
                text.textContent = "40% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 43){
                text.textContent = "40% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 44){
                text.textContent = "40% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 45){
                text.textContent = "40% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 46){
                text.textContent = "40% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 47){
                text.textContent = "40% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 48){
                text.textContent = "40% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 49){
                text.textContent = "40% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 50){
                text.textContent = "50% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 51){
                text.textContent = "50% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 52){
                text.textContent = "50% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 53){
                text.textContent = "50% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 54){
                text.textContent = "50% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 55){
                text.textContent = "50% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 56){
                text.textContent = "50% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 57){
                text.textContent = "50% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 58){
                text.textContent = "50% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 59){
                text.textContent = "50% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 60){
                text.textContent = "60% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 61){
                text.textContent = "60% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 62){
                text.textContent = "60% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 63){
                text.textContent = "60% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 64){
                text.textContent = "60% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 65){
                text.textContent = "60% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 66){
                text.textContent = "60% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 67){
                text.textContent = "60% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 68){
                text.textContent = "60% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 69){
                text.textContent = "60% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 70){
                text.textContent = "70% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 71){
                text.textContent = "70% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 72){
                text.textContent = "70% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 73){
                text.textContent = "70% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 74){
                text.textContent = "70% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 75){
                text.textContent = "70% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 76){
                text.textContent = "70% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 77){
                text.textContent = "70% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 78){
                text.textContent = "70% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 79){
                text.textContent = "70% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 80){
                text.textContent = "80% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 81){
                text.textContent = "80% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 82){
                text.textContent = "80% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 83){
                text.textContent = "80% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 84){
                text.textContent = "80% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 85){
                text.textContent = "80% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 86){
                text.textContent = "80% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 87){
                text.textContent = "80% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 88){
                text.textContent = "80% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 89){
                text.textContent = "80% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 90){
                text.textContent = "90% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 91){
                text.textContent = "90% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 92){
                text.textContent = "90% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 93){
                text.textContent = "90% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 94){
                text.textContent = "90% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 95){
                text.textContent = "90% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 96){
                text.textContent = "90% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 97){
                text.textContent = "90% Loading..";
                textSubmit.disabled = true;
            } else if (progress === 98){
                text.textContent = "90% Loading...";
                textSubmit.disabled = true;
            } else if (progress === 99){
                text.textContent = "90% Loading.";
                textSubmit.disabled = true;
            } else if (progress === 100){
                text.textContent = "100% Complete !";
                disableEmail.disabled = true;
                disablePassword.disabled = true;
                textSubmit.disabled = true;
                showModalSuccess("😊 Connexion réussie 😉", "Succès 👍");
                setTimeout (()=> {
                    window.location.replace("mg/mg.html");
                }, 3000);
            }

        }, 150); // 


       /* spin.className = "spinner-border spinner-border-sm";
        textSubmit.disabled = true;
        
        setTimeout (()=> {
            textSubmit.textContent = "Analyse des données ...";
        }, 3000);
        
        setTimeout (()=> {
            textSubmit.textContent = "Download ressources ...";
        }, 6000);
        
        setTimeout (()=> {
            textSubmit.textContent = "Presque terminé ...";
        }, 10000);
        
        /*setTimeout (()=> {
            showModalSuccess("😊 Connexion réussie 😉", "Succès 👍");
        }, 13000);
        
        setTimeout (()=> {
            window.location.replace("mg/mg.html");
        }, 15000);*/
    } else {
    showModalVide("🤦‍♂️ Email ou mot de passe incorrect !","ATTENTION !");
    }
}

let btnLog = document.getElementById("submit");
btnLog.addEventListener("click", (e)=>{
    logForm(e);
});

document.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") {
        logForm(e);
    }
});

history.pushState(null, "", location.replace);
window.onpopstate = function () {
    history.pushState(null, "", location.replace);
    showModalVide("😏 Retour désactivé"," ","ATTENTION !");
}

//Modal Alert Vide
function showModalVide(message, title = "Message") {
    const modalBody = document.getElementById("modalAlertBodyVide");
    const modalTitle = document.getElementById("alertModalLabelVide");
    
    modalBody.textContent = message;
    modalTitle.textContent = title;
    
    // Mampiseho ny modal
    let modal = new bootstrap.Modal(document.getElementById('alertModalVide'));
    modal.show();
}

//Modal Alert succès
function showModalSuccess(message, title = "Message") {
    const modalBody = document.getElementById("modalAlertBodySuccess");
    const modalTitle = document.getElementById("alertModalLabelSuccess");
    
    modalBody.textContent = message;
    modalTitle.textContent = title;
    
    // Mampiseho ny modal
    let modal = new bootstrap.Modal(document.getElementById('alertModalSuccess'));
    modal.show();
}





