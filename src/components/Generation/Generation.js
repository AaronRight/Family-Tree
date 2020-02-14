import React from "react";
import "./Generation.css";
import { Person, Family } from "..";
import { ArcherElement } from 'react-archer';

export class Generation extends React.Component {

  findRefernced(id, already_listed) {
    /* draw not only direct children in generation, but their partners */
    let people = [];

    if (!already_listed.al.includes(id)) people = [...people, id];
    for (let family_set of this.props.generation.families) {
      for (let f of family_set)
        if (this.props.families[f].people.includes(id))
          /* if person is family member but not in list - then it is partner */

          for (let p of this.props.families[f].people)
            if (!this.props.generation.people.includes(p) && !people.includes(p) && !already_listed.al.includes(p))
              people = [...people, p];
    }

    already_listed.al = [...already_listed.al, ...people]

    let relations = {}
    for (let p of people) {
      relations[p] = []
      let family_set = this.findFamily(p);
      for (let f of family_set) {
        relations[p] = [...relations[p],
          {
            targetId: `f_${f}`,
            targetAnchor: 'top',
            sourceAnchor: 'bottom',
          }
        ]
      }
    }
    console.log('people', people)
    return (
      <div key={id} className="members_cell">
        {people.map(el => (
          <ArcherElement
            style={{margin: '5px'}}
            key={el}
            id={`p_${el}`}
            relations={relations[el]}
          >
            <Person person={this.props.people[el]} />
          </ArcherElement>
        ))}
      </div>
    );
  }


  findFamily(id) {
    let families = [];
    for (let family_set of this.props.generation.families) {
      for (let f of family_set)
        if (this.props.families[f].people.includes(id))
          families = [...families, f];
    }
    return families;
  }

  generation_realm(){
    let already_listed = {al: []} // for circular dependencies ( if children of children ... of children get married )

    return this.props.generation.people.map(array =>
      array.map(el => this.findRefernced(el, already_listed))
    )
  }

  render() {
    let relations = {}
    for (let family_set of this.props.generation.families) {
      for(let f of family_set){
      relations[f] = []
      if(this.props.families[f]){
      for (let p of this.props.families[f].children) {
        relations[f] = [...relations[f],
          {
            targetId: `p_${p}`,
            targetAnchor: 'top',
            sourceAnchor: 'bottom',
          }
        ]
      }}}
    }
//
    return (
        <div className="generation">
          <div className="generation_number"
           onClick={() => this.props.toggleGeneration(this.props.generation.number + 1)}>
            <span>
              {this.props.generation.number + 1}
            </span>
          </div>
          <div className="realm">
            <div className="generation_realm">
              {this.generation_realm()}
            </div>
            <div className="family_realm">
              {this.props.generation.families.map(array =>
                array.map(el => (
                  <ArcherElement
                    style={{margin: '40px'}}
                    key={el}
                    id={`f_${el}`}
                    relations={relations[el]}
                  >
                    <Family 
                    toggleFamily = {this.props.toggleFamily}
                    id = {el}
                    family={this.props.families[el]} />
                  </ArcherElement>
                )
                ))}
            </div>
          </div>
        </div>
    );
  }
}
