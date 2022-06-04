import React from 'react';
import { Components, useMulti2 } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Handle } from './Handle';

export const HandleCurrencies = ({ handleCurrencies }) => (
  <React.Fragment>
    {handleCurrencies && handleCurrencies.map(handleCurrency => (
      <p key={handleCurrency._id} style={{marginLeft: '50px'}}>{handleCurrency.currency.glyph} [{handleCurrency.currency.name}] {handleCurrency.amount} {handleCurrency.mood}<span style={{float:'right'}}>{handleCurrency.note}</span></p> 
    ))}
  </React.Fragment>
)

export const HandlesList = () => {
  const options = {
    collectionName: 'Handles',
    fragmentName: 'HandlesList',
    limit: 77
  }
  const { loading, results } = useMulti2(options);
  return (
  <React.Fragment>
    <Components.HeadTags title={'Handles'}/>
    <h2><Link to="/">../ </Link></h2>
    <h2>Handles <span style={{float: 'right'}}>count [ {results && results.length} / 77]</span></h2>
    <p>~unconfirmed, !inbound, []spammy</p>
    <hr></hr>
    {!loading && results.map(handle => (
      <React.Fragment key={handle._id}>
        {handle.isHonorary ? (
          <React.Fragment>
            <Handle handle={handle}/>
            <HandleCurrencies handleCurrencies={handle.handleCurrencies}/>
          </React.Fragment>
        ): null}  
      </React.Fragment>
    ))}
    <hr></hr>
    <Grid container spacing={10}>
      <Grid item md={6} xs={12}>
    <h1 style={{textAlign: 'center'}}>=== Active ===</h1>
    <Grid container spacing={2}>
    {!loading && results.map(handle => (
      <React.Fragment key={handle._id}>
        {!handle.isHonorary && handle.isActive ? (
          <Grid item xs={12} sm={12} md={6}>
          <Handle handle={handle}/>
          <HandleCurrencies handleCurrencies={handle.handleCurrencies}/>
          </Grid>
       ): null}
      </React.Fragment>
    ))}
    </Grid>
    </Grid>
    <Grid item md={6} xs={12}>
    <h1 style={{textAlign: 'center'}}>=== Inactive ===</h1>
    <Grid container spacing={2}>
    {!loading && results.map(handle => (
      <React.Fragment key={handle._id}>
        {!handle.isHonorary && !handle.isActive ? (
          <Grid item xs={12} sm={12} md={6}>
          <Handle handle={handle} isShowingZzZs={false}/>
          <HandleCurrencies handleCurrencies={handle.handleCurrencies}/>
          </Grid>
       ): null}
      </React.Fragment>
    ))}
    </Grid>
    </Grid>
    </Grid>
  </React.Fragment>
  )
};

/*
<p>~warmIceElation</p>
    <p>+☴☴ BurpingCactus</p>
    <p>++☴☴ +m Jimmy[capsule]</p>
    <p>[lolliebombs]</p>

    */
   /*

const options = {
  collectionName: "Shs",
  fragmentName: 'ShBest',
  input: {sort: {createdAt: "desc"}, limit: 1}
}
*/