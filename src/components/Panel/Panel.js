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
                    <Plus className="button"/>
                    <Minus className="button"/>
                </div>
                <div className="input"><Search /></div>
            </div>
        );
    }
}