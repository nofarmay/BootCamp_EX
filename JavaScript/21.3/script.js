const textarea = document.querySelector('.textarea')
const submit = document.querySelector('.submit')

submit.addEventListener('click',function () {
    let userInput = textarea.length //..?
    if (userInput<100) {
        window.confirm("You must enter at least 100 characters before clicking the button"
        )  
    }
    else{
       alert('your text submitted sucsessfully') 
    }
}
)