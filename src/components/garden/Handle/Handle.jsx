import React from 'react';
import { HandlePartiesList } from './HandlePartiesList';

export const Handle = ({ handle, colorScheme, isShowingZzZs = true}) => (
  <React.Fragment>
    <h3>{handle.isActive && isShowingZzZs ? '': 'zZz '} {handle.mood} {handle.name}{handle.inventory.length > 0? '_' + handle.inventory.join(''): ''} <HandlePartiesList handleParties={handle.parties}/><span style={{float: 'right'}}>{handle.note}</span></h3> 
  </React.Fragment>
)