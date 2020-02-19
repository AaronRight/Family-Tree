import React from "react";
import { Generation, Panel, } from "./components";
import { calculateGenerations } from "./components/Generation/Generation";
import "./App.css";
import { ArcherContainer } from 'react-archer';

export class App extends React.Component {
  state = {
    people: {},
    families: {},
    show_till: 9999,
    toggled_families: [],
    relations: [],
    scale: 1,
    choose: '',
    settings: {}
  };

  constructor(props) {
    super(props);

    this.toggleGeneration = this.toggleGeneration.bind(this);
    this.toggleFamily = this.toggleFamily.bind(this);
    this.zoom = this.zoom.bind(this);
    this.choose = this.choose.bind(this);
  }
/* 
  Relationship lines, texts, boxes .... must be easily and independently brandable per generation from the settings file 
  (ex: border color, text color, font, background color and style)
*/
  async componentDidMount() {
    let resp_people = await fetch("people.json");
    let resp_families = await fetch("families.json");
    let resp_settings = await fetch("settings.json");
    this.setState({
      people: await resp_people.json(),
      families: await resp_families.json(),
      settings: await resp_settings.json()
    });
  }

  zoom(in_out = false){
    this.setState({scale : this.state.scale + ( in_out ? 1 : -1 ) * 0.05});
  }

  choose(text){
    this.setState({choose : text});
  }

  toggleGeneration(n) {
    if (this.state.show_till == n) this.setState({ show_till: 9999 });
    else this.setState({ show_till: n });
  }

  toggleFamily(n) {
    if (this.state.toggled_families.includes(n)) {
      this.setState({
        toggled_families: this.state.toggled_families.filter(e => e != n)
      });
    } else {
      this.setState({ toggled_families: [...this.state.toggled_families, n] });
    }
  }

  render() {
    let generations = calculateGenerations(this.state.show_till, this.state.toggled_families, this.state.families);

    return (
      <div className="App">
        <Panel zoom={this.zoom} choose={this.choose}/>
        <ArcherContainer>
          <div style={{ display: 'flex', flexDirection: 'column-reverse' }}>
            {[].concat(Object.keys(generations)).reverse().map(el => (
              <Generation
                key={el}
                generation={generations[el]}
                people={this.state.people}
                families={this.state.families}
                toggleGeneration={this.toggleGeneration}
                toggleFamily={this.toggleFamily}
                toggled_families={this.state.toggled_families}
                scale={this.state.scale}
                choose={this.state.choose}
                settings={this.state.settings}
              />
            ))}
          </div>
        </ArcherContainer>
      </div>
    );
  }
} /*  */
