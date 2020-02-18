import { Person } from './Person/Person'
import { Generation } from './Generation/Generation'
import { Family } from './Family/Family'
import { Panel } from './Panel/Panel'
export { Person, Family, Generation, Panel, } 


export function getRidOfDuplicates(array) {
    let already = new Set();
    let result = [];
    for (let items of array) {
      for (let item of items) {
        if (!already.has(item)) {
          result = [...result, [item]];
          already.add(item);
        }
      }
    }
    return result;
  }