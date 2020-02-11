import React from "react";
import "./Family.css";

/* 
 date of marriage
- The following person relationships types should be supported: Married, Single, Married twice , Married with kids, Single but with kids 
*/

export class Family extends React.Component {
  render() {
    console.log(this.props.family)
    return (
      <div className="family">
        <span>{this.props.family.wedding_date}</span>

        {
          this.props.family.date_of_divorce ?
            (
              <span> &nbsp;/&nbsp; </span>
            ) : (<span></span>)
        }

        <span>{this.props.family.date_of_divorce}</span>
      </div>
    );
  }
}
