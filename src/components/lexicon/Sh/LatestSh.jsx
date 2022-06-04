import React from 'react';
import { Components, useMulti2 } from 'meteor/vulcan:core';
import { Sh } from 'meteor/lexicon'

const options = {
  collectionName: 'Shs',
  fragmentName: 'ShBest',
  input: {sort: {createdAt: 'desc'}, limit: 1}
}

export const LatestSh = () => {
  const { loading, results } = useMulti2(options);
  return (
  <React.Fragment>
    {!loading && results.map( sh => (
      <React.Fragment key={sh._id}>
        <Components.HeadTags title={sh.leftBumper + ' ' + sh.text + ' ' + sh.rightBumper}/>
        <Sh sh={sh}/>
      </React.Fragment>
    ))}
    {!loading && results.length === 0 ? (
      <React.Fragment>
        <Components.HeadTags title={"=== Shielkwȃmm ==="}/>
        <h1 style={{textAlign: 'center'}}>=== Shielkwȃmm ===</h1>
      </React.Fragment>
    ): null}
  </React.Fragment>
  )
}