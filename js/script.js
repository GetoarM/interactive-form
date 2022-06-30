//When the page loads, the text input type is in focus
const username = document.getElementById('name');
username.focus()
/*
    Job role Section
*/
const otherJobRole = document.querySelector('#other-job-role');
otherJobRole.style.display = 'none';

/*
    When the "Other" option is selected/deselected from "Job Role" menu,
    the "Other job role" field should be visible/hidden on the page.
*/
title.addEventListener('change', (e) => {

    if (e.target.value === 'other'){
        otherJobRole.style.display = 'initial';
    } else {
        otherJobRole.style.display = 'none';
    }
});

/*
    T-Shirt Info Section
*/
const designSelectElement = document.getElementById('design');
const colorSelectElement = document.getElementById('color');
const colorOptions = colorSelectElement.children;
colorSelectElement.disabled = true;

/*
    when a theme is selected, the "Color" field is enabled
    and it’s value is updated along with the options in the "Color" 
    drop-down menu.
*/
designSelectElement.addEventListener('change', (e) =>{
    colorSelectElement.disabled = false;

        for (let i = 0; i < colorOptions.length; i++){
            const value = e.target.value;
            const theme = colorOptions[i].getAttribute('data-theme'); 

            if (value === theme){
                colorOptions[i].hidden = false;
                colorOptions[i].selected = true;
            } else {
                colorOptions[i].hidden = true;
                colorOptions[i].selected = false;
            }
        }
});
/*
    Register For Activites Section
*/
const activities = document.getElementById('activities');
const activitiesCost = document.getElementById('activities-cost');
let totalCost = 0;

/*
    when an activity is checked/unchecked, the total cost text below
    the activity section is updated in real time. 
*/
activities.addEventListener('change', (e) =>{
    let dataCost = parseInt(e.target.getAttribute('data-cost'));
    if (e.target.checked){
        totalCost += dataCost;
    } else {
        totalCost -= dataCost;
    }
    activitiesCost.innerHTML = `Total: $${totalCost}`;
    
/*  
    The user is prevented from selecting two activities
    that are at the same day and time
*/  
    if (checkbox[1].checked){
        checkbox[3].disabled = true;
        checkbox[3].parentElement.className = 'disabled';
    } else {
        checkbox[3].disabled = false;
        checkbox[3].parentElement.classList.remove('disabled');
    }

    if (checkbox[3].checked){
        checkbox[1].disabled = true;
        checkbox[1].parentElement.className = 'disabled';
    } else {
        checkbox[1].disabled = false;
        checkbox[1].parentElement.classList.remove('disabled');
    }

    if (checkbox[2].checked){
        checkbox[4].disabled = true;
        checkbox[4].parentElement.className = 'disabled';
    } else {
        checkbox[4].disabled = false;
        checkbox[4].parentElement.classList.remove('disabled');
    }

    if (checkbox[4].checked){
        checkbox[2].disabled = true;
        checkbox[2].parentElement.className = 'disabled';
    } else {
        checkbox[2].disabled = false;
        checkbox[2].parentElement.classList.remove('disabled');
    }
});

/*
    Payment Info Section
*/

const email = document.getElementById('email');
const payment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const bitcoin = document.getElementById('paypal');
const paypal = document.getElementById('bitcoin');
payment[1].setAttribute('selected', '');
bitcoin.hidden = true;
paypal.hidden = true;

/*
   when the payment method option is updated in the drop-down menu,
   the payment sections in the form will update accordingly
*/
payment.addEventListener('change', (e) =>{
    const change = e.target.value;
    if (change === 'bitcoin'){
        bitcoin.hidden = false;
        paypal.hidden = true;
        creditCard.hidden = true;
    } else if (change === 'paypal'){
        paypal.hidden = false;
        creditCard.hidden = true;
        bitcoin.hidden = true;
    } else if ( change === 'credit-card'){
        creditCard.hidden = false;
        paypal.hidden = true;
        bitcoin.hidden = true;
    }
});
/*
    Form Validation Section
*/
const activitiesBox = document.getElementById('activities-box');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const ccNum = document.getElementById('cc-num');
const form = document.querySelector('form');
const checkbox = document.querySelectorAll("input[type=checkbox]");

/*
    ADDS & REMOVES css class name depending on the validation
*/
function validationPass (element){
    element.parentElement.className = 'valid';
    element.parentElement.remove.className = 'not-valid';
    element.parentElement.lastElementChild.hidden = true;
  }

function validationFail (element){
    element.parentElement.className = 'not-valid';
    element.parentElement.remove.className = 'valid';
    element.parentElement.lastElementChild.hidden = false;
  }

/*
  Input Validators that test with regex and returns a boolean value
*/
const nameValidator = () => {
    const nameIsValid = /^[a-zA-Z]+ ?[a-zA-Z]*? ?[a-zA-Z]*?$/.test(username.value);
    nameIsValid ? validationPass(username) : validationFail(username);
    return nameIsValid;
}

const emailValidator = () => {
    const emailIsValid = /^[^@]+@[^@.]+\.[a-z]+$/i.test(email.value);
    emailIsValid ? validationPass(email) : validationFail(email);
    return emailIsValid
}
const ccNumValidator = () => {
    const ccNumIsValid = /^\d{13,16}$/.test(ccNum.value);
    ccNumIsValid ? validationPass(ccNum) : validationFail(ccNum);
    return ccNumIsValid
}
const zipValidator = () => {
    const zipIsValid = /^\d{5}$/.test(zipCode.value);
    zipIsValid ? validationPass(zipCode) : validationFail(zipCode);
    return zipIsValid
}
const cvvValidator = () => {
    const cvvIsValid = /^\d{3}$/.test(cvv.value);
    cvvIsValid ? validationPass(cvv) : validationFail(cvv);
    return cvvIsValid
}

const activitiesValidator = () => {
    let activitiesIsValid = 0 < totalCost;
    if (!activitiesIsValid) {
            activities.className = 'activities not-valid';
            activities.lastElementChild.hidden = true;
      } else {
            activities.className = 'activities valid';
            activities.lastElementChild.hidden = false;
      }
      
      return activitiesIsValid;
};
/*
    When the submit button is clicked, the form submmits
    and refreshes if all the required fields are valid.
*/
form.addEventListener('submit', e => {

    //e.preventDefault();

    if (!nameValidator()) {
      e.preventDefault();
    }
  
    if (!emailValidator()) {
      e.preventDefault();
    }

    if (!activitiesValidator()) {
        e.preventDefault();
    }
    if (payment.value === 'credit-card') {

        if (!ccNumValidator()) {
        e.preventDefault();
        }

        if (!zipValidator()) {
            e.preventDefault();
        }
        if (!cvvValidator()) {
            e.preventDefault();
        }
    }
});
/*
    Focus & Blur State Indicators 
*/
for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focus');
    });
    checkbox[i].addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focus');
    });
};
/* 
    Real Time Validation
*/
username.addEventListener('keyup', nameValidator)
email.addEventListener('keyup', emailValidator)
ccNum.addEventListener('keyup', ccNumValidator);
zipCode.addEventListener('keyup', zipValidator);
cvv.addEventListener('keyup', cvvValidator);