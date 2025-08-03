const data = sessionStorage.getItem("formData");

if (data){
    const obj = JSON.parse(data);
    document.getElementById("OutNumberOne").textContent = `${obj.OutNbOne} `;
    document.getElementById("OutNumberTwo").textContent = `${obj.OutNbTwo}`;
    document.getElementById("place").textContent = `${obj.outPlace}`;
    document.getElementById("date").innerText = `${obj.outDate}`;
    document.getElementById("timeStart").innerText= `${obj.outStime}`;
    document.getElementById("timeEnd").innerText = `${obj.outEtime}`;
    document.getElementById("meetingLeader").textContent = `${obj.outLead}`;
    document.getElementById("broadMembers").textContent = `${obj.outBroadMembers}`;
    document.getElementById("numberParticipants").textContent = `${obj.outParticipants}`;
    document.getElementById("getAgenda").innerText = `${obj.outAgenda}`;
    document.getElementById("getObjective").innerText = `${obj.outObjective}`;
    document.getElementById("getSecretariat").innerHTML = `${obj.outSecretariat}`;

} else {
    alert("Donné vide");
}


