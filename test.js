//let max=999;
//let min =5;
//let choice = Math.floor(Math.random() *(max-min+1))+ min;
//let result= choice/5;
//let modulo =choice-(5 *result);
//console.log(`Si l'on divise ${choice} par 5, le reste est de ${modulo}`)

//function calculerReste(num){
    //let num=("Enter un nombre");
//num=Number(num);
//let reste= num % 5;

//if(!isNaN){
    //console.log(`si l'on divise ${num} par 5 le reste est de ${reste}`);
//}else{
    //console.log("Veuillez entrer un nombre");
//}
//}
//calculerReste(36)

//function currentandfuctureage(age,targetage){
   //let currentage = age *365
   //let fuctureage = targetage * 365
   
   //if(targetage > age){
    //let difference = fuctureage - currentage
   //console.log(`vous avez ${currentage} jours et vous devez atteindre ${fuctureage} jours pour atteindre votre ${targetage}`)
   //}

   //else{
    //console.log(`Error`)
//}
//}
//currentandfuctureage(45,105)

document.getElementById("inscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    
    let numero = document.getElementById("numero").value;
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;
    let sexe = document.getElementById("sexe").value;

    
    if (!numero || !nom || !prenom || !age || !sexe) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    
    let tableBody = document.getElementById("tableBody");
    let newRow = tableBody.insertRow();
    newRow.insertCell(0).innerText = numero;
    newRow.insertCell(1).innerText = nom;
    newRow.insertCell(2).innerText = prenom;
    newRow.insertCell(3).innerText = age;
    newRow.insertCell(4).innerText = sexe;

    
    document.getElementById("inscriptionForm").reset();
});

