import React from "react";
import "./Generation.css";
import { Person } from "..";

let already_listed = [] // for circular dependencies ( if children of children ... of children get married )

export class Generation extends React.Component {

  findRefernced(id) {
    /* draw not only direct children in generation, but their partners */
    let people = [];
    if(!already_listed.includes(id)) people = [...people, id];
    for (let family_set of this.props.generation.families) {
      for (let f of family_set)
        if (this.props.families[f].people.includes(id))
          /* if person is family member but not in list - then it is partner */

          for (let p of this.props.families[f].people)
            if (!this.props.generation.people.includes(p) && !people.includes(p) && !already_listed.includes(p) )
              people = [...people, p];
    }

    already_listed = [...already_listed, ...people]

    return (
      <div key={id} className="members_cell">
        {people.map(el => (
          <Person key={el} person={this.props.people[el]} />
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="generation">
        {this.props.generation.people.map(array =>
          array.map(el => this.findRefernced(el))
        )}
      </div>
    );
  }
}
