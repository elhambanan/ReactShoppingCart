import React, { Component } from 'react';
import Product from '../Product/Product';
import styles from "./productList.module.css"

class ProductList extends Component {
   
    render() { 
        return (
            <div className={styles.container}>
                {this.props.products.map((p, index) => {
                    return (
                        <Product 
                            product={p}
                            key={index}
                            onChange = {(e) => this.props.onChange(e, p.id)}
                            onDecrement = {() => this.props.onDecrement(p.id)}
                            onDelete = {() => this.props.onRemove(p.id)}
                            onIncrement = {() => this.props.onIncrement(p.id)}
                         />
                    )
                })}
            </div>
        );
    }
}
 
export default ProductList;