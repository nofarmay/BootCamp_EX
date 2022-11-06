function App() { const data = ["hello", "world"]; 
const number1 = 5;
const number2 =6;
const string = "I love React!"
// The output should be: The string’s length is <display
// the length of the string>
  return (
    <div>
    <p>{data.join(" ")}</p>
    <p>{`${number1}+${number2}=${number1+number2} `}</p>
    <p>{`The string’s length is ${string.length}`}</p>
    </div>
  );
}

export default App;

 
