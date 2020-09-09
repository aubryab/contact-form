const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const messagetext = document.getElementById('messagetext');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(input.value.trim())) {
            showSuccess(input);
        } else {
            showError(input, 'Email is not valid')
        }
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function(input) {
            if(input.value.trim() === '') {
                showError(input, `${getFieldName(input)} is required`);
            } else {
                showSuccess(input);
            }
    });
}

// Check input lengths
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters `)
    } else if(input.value.length > max) {  
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input);
    }
}

// Check message length
function checkMessage(messagetext) {
    if(messagetext.length < 20 && messagetext.length < 2000) {
        showError(textarea);
    } else {
        showSuccess(textarea);
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Event Listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([name, email]);
    checkLength(name, 2, 15);
    checkEmail(email);
});


