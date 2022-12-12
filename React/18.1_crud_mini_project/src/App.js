חחחחimport {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
const [account,setAccount] = useState([])
const [name,setName] = useState([])
const [amount,setAmount] = useState([])
// const []
  useEffect (() => {
    async function getDataFromApi(){
      try {
        const { data }  = await axios.get(
          "https://6374b4b508104a9c5f869829.mockapi.io/money/money"
        );
        console.log(data);

        setAccount(data);
      }catch (error){
        console.log(error);
      };
    }

    getDataFromApi();
  },[]);
function add () {
 axios.post(
          "https://6374b4b508104a9c5f869829.mockapi.io/money/money", {}
        )
      
       .then((res) => {
        setAccount([...account,res.data] )
        console.log(res.data);
        console.log(account);
       })
      .catch((error) => {
        console.log(error);
      })
    }
function handleDelete(id , index) {
        axios
        .delete(`https://6374b4b508104a9c5f869829.mockapi.io/money/money${id}`)
        .then((res) => console.log(res));
  
      const newAccount = [...account];
      newAccount.splice(index, 1);
      console.log(newAccount);
      setAccount(newAccount);
};
  
  return (
    <div>
      <h1>hello</h1>
      <button onClick = {add}>Add</button>
      <ul>
        {account.map(({name, id, Amount, Avatar}, index) => { 
          return (
            <li>
            <h3>{name}</h3>  
            <h3>{Amount}</h3>  
            <img style={{height:"15px"}}
            src={Avatar} alt=""/>  
            <button onClick={() =>  handleDelete(id, index)}
            >delete</button>
            <button>update</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
