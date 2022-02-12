import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";


const Product = ({product,onChange,onDecrement,onIncrement,onDelete}) => {
    return ( 
        <div className={styles.product}>
           
            <p>product name: {product.title} </p>
            <p>product price: {product.price} </p>
            <span 
                className={styles.value} >
                {product.quantity}
            </span>           
            <input type="text" 
                className={styles.input} 
                onChange={onChange} 
                value = {product.title}/>
            <button 
                className={`
                ${styles.btn}
                ${product.quantity === 1 && styles.remove}`}
                onClick={onDecrement}>
                    {product.quantity>1 ? "-" : <BiTrash/>}

            </button>
            <button 
                className={styles.btn} 
                onClick={onIncrement}>
                    +
            </button>
            <button 
                className={styles.btn} 
                onClick={onDelete}>
                    delete
            </button>
        </div>
     );
}
 
export default Product;