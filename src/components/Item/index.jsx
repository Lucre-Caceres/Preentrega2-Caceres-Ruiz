import styles from "./item.module.css"
const Item = ({item}) => {
  return (
    <div>
        <img className= {styles.cardImage} src={item.pictureURL} key={item.id}/>
        <p key={item.id}>{item.title} </p>;
        <p key={item.id}>{item.price} </p>;
        <p key={item.id}>{item.description} </p>;
    </div>
  )
}

export default Item;