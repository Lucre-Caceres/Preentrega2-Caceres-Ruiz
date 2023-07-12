import styles from "./ItemDetail.module.css"

const ItemDetail = ({detail}) => {
  return (
    <div>
      <p>{detail.title}</p>
      <p>{detail.description}</p>
      <p>{detail.price}</p>
    </div>
  )
}

export default ItemDetail;