import React, { Component } from 'react';
import Product from '../Product/Product';
import styles from "./productList.module.css"

class ProductList extends Component {
    // componentDidUpdate(prevProps, prevState){
    //     console.log("PruductList.js componentDidUpdate");
    //     if(prevProps.products !== this.props.products){
    //         // some AJAX call => and gets new data
    //     }
    //   }
    
   
    renderProduct = () => {
        const {products,onChange,onDecrement,onIncrement,onRemove} = this.props;
        if (products.length === 0)
            return <div>there is no Product</div>
        return (
            <div className={styles.container}>
                {products.map((p, index) => {
                    return (
                        <Product 
                        product={p}
                        key={index}
                        onChange = {(e) => onChange(e, p.id)}
                        onDecrement = {() => onDecrement(p.id)}
                        onDelete = {() => onRemove(p.id)}
                        onIncrement = {() => onIncrement(p.id)}
                     />
                    )
                })}
            </div>
        );
    }
    render() {
        console.log("ProductList.js render")
        const {products} = this.props;
        return (
            <div>
                {!products.length
                    ? (<div>go to Shopping</div>)
                    : (null)
                }
                {this.renderProduct()}
            </div>
        )

    }
}
 
export default ProductList;