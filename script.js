// Թըրնըրի մեթոդի switch case տարբերակն է։ Հայտարարել ենք, որ isOpen-ը  true է։ Եթե case-ը true է, այսինքն՝ isOpen, alert անի Close,
//Եթե case-ը false է,  alert անի Open(հակառակ պեպքումն է), մնացած դեպքերում՝ alert անի  Undefined։

let isOpen = true
switch (isOpen) {
    case true:
        alert('Close');
        break;
    case false:
        alert('Open');
        break;
    default:
        alert('Undefined');
}