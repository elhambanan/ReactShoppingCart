import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";


const Product = (props) => {
    return ( 
        <div className={styles.product} onClick = {props.click}>
           
            <p>product name: {props.product.title} </p>
            <p>product price: {props.product.price} </p>
            <span 
                className={styles.value} >
                {props.product.quantity}
            </span>           
            <input type="text" 
                className={styles.input} 
                onChange={props.onChange} 
                value = {props.product.title}/>
            <button 
                className={`
                ${styles.btn}
                ${props.product.quantity === 1 && styles.remove}`}
                onClick={props.onDecrement}>
                    {props.product.quantity>1 ? "-" : <BiTrash/>}

            </button>
            <button 
                className={styles.btn} 
                onClick={props.onIncrement}>
                    +
            </button>
            <button 
                className={styles.btn} 
                onClick={props.onDelete}>
                    delete
            </button>
        </div>
     );
}
 
export default Product;