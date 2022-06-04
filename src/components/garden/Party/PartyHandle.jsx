import React from 'react';
import { HandlePartiesList } from '../Handle/HandlePartiesList';

export const PartyHandle = ({ handle, colorScheme }) => (
  <React.Fragment>
  <h3><span style={{color: colorScheme.linkColor}}>{handle.isActive? '': 'zZz '} {handle.mood}</span> {handle.name}{handle.inventory.length > 0? '_' + handle.inventory.join(''): ''} <HandlePartiesList handleParties={handle.parties}/><span style={{float: 'right'}}>{handle.note}</span></h3> 
  </React.Fragment>
)