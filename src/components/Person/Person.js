import React from 'react';
import './Person.css';

/* 


First Name,
 Last Name, 
 Date of Birth(optional) 
 Date of Death(optional) , 
 profile picture (optional, if picture not provided will use default male/female picture), 
 Gender, 
 
 date of marriage
- The following person relationships types should be supported: Married, Single, Married twice , Married with kids, Single but with kids 

*/

export class Person extends React.Component {
  render() {
    return (
      <div className="person">
        <div>
          <span> Gender: </span> <span> {this.props.person.gender} </span>
        </div>
        <div>
          <span> First Name: </span> <span> {this.props.person.first_name} </span>
        </div>
        <div>
          <span> Last Name: </span> <span> {this.props.person.last_name} </span>
        </div>
        <div>
          <span> Photo: </span> <img src={this.props.person.photo} />
        </div>
      </div>
    );
  }
}
