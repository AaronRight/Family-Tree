import React from "react";
import "./Panel.css";

import { ReactComponent as Plus } from "../../references/plus.svg";
import { ReactComponent as Minus } from "../../references/minus.svg";
import { ReactComponent as Search } from "../../references/search.svg";

export class Panel extends React.Component{
    

    render(){
        return (
            <div className="panel">
                <div className="buttonGroup">
                    <Plus onClick={() => this.props.zoom(true)} className="button" pointerEvents="all"/>
                    <Minus onClick={() => this.props.zoom(false)} className="button" pointerEvents="all"/>
                </div>
                <div className="input"><input onChange={(e) => this.props.choose(e.target.value)} className="inputField"/><Search  className="icon" pointerEvents="none"/></div>
            </div>
        );
    }
}