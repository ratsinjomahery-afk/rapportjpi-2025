document.getElementById("createAccount").addEventListener("click", function(){
    window.location.href="create/create.html";
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
        let spin = document.getElementById("spinner");
        let textSubmit = document.getElementById("submit");
        spin.className = "spinner-border spinner-border-sm";
        textSubmit.textContent = "Veuillez patientez 😊...";
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
        
        setTimeout (()=> {
            showModalSuccess("😊 Connexion réussie 😉", "Succès 👍");
        }, 13000);
        
        setTimeout (()=> {
            window.location.replace("mg/mg.html");
        }, 15000);
    } else {
        showModalVide("🤦‍♂️ Email ou mot de passe incorrect !","ATTENTION !");
        email.textContent = "";
        password.textContent = "";
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

history.pushState(null, "", location.href);
window.onpopstate = function () {
    history.pushState(null, "", location.href);
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







