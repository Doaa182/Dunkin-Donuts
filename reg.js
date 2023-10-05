
    const form = document.getElementById('signupformarginnn');

    const username = document.getElementById('username');
    const username2 = document.getElementById('username2');

    const password = document.getElementById('passwordd');
    const password2 = document.getElementById('passwordd2');

    const email = document.getElementById('emaill');
    const email2 = document.getElementById('emaill2');

    const number = document.getElementById('mobilephone');
    const birthday = document.getElementById('birth');
    const city = document.getElementById('cityadd');

    form.addEventListener('submit', e => {
        e.preventDefault();
        checkInputs();
    });

function checkInputs() {

    const usernameValue = username.value.trim();
    const usernameValue2 = username2.value.trim();

    const passwordValue = passwordd.value.trim();
    const passwordValue2 = passwordd2.value.trim();

    const emailValue = emaill.value.trim();
    const emailValue2 = emaill2.value.trim();

    const mobilephonevalue = mobilephone.value.trim();
    const birthvalue = birth.value.trim();
    const cityaddvalue = cityadd.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    }

    else {
        setSuccessFor(username);
    }

    function setErrorFor(input, message) {

        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        formControl.className = 'form-control error';
        small.innerText = message;
    }

    function setSuccessFor(input) {

        const formControl = input.parentElement;

        formControl.className = 'form-control success';
    }
}
