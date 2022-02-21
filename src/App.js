import './App.css';
import React , {Component} from 'react';
import NavBar from './components/NavBar/NavBar';
import ProductList from './components/ProductList/ProductList';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';
import ClassTimer from './components/ClassTimer';
import FunctionalTimer from './components/FunctionalTimer';
import Wrapper from './components/HOC/Wrapper';
import HoverCount from './components/hocExample/HoverCounter';
import HoverCounter from './components/hocExample/HoverCounter';
import ClickCounter from './components/hocExample/ClickCounter';
import ParentComp from './components/PureMemoComp/ParentComp';
import ClassRef from './components/ref/ClassRef';
import FuncttionalRef from './components/ref/FunctionalRef';
import UseRef from './components/ref/UseRef';
import CounterProvider from './components/Context/CounterProvider';
import CounterOne from './components/Context/CounterOne';
import CountReducer from './components/Reducer/CountReducer';


export const UserContext = React.createContext(); 
export const WebsiteContext = React.createContext();
class App extends Component {
  constructor(props) {
    super(props)
    console.log("app.js constructor") 
  };

  state = { 
    products : [
        {title: "react.js", price: "99 $", id: 1, quantity: 1},
        {title: "node.js", price: "78 $", id: 2, quantity: 3},
        {title: "veu.js", price: "45 $", id: 3, quantity: 5},
        {title: "javaScript", price: "65 $", id: 4, quantity: 15},

        ], 
    isShow : true,    
       } 
// state => Handler:

changeHandler = (e, id) => {
    // const products = [...this.state.products];

    // const selectedItem = products.find(p => p.id===id);
    // selectedItem.title = e.target.value;
    // this.setState({products : products})
    const index = this.state.products.findIndex((item)=>item.id===id);
    const product = {...this.state.products[index]};
    product.title = e.target.value;

    // update products:
    const products = [...this.state.products]
    products[index] = product;
    this.setState({products})

} 
decHandler = (id) => {
  const index = this.state.products.findIndex(item => item.id === id);
  const product = {...this.state.products[index]};
    if(product.quantity === 1){
        const filteredItem = this.state.products.filter(p => p.id!==id)
        this.setState({products : filteredItem})
    }else {
        const products = [...this.state.products]
        product.quantity --;
        products[index] = product;
        this.setState({products})
    }
} 
incHandler = (id) => {
  // const products = [...this.state.products]
  // const selectedItem = products.find(p => p.id === id)
  // selectedItem.quantity++;
  // this.setState({products})
  const index = this.state.products.findIndex((item)=>item.id===id);
  const product = {...this.state.products[index]};
  product.quantity++;
  const products = [...this.state.products];
  products[index] = product
  this.setState({products})

}
removeHandler = (id) => {
    const products = [...this.state.products]
    const filteredItem = products.filter(p => p.id !== id)
    this.setState({products: filteredItem})
}
componentDidMount(){
  console.log("App.js componentDidMount")
  // Ajax Request:
  // products (backEnd) => this.setState({products ...})
}
componentDidUpdate(prevProps, prevState){
  console.log("App.js componentDidUpdate");
  console.log("App.js",prevState )

}
shouldComponentUpdate(nextProps, nextState){
  return true
}
  render() { 
    // console.log("App.js render")
    // console.log(this.props)
     
    return (
      <>
        <CounterProvider>
          {/* <CounterOne/> */}
          <CountReducer />
        </CounterProvider>
      
            {/* <UseRef /> */}
            {/* <ClassRef />
            <FuncttionalRef /> */}

            {/* <ParentComp /> */}
            {/* <ClickCounter name ="Eli"/>
            <HoverCounter /> */}
            {/* <button onClick={()=>{this.setState({isShow: !this.state.isShow})}}>
                {this.state.isShow ? "Hide" : "Show"}
              </button>
              {this.state.isShow && <FunctionalTimer/>}

              <FunctionalCounter/>
              <ClassCounter/> */}
            {/* <NavBar 
              totalItems={this.state.products.filter(p => p.quantity>0).length}
            />
            <ProductList 
              products={this.state.products}
              onRemove={this.removeHandler}
              onIncrement={this.incHandler}
              onChange={this.changeHandler}
              onDecrement={this.decHandler}
              /> */}
      </>
    );
  }
}
 
// export default App;
export default Wrapper(App, "App")
