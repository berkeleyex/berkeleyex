$(document).ready(function () {
    document.getElementById('signUpForm').onsubmit = function () {
        return validateForm();
    };

    document.getElementById('dummy').onload = function () {
        onSignup();
    };
});

function validateForm () {
    // TODO
    return true;
}

function onSignup () {
    $('#thankYou').css('display', 'block');
}