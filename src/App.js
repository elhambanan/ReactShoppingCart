import './App.css';
import React , {Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';

class App extends Component {
  state = { 
    products : [
        {title: "react.js", price: "99 $", id: 1, quantity: 1},
        {title: "node.js", price: "78 $", id: 2, quantity: 3},
        {title: "veu.js", price: "45 $", id: 3, quantity: 5},
        {title: "javaScript", price: "65 $", id: 4, quantity: 15},

        ], 
       } 
// state => Handler:

changeHandler = (e, id) => {
    const products = [...this.state.products];

    const selectedItem = products.find(p => p.id===id);
    selectedItem.title = e.target.value;
    this.setState({products : products})
} 
decHandler = (id) => {
    const products = [...this.state.products]
    const selectedItem = products.find(p => p.id === id)
    if(selectedItem.quantity === 1){
        const filteredItem = products.filter(p => p.id!==id)
        this.setState({products : filteredItem})
    }else {
        selectedItem.quantity --;
        this.setState(products)
    }
}
incHandler = (id) => {
  const products = [...this.state.products]
  const selectedItem = products.find(p => p.id === id)
  selectedItem.quantity++;
  this.setState({products})
}
removeHandler = (id) => {
    const products = [...this.state.products]
    const filteredItem = products.filter(p => p.id !== id)
    this.setState({products: filteredItem})
}
  render() { 
    return (
      <div className="App">
      <NavBar 
        totalItems={this.state.products.filter(p => p.quantity>0).length}
      />
      <ProductList 
        products={this.state.products}
        onRemove={this.removeHandler}
        onIncrement={this.incHandler}
        onChange={this.changeHandler}
        onDecrement={this.decHandler}
        />
    </div>
    );
  }
}
 
export default App;

