const btn = document.querySelector(".btn");

btn.addEventListener("click", callbaclfun);
function callbaclfun() {
  fetch("https://api.jokes.one/jod").then((response) => {
    response.json().then((data) => {
      console.log(data.contents.jokes[0].joke.text);
      console.log(data.contents.jokes[0].joke.title);
      let title = data.contents.jokes[0].joke.title;
      let text = data.contents.jokes[0].joke.text;
     
    });
  }); 

 .catch((err)=> { 
    console.log('something went wrong')};
    )}
 }
 
// let's do a simple ajax call with fetch using this URL
// “https://api.jokes.one/jod”.
// Create a button that will fetch the joke of the day.
// Display to the screen the joke title and the joke itself.
