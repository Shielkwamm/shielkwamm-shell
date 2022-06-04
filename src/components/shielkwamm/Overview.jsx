import React from 'react';
import { useSingle2, Components } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import { LatestSh } from 'meteor/lexicon';
import { Room } from 'meteor/talk';

export const Overview = () => {
  const options = {
    collectionName: 'Rooms',
    fragmentName: 'RoomsList',
    input: {filter: {isFeatured: {_eq: true}}}
  }
  const { loading, document } = useSingle2(options);
  return (
    <div className="movies-list">
      <Components.HeadTags title={'=== Shielkwamm ==='}/>
      <p style={{paddingLeft: '16px'}}><i>Welcome weary adventurers to...</i></p>
      <LatestSh/>
      <hr></hr>
      {!loading && document? (
        <Room room={document}/>
      ): <h1>We are experiencing high call volume... please call back...</h1> }
      <hr></hr>
      <h2 style={{textAlign: 'center'}}><Link to="/rooms">Rooms</Link> | <Link to="/handles">Handles</Link> | <Link to="/parties">Parties</Link></h2>
      <h2 style={{textAlign: 'center'}}><Link to="/color-schemes">Color</Link> | <Link to="/i18n">i18n</Link> | <Link to="/things">Things</Link></h2>
      <h2 style={{textAlign: 'center'}}><Link to="/historic-sh">△shh△</Link> | <Link to="/having-things">Having Things</Link></h2>
      <hr></hr>
    </div>
  )
}
