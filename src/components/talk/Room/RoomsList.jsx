import React, { Component } from 'react';
import { Components, useMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import { Room } from './Room';

export const RoomsList = () => {
  const options = {
    collectionName: 'Rooms',
    fragmentName: 'RoomsList', // uncomment on #Step11
  }
  const { loading, results } = useMulti2(options);
  const linkText = '../';
  return (
    <div className="movies-list">
      <Components.HeadTags title={'Rooms'}/>
      <h2><Link to="/">{linkText}</Link></h2>
      <h2>Rooms <span style={{float: 'right'}}> count [ {results && results.length} / 7 ]</span></h2>
      <hr></hr>
      {!loading && results && results.map(room => (
        <Room key={room._id} room={room}/>
      ))}
    </div>
  )
};