import React, { Component } from 'react';
import Product from '../Product/Product';
import styles from "./productList.module.css"

class ProductList extends Component {
    
   
    renderProduct = () => {
        if (this.props.products.length === 0)
            return <div>there is no Product</div>
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
    render() {
        return (
            <div>
                {!this.props.products.length
                    ? (<div>go to Shopping</div>)
                    : (null)
                }
                {this.renderProduct()}
            </div>
        )

    }
}
 
export default ProductList;