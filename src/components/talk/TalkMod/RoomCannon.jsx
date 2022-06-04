import React from 'react';
import { Components, useSingle2, useMulti2 } from 'meteor/vulcan:core';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RoomHeader } from '../Talk/RoomHeader';

export const RoomCannonMessage = ({ message, linkColor }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <React.Fragment>
      {isEditing ? (
        <React.Fragment>
          <p><a onClick={e => setIsEditing(false)} style={{color: linkColor}}>exit</a></p>
          <Components.SmartForm collectionName='Messages' fields={['text']} documentId={message._id} successCallback={document => {setIsEditing(false);}}/>
        </React.Fragment>
      ) : (
        <p><a onClick={e => setIsEditing(true)} style={{color: linkColor}}>edit</a> {new Date(message.createdAt).toLocaleTimeString()}: {message.text}</p>
      )}
    </React.Fragment>
  )
}

const messagesOptions = {
  collectionName: 'Messages',
  fragmentName: 'MessagesList',
  pollInterval: .1
}

export const RoomCannonMessagesInner = ({ linkColor, backgroundColor, color }) => {
  const { loading, results } = useMulti2(messagesOptions);
  return (
  <React.Fragment>
  {!loading && results.map(message =>
    <div key={message._id}>
       <RoomCannonMessage message={message} linkColor={linkColor}/>
    </div>
  )}
  </React.Fragment>
  )
};

export const RoomCannonMessages = ({ roomId, linkColor, backgroundColor, color }) => (
  <RoomCannonMessagesInner linkColor={linkColor} color={color} backgroundColor={backgroundColor} input={{filter: {roomId: {_eq: roomId}}}}/>
);



export const RoomCannon = () => {
  const match = useRouteMatch();
  const options = {
    collectionName: 'Rooms',
    fragmentName: 'RoomsList',
    input: {filter: {slug: {_eq: match.params.slug}}}
  }
  const { loading, document } = useSingle2(options)
  
  return (
  <React.Fragment>
    {!loading && document ? (
      <div>
        <RoomHeader room={document}/>
        <Components.HeadTags title={`🔬🔬🔬: ${document.name}`}/>
        <Components.SmartForm collectionName="Rooms" showRemove={false} documentId={document._id} fields={['areCannonMessagesMuted']}/>
        <Components.SmartForm collectionName="Rooms" showRemove={false}  documentId={document._id} fields={['zork']}/>
        <Components.SmartForm collectionName="Rooms" showRemove={false}  documentId={document._id} fields={['_sh_']}/>
        <Components.SmartForm collectionName="Rooms" showRemove={false}  documentId={document._id} fields={['currentExpPoints', 'level']}/>
        <hr></hr>
        <Components.SmartForm collectionName='Messages' fields={['text']} prefilledProps={{roomId: document._id}}/>
        <RoomCannonMessages roomId={document._id} linkColor={document.linkColor} color={document.color} backgroundColor={document.color}/>
      </div>
    ): null}
  </React.Fragment>
  )
}