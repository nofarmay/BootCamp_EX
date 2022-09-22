
function passwordValidation1(password) {
if (password.length>7) {return 'Strong'; }else {return 'Weak'; } ;
}
let  power1 = passwordValidation1(op)


function passwordValidation(password) {
let  power = password.length>7 ? 'Strong' : 'Weak';
   return power;
}


const validatorLogic = (password) => {
    return (password.toString().length < 7 && "weak") || "strong";
  };

  
  const validatorAdv = (password) => {
    return password.length > 7 && password.match(/[A-Z]/)
      ? "Very Strong"
      : password.length === 7
      ? "Strong"
      : "weak";
  };

