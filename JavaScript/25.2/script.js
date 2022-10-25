const mor = {
    name : 'omer',
    printName : function(){
    },
    printDelay : function() {
 setTimeout(this.printName.bind(mor),1000)
//  setTimeout(function(){console.log(this)},1000)
console.log(this);
    }
}
mor.printDelay()