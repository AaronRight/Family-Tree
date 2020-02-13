import React from "react";
import "./Panel.css";

export class Panel extends React.Component{
    render(){
        return (
            <div className="panel">
                <div className="button">+</div>
                <div className="button">-</div>
                <div className="input"></div>
            </div>
        );
    }
}