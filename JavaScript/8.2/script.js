const mycountry = {
    country: 'Israel',
    capital: 'Jerusalem'
    language: 'hebrew',
    population: '10'
    neighbours: ['lebanon','Syria', 'Eygept', 'Jorden'],
describe()
{console.log(`${this.country} has ${this.population} million people, their mother tongue is, ${this.language}  they
have ${this.neighbours.length}  neighbouring countries and a capital called  ${this.capital}`);
},
checkIsland(){this.isIsland= this.neighbours ===0? true:false;
}


    checkIsland(){
        this.isIsland= this.neighbours === 0 ? true : false;   
    }
}
mycountry.checkIsland();
console.log(mycountry.isIsland);

