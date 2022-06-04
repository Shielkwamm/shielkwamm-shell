import React from 'react'
import { Components, useSingle2 } from 'meteor/vulcan:core'
import { useRouteMatch } from 'react-router'
import { QuickClicks } from './QuickClicks'
//import { RoomHeader } from '../Talk/RoomHeader';

//## HACKY - hidden input field but using for copy to clip board

export const RoomOperator = () => {
  const match = useRouteMatch();
  const options = {
    collectionName: 'Rooms',
    fragmentName: 'RoomOperator',
    input: {filter: {slug: {_eq: match.params.slug}}}
  }
  const { loading, document } = useSingle2(options);
  return (
  <React.Fragment>
    {loading ? (
      null
    ) : (
      <div>
        <Components.HeadTags title={'operat0r'}/>
        <QuickClicks/>
        <hr></hr>
        {document.roomHandles.map((roomHandle, index) => (
          <React.Fragment key={roomHandle._id}>
          <h2 onClick={e => {window.document.querySelector('#z' + roomHandle._id + '_' + index).select();window.document.execCommand('copy')}}>{roomHandle.handle.name}</h2>
          <input style={{position: 'absolute', top: '-200px', left: '-200px'}} id={'z' + roomHandle._id + '_' + index} defaultValue={roomHandle.handle.name}/>
          {roomHandle.handle.handleCurrencies.map( handleCurrency => (
            <p key={handleCurrency._id}>{handleCurrency.currency.glyph} {handleCurrency.amount}</p>
          ))}
          </React.Fragment>
        ))}
      </div>
    )}
  </React.Fragment>
  )
}
//console.log(rh.handle) && rh.handle.currencies && 

/*
function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
*/

