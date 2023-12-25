const passwordDisplay = document.querySelector('#password')

// const button = document.querySelector('#btn')


const length = 12; 
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
const lowerCase = "abcdefhijklmnopqrstuvwxyz"; 
const special = "~!@#$%^&*()_+-={}[],./<>?"
const numbers = "0123456789"; 
const allChars = upperCase+lowerCase+numbers+special; 

function createPassword(){
    let password = ""; 
    password += upperCase[Math.floor(Math.random()*upperCase.length)]; 
    password += lowerCase[Math.floor(Math.random()*upperCase.length)]; 
    password += special[Math.floor(Math.random()*upperCase.length)]; 
    password += numbers[Math.floor(Math.random()*upperCase.length)]; 

    while(length>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)]; 
    }
    passwordDisplay.value = password; 
}

let text = document.getElementById('password').innerHTML; 
const copy = async()=>{
    try{
        await navigator.clipboard.writeText(text);
        console.log("content copied to clipboard"); 

    }catch (err){
        console.log('failed to copy : ',err); 
    }
}
