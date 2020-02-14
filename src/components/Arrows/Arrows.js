import React from "react";
import ReactDOM from "react-dom";
import "./Arrows.css";

export class Arrows extends React.Component {
    componentDidMount(){
        console.log(this.props.references)
    }

  render() {
    /*let rect = ReactDOM.findDOMNode(this.refs['p_13'])
    .getBoundingClientRect();
  
    console.log(rect)
    */

   
    return (
    <svg style={{position: 'absolute', width: '100%', height: '100%', top: '0px', left: '0px'}}>
        { this.props.relations.map((el) => console.log(el)) }
        <line fill='none' stroke='red' strokeWidth='2px' x1={1299.15625} y1={424} x2={1301} y2={530}></line>
    </svg>
    );
  }
}
