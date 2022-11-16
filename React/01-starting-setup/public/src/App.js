import {useState} from 'react'; 
 

function App() {
  const [ inputValue,setInputValue ] = useState('');
  const [todo,setTodo] = useState([]);
  
  const handleInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInput} />
      <button>Add</button>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
          gap: `1rem`,
          marginBottom: '1rem',
        }}
      >
      
      </div>
    </div>
  );
}

export default App;

