
let userFormDOM = document.querySelector("#userForm")
userFormDOM.addEventListener('submit', formSubmit)


function formSubmit(event){
    event.preventDefault(); /* default islemini engelledim*/

    let nameDOM = document.querySelector("#name");
    let surNameDOM = document.querySelector("#surName");
    let phoneDOM = document.querySelector("#phone");
    let emailDOM = document.querySelector("#email");
    console.log(nameDOM.value);
    console.log(surNameDOM.value);
    console.log(phoneDOM.value);
    console.log(emailDOM.value);
}