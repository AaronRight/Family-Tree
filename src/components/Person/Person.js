import React from 'react';
import './Person.css';
import { ReactComponent as Female } from '../../references/female.svg'
import { ReactComponent as Male } from '../../references/male.svg'
import { ReactComponent as Venus } from '../../references/venus.svg'
import { ReactComponent as Mars } from '../../references/mars.svg'

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

  photo(){
    if(this.props.person.photo)
      return <img src={this.props.person.photo} />
    if(this.props.person.gender == 'female')
      return <Female />
    return <Male />
  }

  gender(){
    if(this.props.person.gender == 'female')
      return  <Venus />
    return  <Mars />
  }

  age(){
    if(this.props.person.date_of_death)
      return;
    if(this.props.person.date_of_birth)
      return new Date(this.props.person.date_of_birth)
  }

  render() {
    return (
      <div className="person">
        <div>
          <span> {this.props.person.first_name} </span>
          <span> {this.props.person.last_name} </span>
        </div>
        <div>
           {this.photo()} {this.gender()} {this.age()}
        </div>
        <div>
          <span> {this.props.person.date_of_birth} </span>
          <span> {this.props.person.date_of_death} </span>
        </div>
      </div>
    );
  }
}
