function generatePassword() {

    const length = parseInt(document.getElementById("length").value);
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
    const resultElement = document.getElementById("result");


    if (isNaN(length) || length < 4 || length > 32) {
        resultElement.textContent = "Please enter a valid length (4-32).";
        resultElement.style.color = "#ff4d4d";
        return;
    }
    if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols) {
        resultElement.textContent = "Please select at least one character type!";
        resultElement.style.color = "#ff4d4d";
        return;
    }


    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let characterSet = "";
    if (includeLowercase) characterSet += lowercaseChars;
    if (includeUppercase) characterSet += uppercaseChars;
    if (includeNumbers) characterSet += numberChars;
    if (includeSymbols) characterSet += symbolChars;


    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

 
    resultElement.textContent = `Generated Password: ${password}`;
    resultElement.style.color = "#fff"; 
}
