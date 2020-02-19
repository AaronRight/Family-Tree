
import React from 'react'
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

export function sumObjects(a, b){
  if(b== undefined) b = {}
  return { ...a, ...b };
  
}

/* -------------------- Scale functions -------------------- */

export function scaleFamily(scale){
  return {
    flex: 1,
    fontSize: 17.5 * scale
  }
}
export function scaleFamilyRealm(scale){
  return {
    display: 'flex',
    height: 60 * scale,
  }
}

export function scalePhoto(scale){
  return {
    maxWidth: 200 * scale,
    maxHeight: 200 * scale
  }
}

export function scaleGenderIcon(scale){
  return {
    width: 60 * scale,
    height: 60 * scale
  }
}

export function scaleSvg(scale){
  return {
    width: 200 * scale,
    height: 200 * scale
  }
}

export function scalePerson(scale){
  return {
    fontSize: 17.5 * scale
  }
}

export function scaleGenerationIcon(scale){
  return {
    fontSize: 20 * scale,
    padding: 5* scale
  }
}






