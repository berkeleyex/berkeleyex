$(document).ready(function () {
    document.getElementById('signUpForm').onsubmit = function () {
        var isValid = validateForm();
        if (isValid) {
            onSignup();
        }

        return isValid;
    };
});

function validateForm () {
    $('#nameError').hide();
    $('#emailError').hide();
    $('#phoneError').hide();
    $('#ageError').hide();
    var isValid = true;

    if ($('#formName').val().trim() === '') {
        $('#nameError').show();
        isValid = false;
    }

    if ($('#formEmail').val().trim() === '') {
        $('#emailError').show();
        isValid = false;
    }

    if ($('#formTelephone').val().trim() === '') {
        $('#phoneError').show();
        isValid = false;
    }

    if (!$('#formAgeCheck').prop('checked')) {
        $('#ageError').show();
        isValid = false;
    }

    return isValid;
}

function onSignup () {
    $('#thankYou').show();
}