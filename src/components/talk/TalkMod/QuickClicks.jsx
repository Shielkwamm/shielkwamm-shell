import React from 'react';
import { Components, useSingle2 } from 'meteor/vulcan:core';
import { useRouteMatch } from 'react-router';

export const QuickClicks = () => {
  const match = useRouteMatch();
  const options = {
    collectionName: 'Rooms',
    fragmentName: 'RoomsList',
    input: {filter: {slug: {_eq: match.params.slug}}}
  }

  const { loading, document } = useSingle2(options);
      
  
  return (
    <React.Fragment>
      {!loading && document ? (
    <React.Fragment>
        
    {document.roomI18ns.map( roomI18n => (
    <h1 key={roomI18n.i18n._id}>
      {roomI18n.i18n.glyphSet.split(' ').map((glyph, index) => (
        <span style={{cursor: "grab"}} onClick={e => {window.document.querySelector('#z' + roomI18n.i18n._id + '_' + index).select(), window.document.execCommand('copy')}} key={roomI18n.i18n._id + '_' + index}>{glyph} <input style={{position: 'absolute', top: '-200px', left: '-200px'}} id={'z' + roomI18n.i18n._id + '_' + index} defaultValue={glyph}/></span>
      ))}
    </h1>
  ))}
  <hr></hr>
  <h2>△áìéïḱḿí△ △Ńń△ ▵ÖöÓóÒòÔôḱ▵</h2>
        
  </React.Fragment>
  ): null }
    </React.Fragment>
  )
  
}