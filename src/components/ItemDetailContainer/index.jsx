import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import styles from "./ItemDetailContainer.module.css"

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})
  
  const getItem =async()=> {
    const result = await fetch("https://6499986479fbe9bcf83f923d.mockapi.io/2proyecto");
    const data= await result.json();
    setDetail(data.find((item)=>item.id==="2"));
  }
  useEffect(() => {
    setTimeout(() =>  {
      getItem(); 
    }, 2000);
     
  }, []);
  
  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  )
}

export default ItemDetailContainer;