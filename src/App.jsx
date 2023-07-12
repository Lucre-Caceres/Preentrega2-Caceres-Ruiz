
import { text } from '@fortawesome/fontawesome-svg-core';
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Navbar from "./components/Navbar"
import Input from './components/input';
import ItemDetailContainer from './components/ItemDetailContainer';


const App = () => {

  const onChange=(event)=>{
    const value=event.target.value;

  }
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="hola" />
      
      <Input
      id="task"
      placeholder="completar aqui"
      type={text}
      name= "Task name"
      onChange={onChange}
      />

<ItemDetailContainer />
    </div>
  );
};

export default App;