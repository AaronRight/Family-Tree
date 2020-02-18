import React from "react";
import "./Person.css";
import { ReactComponent as Female } from "../../references/female.svg";
import { ReactComponent as Male } from "../../references/male.svg";
import { ReactComponent as Venus } from "../../references/venus.svg";
import { ReactComponent as Mars } from "../../references/mars.svg";

export class Person extends React.Component {
  photo() {
    if (this.props.person.photo) return <img className="photo" src={this.props.person.photo} />;
    if (this.props.person.gender === "female") return <Female className="photo"/>;
    return <Male className="photo"/>;
  }

  gender() {
    if (this.props.person.gender === "female") return <Venus className="icon"/>;
    return <Mars className="icon"/>;
  }

  age() {
    if (this.props.person.date_of_death) return <span></span>;
    if (this.props.person.date_of_birth)
  return <span>{
    new Date().getFullYear() - 
    new Date(this.props.person.date_of_birth).getFullYear()
    }</span>;
  }

  render() {
    return (
      <div ref={this.props.id} className="person">
        <div className="name">
          <span> {this.props.person.first_name} </span>
          <span> &nbsp; </span>
          <span> {this.props.person.last_name} </span>
        </div>
        <div className="visual">
          {this.photo()}
          <div className="gender">
            {this.gender()} 
            {this.age()}
          </div>
        </div>
        <div className="life_time">
          <span> {this.props.person.date_of_birth} </span>
          <span> &nbsp; </span>
          <span> {this.props.person.date_of_death} </span>
        </div>
      </div>
    );
  }
}
