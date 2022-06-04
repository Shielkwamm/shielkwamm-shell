import React from 'react';
import { Components, useSingle2 } from 'meteor/vulcan:core';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

export const RoomDJ = () => {
  const match = useRouteMatch();
  const options = {
    collectionName: 'Rooms',
    fragmentName: 'RoomBase',
    input: {filter: {slug: {_eq: match.params.slug}}}
  }
  const { loading, document } = useSingle2(options);
  return (
    <React.Fragment>
      {loading ? (
        null
      ) : (
        <div>
          <Components.HeadTags title={`⬤⬤⬤: ${document.name}`}/>
          <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['areDJMessagesMuted']}/>
          <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['bwam']}/>
          <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['vibe']}/>
          <Components.SmartForm showRemove={false} collectionName="Rooms" documentId={document._id} fields={['currentMusicUrl', 'currentMusicTitle']}/>
        </div>
      )}
    </React.Fragment>
  )
}