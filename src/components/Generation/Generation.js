import React from "react";
import "./Generation.css";
import { Person, Family, getRidOfDuplicates } from "..";
import { findFamilies } from "../Family/Family";
import { ArcherElement } from "react-archer";

function toggleGenerationFlag(generations, show_till) {
  for (let g of Object.keys(generations)) {
    if (show_till - 1 == generations[g].number) {
      generations[g].toggled = true;
    } else {
      generations[g].toggled = false;
    }
  }
}

function calculateNextGeneration(generations, n, show_till, toggled_families, families) {
  if (generations[n] === undefined) generations[n] = {};
  generations[n]["number"] = n;
  if (generations[n]["people"] === undefined) generations[n]["people"] = [];
  if (generations[n]["families"] === undefined)
    generations[n]["families"] = [];
  if (generations[n]["toggled_families"] === undefined)
    generations[n]["toggled_families"] = [];

  let last_generation = true;
  if (show_till <= n) {
    generations[n - 1]["families"] = [];
    toggleGenerationFlag(generations, show_till);
    return;
  }

  for (let set_of_families of generations[n - 1]["families"]) {
    for (let f of set_of_families) {
      if (toggled_families.includes(f)) continue;

      let children = families[f]["children"];
      if (children === undefined) children = [];
      generations[n]["people"] = [...generations[n]["people"], children];

      for (let c of children) {
        let families_f = findFamilies(families, c);
        if (families_f.length > 0) last_generation = false;

        generations[n]["families"] = [
          ...generations[n]["families"],
          families_f
        ];
      }
    }
  }

  generations[n]["families"] = getRidOfDuplicates(
    generations[n]["families"]
  );

  if (!last_generation) calculateNextGeneration(generations, n + 1, show_till, toggled_families, families);
}

export function calculateGenerations(show_till, toggled_families, families) {
  /*
    to calculate generations we have to find the origin point - first family
    there are few ways:
    find the earliest one - but we have to have all dates consistant
    find the one who had children, but not being a child for anybody - recursive way - to heavy
    Easiest - point from where we should start - 'root' point - we get rid of presearhing tree, 
    and can calculate generations immediately
  */
  if (!families["root"]) return {};
  let generations = {};
  generations["0"] = {
    people: [families["root"].people],
    families: [["root"]],
    number: 0,
    toggled_families: []
  };
  calculateNextGeneration(generations, 1, show_till, toggled_families, families);

  return generations;
}


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
            if (
              !this.props.generation.people.includes(p) &&
              !people.includes(p) &&
              !already_listed.al.includes(p)
            )
              people = [...people, p];
    }

    already_listed.al = [...already_listed.al, ...people];

    //console.log(1)
    let relations = {};
    for (let p of people) {
      relations[p] = [];
      let family_set = this.findFamily(p);
      for (let f of family_set) {
        relations[p] = [
          ...relations[p],
          {
            targetId: `f_${f}`,
            targetAnchor: "top",
            sourceAnchor: "bottom"
          }
        ];
      }
    }
    //console.log(relations)
    return (
      <div key={id} className="members_cell">
        {people.map(el => (
          <ArcherElement
            style={{ margin: '50px' }}
            relations={relations[el]}
            key={el}
            id={`p_${el}`}
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

  generation_realm() {
    let already_listed = { al: [] }; // for circular dependencies ( if children of children ... of children get married )

    return this.props.generation.people.map(array =>
      array.map(el => this.findRefernced(el, already_listed))
    );
  }

  render() {
    let relations = {};
    for (let family_set of this.props.generation.families) {
      for (let f of family_set) {
        if (this.props.toggled_families.includes(f)) continue;

        relations[f] = [];
        if (this.props.families[f]) {
          for (let p of this.props.families[f].children) {
            relations[f] = [
              ...relations[f],
              {
                targetId: `p_${p}`,
                targetAnchor: "top",
                sourceAnchor: "bottom"
              }
            ];
          }
        }
      }
    }
    //
    //console.log(relations)
    return (
      <div className="generation">
        <div
          className={`generation_number ${
            this.props.generation.toggled ? "generation_number_border" : ""
            }`}
          onClick={() =>
            this.props.toggleGeneration(this.props.generation.number + 1)
          }
        >
          <span>{this.props.generation.number + 1}</span>
        </div>

        <div className="realm">
          <div className="family_realm">
            {this.props.generation.families.map(array =>
              array.map(el => (
                <ArcherElement
                  key={el}
                  id={`f_${el}`}
                  relations={relations[el]}
                >
                  <Family
                    toggleFamily={this.props.toggleFamily}
                    id={el}
                    toggled={this.props.toggled_families.includes(el)}
                    family={this.props.families[el]}

                  />
                </ArcherElement>
              ))
            )}
          </div>
          <div className="generation_realm">{this.generation_realm()}</div>
        </div>
      </div>
    );
  }
}
