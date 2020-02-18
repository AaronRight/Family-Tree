import React from "react";
import "./Family.css";
import { scaleFamily } from '..'

export function findFamilies(families, personId) {
  let families_f = [];
  for (let f of Object.keys(families))
    if (families[f].people.includes(personId)) families_f.push(f);
  return families_f;
}

export class Family extends React.Component {
  render() {
    return (
      <div style={scaleFamily(this.props.scale)} className={`family ${this.props.toggled ? 'family_toggled' : ''}`} onClick={() =>  (this.props.toggleFamily(this.props.id))}
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


