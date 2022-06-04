import React from 'react';
import { Components, useSingle2 } from 'meteor/vulcan:core';
import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet'
import { RoomHeader } from '../Talk/RoomHeader';
import { RoomMessages } from '../Talk/RoomMessages';
//import { Rooms } from 'meteor/talk';

export const ActiveRoom = () => {
  const match = useRouteMatch();
  const options = {
    collectionName: 'Rooms',
    fragmentName: 'RoomsList',
    input: {filter: {slug: { _eq: match.params.slug }}}
  }
  const { loading, document } = useSingle2(options);
  return (
  <React.Fragment>
    {!loading && document ? (
      <div>
        <Helmet><link rel="stylesheet" type="text/css" href="/usa.css"/></Helmet>
      <Components.HeadTags title={`${document.name} ▵△${document.currentExpPoints} / ${document.totalExpPoints}△▵  ☸${document.level} / ${document.maxLevel}☸`}/>
        <RoomHeader room={document}/>
        <RoomMessages roomId={document._id} color={document.colorScheme.color} backgroundColor={document.colorScheme.backgroundColor} linkColor={document.colorScheme.linkColor}/>
      </div>
    ): null }
  </React.Fragment>
  )
}