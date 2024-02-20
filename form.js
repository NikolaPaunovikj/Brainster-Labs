const form = document.getElementById('form');
const small = document.querySelector('.smallError')
const nameAndSurname = document.getElementById('inputName')
const companyName = document.getElementById('inputCompanyName')
const email = document.getElementById('inputCompanyEmail')
const phone = document.getElementById('inputCompanyPhone')
const select = document.getElementById('select');
const item1 = document.getElementById('item1')
const item2 = document.getElementById('item2')
const item3 = document.getElementById('item3')
const item4 = document.getElementById('item4')
const errorMessage = document.querySelectorAll('.error-message')

let regex = /^((00)?\+?[389]{3})?[\/\-\s*\.]?(((\(0\))|0)?\s*7\d{1})[\/\-\s*\.\,]?([\d]{3})[\/\-\s*\.\,]?([\d]{3})$/
let errors = []

form.addEventListener('submit', (e)=> { 
  
 const usernameValue =  nameAndSurname.value
 const usernameLength =  nameAndSurname.length
 const companynameValue = companyName.value.trim()
 const emailValue = email.value.trim()
 const phoneValue = phone.value.trim()
 const selectValue = select.value
 
 if(usernameValue === '') {
  errors.push('1')
  setErrorForName(nameAndSurname, 'Ве молиме внесете го вашето име и презиме')  
 } else if (/[0-9]/.test(usernameValue)){
  errors.push('1')
  setErrorForName(nameAndSurname, 'Ве молиме внесете го вашето име и презиме')
 } else {
  errors=[]
  setSuccessForName(nameAndSurname) 
 }

 if(companynameValue === '') {
  errors.push('1')
  setErrorForCompany(companyName, 'Ве молиме внесете име на вашата компанија')
 } else {
  setSuccessForCompany(companyName)
 }

 if(emailValue === '') {
  errors.push('1')
  setErrorForEmail(email, 'Ве молиме внесете ја вашата имејл адреса')
 } else if (!isEmail(emailValue)) {
  errors.push('1')
  setErrorForEmail(email, 'Имејл адресата не е валидна')
 } else {
  setSuccessForEmail(email)
 }

 if(phoneValue === '') {
  errors.push('1')
  setErrorForPhone(phone, 'Ве молиме внесете го вашиот телефонски број')
 } else if(!phoneValue.match(regex) ) {
  errors.push('1')
  setErrorForPhone(phone, 'Ве молиме внесете правилен формат на телефонски број')
 } 
 else  {
  setSuccessForPhone(phone)
 } 


 if(selectValue === ''){
  errors.push('1')
  setErrorForSelect(item1)
 } else {
  setSuccessForSelect(item1)
 }
 
 if(errors.length > 0){
  e.preventDefault();
 }
})



function setErrorForName(input, message) {
  const checkForm = input.parentElement;
  const small = checkForm.querySelector('small')
  small.innerText = message
  nameAndSurname.classList.add('error')
  nameAndSurname.classList.remove('success')
  small.classList.add('showError')
}

function setSuccessForName(input){
  const checkForm = input.parentElement;
  const small = checkForm.querySelector('small')
  nameAndSurname.classList.add('success')
  small.classList.remove('showError')
}

function setErrorForCompany(input, message) {
  const checkForm = input.parentElement;
  const small = checkForm.querySelector('small')
  small.innerText = message
  companyName.classList.add('error')
  companyName.classList.remove('success')
  small.classList.add('showError')
}

function setSuccessForCompany(input){
  const checkForm = input.parentElement;
  const small = checkForm.querySelector('small')
  companyName.classList.add('success')
  small.classList.remove('showError')
}

function setErrorForEmail(input, message) {
  const checkForm = input.parentElement;
  const small = checkForm.querySelector('small')
  small.innerText = message
  email.classList.add('error')
  email.classList.remove('success')
  small.classList.add('showError')
}

function setSuccessForEmail(input){
  const checkForm = input.parentElement;
  const small = checkForm.querySelector('small')
  email.classList.add('success')
  small.classList.remove('showError')
}

function setErrorForPhone(input, message) {
  const checkForm = input.parentElement;
  const small = checkForm.querySelector('small')
  small.innerText = message
  phone.classList.add('error')
  phone.classList.remove('success')
  small.classList.add('showError')
}

function setSuccessForPhone(input){
  const checkForm = input.parentElement;
  const small = checkForm.querySelector('small')
  phone.classList.add('success')
  small.classList.remove('showError')
}

 function setErrorForSelect(input, message) {
  const checkForm = input.parentElement;
  const small = checkForm.querySelector('small')
  select.classList.add('error')
  select.classList.remove('success')
  select.classList.add('showError')
}

 function setSuccessForSelect(input){
  const checkForm = input.parentElement;
  const small = checkForm.querySelector('small')
  select.classList.add('success')
  select.classList.remove('showError')
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

item1.addEventListener('click', function(){
  select.innerText = item1.innerText
  select.value = item1.value
  select.classList.remove('error')
  select.classList.remove('showError')
  select.classList.add('success')
})
item2.addEventListener('click', function(){
  select.innerText = item2.innerText
  select.value = item2.value
  select.classList.remove('error')
  select.classList.remove('showError')
  select.classList.add('success')
})
item3.addEventListener('click', function(){
  select.innerText = item3.innerText
  select.value = item3.value
  select.classList.remove('error')
  select.classList.remove('showError')
  select.classList.add('success')
})
item4.addEventListener('click', function(){
  select.innerText = item4.innerText
  select.value = item4.value
  select.classList.remove('error')
  select.classList.remove('showError')
  select.classList.add('success')
})


