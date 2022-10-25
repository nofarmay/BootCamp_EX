
const btn =  document.querySelector('.btn') 
const age =  document.querySelector('.age') 
btn.addEventListener('click',function() {
   if (age.value<18) alert('you’re too young')
    else alert ('you can drink appear')
})

