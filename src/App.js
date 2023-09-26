import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import DisplayCount from "./components/Displaycount/Displaycount";
import ContactUsForm from './components/ContactUsForm/ContactUsForm';



function App() {
    const [count, setCount] = useState (0);
    const [isShow, setIsShow] = useState (true);

    const incrementBtnHandler = () => {
        setCount (count + 1 );
       // console.log (count, 'count')
    }
    // const decrementBtnHandler = () => {
    //     setCount (count - 1);
    //     // console.log (count, 'count');

    // }
   const decrementBtnHandler = () =>{
    if (count === 0 ){
        return;
    }
    setCount (count - 1);
   };

   const tasks = [
    {
        name : "task one",
    },
    {
        name : "task two",
    },
    {
        name: "task three",
    },
    {
        name: "task four",
    },
    {
        name : "task five",
    },

   ]
 
   return (
    <div className="App">
      {isShow && <DisplayCount count={count} />}
      <button onClick={incrementBtnHandler}>Increment</button>
      <button onClick={decrementBtnHandler}>Decrement</button>

      <button onClick={() => setIsShow(!isShow)}>Show/Hide</button> 

      {tasks.map((singleTask, index) => {
        return <p key={index}>{singleTask.name}</p>;
      })}
      <ContactUsForm  />
    </div>
  );
}

export default App;
