function percentageOfWorld1 (population,country)
{
    return (`${country} has ${population} million people, so it's about ${population/7900 * 100} of the world population`)
}
let ILPercentage=percentageOfWorld1(10,"Israel");   
let ruPercentage=percentageOfWorld1(150,"russia");   
let brPercentage=percentageOfWorld1(220,"brazil");   

console.log(ILPercentage);
console.log(ruPercentage);
console.log(brPercentage);

const percentageOfWorld2=(population,country)=>{  
    return (`${country} has ${population} million people, so it's about ${population/7900 * 100} of the world population`)
}

 ILPercentage=percentageOfWorld2(10,"Israel");   
 ruPercentage=percentageOfWorld2(150,"russia");   
 brPercentage=percentageOfWorld2(220,"brazil"); 

 console.log(ILPercentage);
console.log(ruPercentage);
console.log(brPercentage);
