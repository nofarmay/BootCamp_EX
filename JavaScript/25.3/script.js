const wonderWoman = {
    name: "Diana Prince"
    }
    const batman = {
    name: "Bruce Wayne"
    }

    function printName() {
        console.log(`my name is ${this.name}`);
        }


    const superHeroes = [wonderWoman, batman];

function printHeroes(Heroes, printName) {
    superHeroes.forEach(element => {
        printName.call(element)
   });
    }
    printHeroes(superHeroes, printName)
// orr
function printHeroes(heroes, printFunc) {
  for (let i = 0; i < heroes.length; i++) {
    printFunc.call(heroes[i]);
  }
}
printHeroes(superHeroes, printName);
