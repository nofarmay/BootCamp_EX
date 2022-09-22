
// 7. add to the bookUtils object a setPublisher function, that
// receives a book a name and location, and sets a new
// property named publisher, which is an object that contains
// the name and location.
// 8. add to the bookUtils object a function isSamePublisher,
// which receives 2 books and checks if the publisher name
// and location are identical in the 2 books

const book1 = 
{
 name: "think and grow rich",
author:"napolion hill",
year :1920,
}

const book2 = 
{
name: "start up nation",
author:"dan singer",
year :2009,
}

const bookUtils={
getFirstPublished(book1,book2){ 
    return book2.year < book1.year ? book2 : book1;
} ,

setNewEdition (book,editorYear)
{book.lastEdition=editorYear},

setLanguage(book,language){book.setLanguage=language},

setTranslation(book,language,translator){book.setTranslation={language,translator}},

setPublisher(book,name,location){book.publisher={name,location}},

isSamePublisher(book1,book2){
    return book1.publisher.name===book2.publisher.name && book1.publisher.location===book2.publisher.location ? true:false;
}
}

console.log(bookUtils.getFirstPublished(book1,book2));
console.log(bookUtils.setNewEdition(book1,1921));
console.log(bookUtils.setNewEdition(book2,2010));
console.log(bookUtils.setLanguage(book1,"english"));
console.log(bookUtils.setLanguage(book2,"english"));
console.log(bookUtils.setTranslation(book1,"spanish","moshe"));
console.log(bookUtils.setTranslation(book2,"english","ilan"));
console.log(bookUtils.setPublisher(book1,"mor","argentina"));
console.log(bookUtils.setPublisher(book2,"mori","japan"));
console.log(bookUtils.isSamePublisher(book1,book2));

console.log(book1);
console.log(book2);