import React from 'react';
import { Components, useMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';

const options = {
  collectionName: 'I18ns',
  fragmentName: 'I18nsList',
}

export const I18nsList = () => {
  const { loading, results} = useMulti2(options);
  return (
    <div className="movies-list">
      <Components.HeadTags title={'i18n'}/>
      <h2><Link to="/">../ </Link></h2>
      <h2>i18n <span style={{float: 'right'}}>count [ {results && results.length} / 17 ]</span></h2>
      <hr></hr>
      {!loading && results.map(i18n => (
        <div key={i18n._id}>
          <h3>{i18n.name} - <span style={{fontWeight: 'normal'}}>{i18n.description}</span></h3>
          <h1>{i18n.glyphSet}</h1>
          <p><a href={i18n.guideUrl} target="_blank">guide</a></p>
          <hr></hr>
        </div>
      ))}
    </div>
  )
};