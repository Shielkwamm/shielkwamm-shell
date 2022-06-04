import React from 'react';
import { Components, useMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import { Sh } from 'meteor/lexicon'

const options = {
  collectionName: 'Shs',
  fragmentName: 'ShBest', // uncomment on #Step11
}

export const HistoricShsList = () => {
  const { loading, results } = useMulti2(options);
  return (
    <div className="movies-list">
      <h2><Link to="/">../</Link></h2>
      <h2>△ Historic △</h2>
      <hr></hr>
      {!loading && results.map(sh => (
        <React.Fragment key={sh._id}>
        <Sh sh={sh}/>
        </React.Fragment>
      ))}  
    </div>
  )
};