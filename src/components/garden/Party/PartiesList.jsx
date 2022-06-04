import React from 'react';
import { Components, useMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Party } from './Party';

export const PartiesList = () => {
  const options = {
    collectionName: 'Parties',
    fragmentName: 'PartiesList',
    limit: 50,
    input: {sort: {isActive: 'desc'}}
  }
  const { loading, results } = useMulti2(options);
  return (
  <div className="movies-list">
    <Components.HeadTags title={'Parties'}/>
    <h2><Link to="/">../ </Link></h2>
    <h2>Parties<span style={{float: 'right'}}>count [ {results && results.length} / 50 ]</span></h2>
    <hr></hr>
    <h1 style={{textAlign: 'center'}}>=== esteemed ===</h1>
    <Grid container spacing={3} style={{padding: '0 20px 20px 20px'}}>
    {!loading && results.map(party => (
      <React.Fragment key={party._id + 'es'}>
        {!!party.isEsteemed ? (
          <Grid item md={6} sm={12}>
            <Party party={party}/>
          </Grid>
        ): null }
        </React.Fragment>
    ))}
    </Grid>
    <hr></hr>
    <h1 style={{textAlign: 'center'}}>=== Active ===</h1>
    <Grid container spacing={3} style={{padding: '0 20px 20px 20px'}}>
    {!loading && results.map(party => (
      <React.Fragment key={party._id + 'ac'}>
        {!party.isEsteemed && !!party.isActive ? (
          <Grid item md={6} sm={12}>
            <Party party={party}/>
          </Grid>
       ): null}
       </React.Fragment>
    ))}
    </Grid>
    <hr></hr>
    <h1 style={{textAlign: 'center'}}>=== Inactive ===</h1>
    <Grid container spacing={3} style={{padding: '0 20px 20px 20px'}}>
    {!loading && results.map(party => (
      <React.Fragment  key={party._id + 'in'} >
      {!party.isEsteemed && !party.isActive? (
        <Grid item md={6} sm={12}>
          <Party party={party}/>
        </Grid>
      ): null}
      </React.Fragment>
    ))}
    </Grid>
  </div>
  )

}  ;