import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';
class ParentComp extends Component {
    state = { 
        name : "Hamoon"
     } 
    componentDidMount() {
        setInterval(()=>{
            this.setState({name : "Hamoon"})
        },5000)
    }
    render() { 
        console.log("parent comp--------")
        return (
            <div>
                parent component
                <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>
                <MemoComp name={this.state.name}/>
            </div>
        );
    }
}
 
export default ParentComp;