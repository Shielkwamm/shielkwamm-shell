import React from 'react';
import { Components, useSingle2 } from 'meteor/vulcan:core';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import { RoomHeader } from '../Talk/RoomHeader';

export const RoomModInner = () => {
  const options = {
    collectionName: 'Rooms',
    fragmentName: 'RoomsList',
  }
  const { loading, document } = useSingle2(options);
  return (
  <React.Fragment>
    {!loading && document ? (
      <React.Fragment>
        <RoomHeader room={document}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['name']}/>
        <Components.SmartForm collectionName='Messages' fields={['text']} prefilledProps={{roomId: document._id}}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['currentExpPoints', 'level']}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['zork']}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['bwam']}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['_sh_']}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['vibe']}/>
        <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['currentMusicUrl', 'currentMusicTitle']}/>
      </React.Fragment>
    ): null}
  </React.Fragment>
  )
}

export const RoomMod = () => {
  const match = useRouteMatch();
  return (
    <RoomModInner input={{selector: {slug: match.params.slug}}}/>
  )
};