import React from 'react';

export const HandlePartiesList = ({ handleParties = []}) => (
  <React.Fragment>
  { handleParties.length > 0 ? (
    <span>[ { handleParties.map((handleParty, index) => (<span key={handleParty._id}>{handleParty.isMod?'#':''}{handleParty.party.name} {(handleParties.length-1 !== index) ? ',': ''} </span>))} ]</span>
  ): null }
  </React.Fragment>
)