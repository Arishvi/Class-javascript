const formEl=document.querySelector("form")
const inputEl=document.querySelector("form input")
const checkboxEl=document.querySelector("form input[type='checkbox']")

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log('form submit',inputEl.value,checkboxEl.checked)
})


