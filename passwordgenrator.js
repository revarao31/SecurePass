
const lengthInput = document.getElementById('length');
const lowercaseCheckbox = document.getElementById('lowercase');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const selectAllCheckbox = document.getElementById('selectAll');
const generateButton = document.getElementById('generate');
const passwordInput = document.getElementById('password');

generateButton.addEventListener('click', () => {
    const length = lengthInput.value;
    const hasLowercase = lowercaseCheckbox.checked;
    const hasUppercase = uppercaseCheckbox.checked;
    const hasNumbers = numbersCheckbox.checked;
    const hasSymbols = symbolsCheckbox.checked;
    const hasselectAll = selectAllCheckbox.checked;

    const password = generatePassword(length, hasLowercase, hasUppercase, hasNumbers, hasSymbols,hasselectAll);
    passwordInput.value = password;
});

function generatePassword(length, hasLowercase, hasUppercase, hasNumbers, hasSymbols,hasselectAll) {
    const characters = [];
    const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    const selectAll =  characters+lowercaseCharacters+uppercaseCharacters+numbers+symbols;

    if (hasLowercase) characters.push(...lowercaseCharacters);
    if (hasUppercase) characters.push(...uppercaseCharacters);
    if (hasNumbers) characters.push(...numbers);
    if (hasSymbols) characters.push(...symbols);
    if (hasselectAll) characters.push(...selectAll);

    if (characters.length === 0) {
        alert('Please select at least one character set.');
        return '';
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }

    return password;
}
