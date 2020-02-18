import React from "react";
import "./Person.css";
import { ReactComponent as Female } from "../../references/female.svg";
import { ReactComponent as Male } from "../../references/male.svg";
import { ReactComponent as Venus } from "../../references/venus.svg";
import { ReactComponent as Mars } from "../../references/mars.svg";
import { scalePerson, scalePhoto, scaleSvg, scaleGenderIcon } from '..'

export class Person extends React.Component {
  photo() {
    if (this.props.person.photo) return <img style={scalePhoto(this.props.scale)} className="photo" src={this.props.person.photo} />;
    if (this.props.person.gender === "female") return <Female style={scaleSvg(this.props.scale)} className="photo"/>;
    return <Male style={scaleSvg(this.props.scale)} className="photo"/>;
  }

  gender() {
    if (this.props.person.gender === "female") return <Venus style={scaleGenderIcon(this.props.scale)} className="icon"/>;
    return <Mars style={scaleGenderIcon(this.props.scale)} className="icon"/>;
  }

  age() {
    if (this.props.person.date_of_death) return <span></span>;
    if (this.props.person.date_of_birth)
  return <span>{
    new Date().getFullYear() - 
    new Date(this.props.person.date_of_birth).getFullYear()
    }</span>;
  }

  isChoosen(name){
    if (name == '') return false;
    if(this.props.person.first_name.toString().startsWith(name)
        || this.props.person.last_name.toString().startsWith(name)
        || (`${this.props.person.first_name} ${this.props.person.last_name}`).startsWith(name)  
        || (`${this.props.person.last_name} ${this.props.person.first_name}`).startsWith(name)  )
        return true;
    return false;    
  }

  render() {
    return (
      <div style={scalePerson(this.props.scale)}
       ref={this.props.id} className={`person ${this.isChoosen(this.props.choose) && 'choosed'}`}>
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
