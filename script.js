// let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let digits = [5, 6, 7, 8, 3, 0, 9];
// let digits = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

let digits = [1, 8, 0, 0, "N", "O", "P", "E"];
function formatPhoneNumber() { 
    if (digits.length === 10 && digits.some(isNaN)) {
        let phoneNumber = digits.join("");
    
        let areaCode = phoneNumber.slice(0, 3);
        let nextThree = phoneNumber.slice(3, 6);
        let lastFour = phoneNumber.slice(6, 10);

        return `(${areaCode}) ${nextThree}-${lastFour}`;
    } 
    else {
        return `Please enter ten numeric digits.`;
    }
}

formatPhoneNumber(digits);
