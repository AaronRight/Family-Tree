import React from "react";
import "./Family.css";

/* 
 date of marriage
- The following person relationships types should be supported: Married, Single, Married twice , Married with kids, Single but with kids 
*/

export class Family extends React.Component {
  setReference(el){
    this.props.references[this.props.id] = el;
    console.log(this.props.references)
  }

  render() {
    return (
      <div ref={ (el) => this.setReference(el) } className={`family ${this.props.toggled ? 'family_toggled' : ''}`} onClick={() =>  (this.props.toggleFamily(this.props.id))}
      >
        <span>&nbsp;{this.props.family.wedding_date}</span>

        {
          this.props.family.date_of_divorce ?
            (
              <span> &nbsp;/&nbsp; </span>
            ) : (<span></span>)
        }

        <span>{this.props.family.date_of_divorce}&nbsp;</span>
      </div>
    );
  }
}
