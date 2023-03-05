const form = document.querySelector('#contactForm');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    form.submit();

    alert("Data input\n Nama : " + fnameInput.value 
        + "\nCathegory : " + lnameInput.value
        + "\nImage : " + emailInput.value
        + "\nDecription : " + messageInput.value)
})



