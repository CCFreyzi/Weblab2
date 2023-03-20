const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const group = document.querySelector('input[name="group"]:checked').value;
    const team = document.querySelector('#team').value;
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;

    document.querySelector('#name').value = ''
    document.querySelector('#surname').value = ''

    console.log(`Підгрупа: ${group}`);
    console.log(`Бригада: ${team}`);
    console.log(`Прізвище: ${surname}`);
    console.log(`Ім'я: ${name}`);

});