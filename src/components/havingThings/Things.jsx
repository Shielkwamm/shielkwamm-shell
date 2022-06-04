import React from 'react';
import { Components, useMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

export const EquipmentList = () => {
  const equipmentOptions = {
    collectionName: 'Equipment',
    fragmentName: 'EquipmentFragment',
    limit: 11
  }
  const { loading, results } = useMulti2(equipmentOptions);
  return (
  <React.Fragment>
    <Grid container>
    {!loading && results.map(equipment => (
      <React.Fragment key={equipment._id}>
        <Grid item xs={6} sm={4} md={3}>
      <h2>{equipment.glyph} {equipment.name}</h2>
      <p><a href={equipment.guideUrl}>guide</a></p>
      <p>{equipment.description}</p>
      </Grid>
      </React.Fragment>
      )
    )}
    </Grid>
  </React.Fragment>
  )
}

export const Things = () => (
  <React.Fragment>
    <Components.HeadTags title={'Things'} />
    <h2><Link to="/">../ </Link></h2>
    <h2>Things</h2>
    <hr></hr>
    <EquipmentList/>
  </React.Fragment>
);