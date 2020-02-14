import React from "react";
import { Person, Generation, Panel } from "./components";
import "./App.css";
import { ArcherContainer } from 'react-archer';

/* 
for(let i = 1; i<100; i++){
    console.log(`"${i}" : {`)
    console.log(`"first_name" : ${i},`)
    console.log(`"last_name" : ${i},`)
    console.log(`"gender" : "${ Math.random() > 0.5 ? "male" : "female"}",`)
    console.log(`"date_of_birth" : "${ 1900 + Math.floor(Math.random() * 120) }-${Math.floor(Math.random() * 12) }-${ Math.floor(Math.random() * 31) }"`)
    if (Math.random() > 0.9)
        console.log(`,"date_of_death" : "${ 1900 + Math.floor(Math.random() * 120) }-${Math.floor(Math.random() * 12) }-${ Math.floor(Math.random() * 31) }"`)
    console.log(`},`)
}
*/

export class App extends React.Component {
  state = {
    people: {},
    families: {},
    show_till: 9999,
    toggled_families: []
  };
  
  constructor(props){
    super(props)
    
    this.toggleGeneration = this.toggleGeneration.bind(this);
    this.toggleFamily = this.toggleFamily.bind(this);
  }

  findFamilies(personId) {
    let families = [];
    for (let f of Object.keys(this.state.families))
      if (this.state.families[f].people.includes(personId)) families.push(f);
    return families;
  }

  getRidOfDuplicates(array){
    let already = new Set()
    let result = []
    for(let items of array){
      for(let item of items){
        if(!already.has(item)){
          result = [...result, [item]]
          already.add(item)
        }
      }
    }
    return result
  }

  calculateNextGeneration(generations, n) {

    let last_generation = true;
    if( this.state.show_till <= n ) {
      generations[n-1]["families"] = []
      return
    }

    for (let set_of_families of generations[n - 1]["families"]) {
      for (let f of set_of_families) {
        if (generations[n] === undefined) generations[n] = {};
        generations[n]["number"] = n;
        if (generations[n]["people"] === undefined)
          generations[n]["people"] = [];
        if (generations[n]["families"] === undefined)
          generations[n]["families"] = [];

        let children = this.state.families[f]["children"];
        if (children === undefined) children = [];
        generations[n]["people"] = [...generations[n]["people"], children];

        for (let c of children) {
          let families = this.findFamilies(c);
          if (families.length > 0) last_generation = false;
          
            generations[n]["families"] = [
              ...generations[n]["families"],
              families
            ];
        }

        
      }
    }

    generations[n]["families"] = this.getRidOfDuplicates(generations[n]["families"]);

    if (!last_generation) this.calculateNextGeneration(generations, n + 1);
  }

  calculateGenerations() {
    /*
      to calculate generations we have to find the origin point - first family
      there are few ways:
      find the earliest one - but we have to have all dates consistant
      find the one who had children, but not being a child for anybody - recursive way - to heavy
      Easiest - point from where we should start - 'root' point - we get rid of presearhing tree, 
      and can calculate generations immediately
    */
    if (!this.state.families["root"]) return {}
    let generations = {};
    generations["0"] = {
      people: [this.state.families["root"].people],
      families: [["root"]],
      number: 0
    };
    this.calculateNextGeneration(generations, 1);
    //console.log(generations)
    
    return generations;
  }

  async componentDidMount() {
    let resp_people = await fetch("people.json");
    let resp_families = await fetch("families.json");
    this.setState({
      people: await resp_people.json(),
      families: await resp_families.json()
    });
  }

  toggleGeneration(n){
    if(this.state.show_till == n)
      this.setState({show_till: 9999});
    else 
      this.setState({show_till: n});
  }

  toggleFamily(n){
    console.log(132)
    if(this.state.toggled_families.includes(n))
      this.setState({toggled_families: this.state.toggled_families.filter((el) => el == n)});
    else 
      this.setState({toggled_families: [...this.state.toggled_families,n]});
  }

  render() {
    
    let generations = this.calculateGenerations();
    console.log(generations)
    return (
      <div className="App">

      <Panel />

      <ArcherContainer>
        {Object.keys(generations).map(el => (
          <Generation
          key={el}
          generation={generations[el]}
          people={this.state.people}
          families={this.state.families}
          toggleGeneration={this.toggleGeneration}
          toggleFamily={this.toggleFamily}
        />
        ))}

      </ArcherContainer>
      </div>
    );
  }
}/*  */
