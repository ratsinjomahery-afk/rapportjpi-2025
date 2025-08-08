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
        const bar = document.getElementById('progressInside');
        const text = document.getElementById('btnText');
        const disableEmail = document.getElementById('logEmail');
        const disablePassword = document.getElementById('logPwd');

    // Disable avy hatrany + cursor
        [textSubmit, disableEmail, disablePassword].forEach(el => el.disabled = true);
        textSubmit.style.setProperty("cursor", "not-allowed", "important");


        let progress = 0;
        spin.className = "spinner-border spinner-border-sm";

        const interval = setInterval(() => {
            progress++;
            bar.style.width = progress + "%";

            if (progress < 100) {
            // Mamerina ny texte: feno isan-decaine, mihodina ny "."
                const percentStep = Math.floor(progress / 10) * 10;
                const dots = ".".repeat((progress % 3) + 1);
                text.textContent = `${percentStep}% Loading${dots}`;
            } else {
                text.textContent = "100% Complete !";
                clearInterval(interval);
                showModalSuccess("😊 Connexion réussie 😉", "Succès 👍");
                setTimeout(() => {
                    window.location.replace("mg/mg.html");
                }, 3000);
            }
        }, 150);

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





