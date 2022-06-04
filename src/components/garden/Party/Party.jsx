import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { PartyHandle } from './PartyHandle';

export const Party = ({ party }) => (
  <div style={{backgroundColor: party.colorScheme.backgroundColor}}>
  <div style={{margin: 0, padding: '15px', border: '1px solid ' + party.colorScheme.color}}>
  <h2 style={{marginBottom: '6px', textAlign: 'center',marginTop: '10px'}}><span style={{color: party.colorScheme.linkColor}}>{!!party.isActive? '': 'zZz '} {party.mood}</span> <span style={{color: party.colorScheme.altColor}}>{party.name}</span><span style={{float: 'right'}}>{party.connectionStatus}</span></h2>
  <p style={{marginBottom: '10px', marginTop: 0, textAlign: 'center', color: party.colorScheme.color}}><i>{party.description}</i></p>
  </div>
  <Grid container spacing={3} style={{padding: '0 20px 20px 20px'}}>
    <Grid item xs={6} style={{color: party.colorScheme.color, float: 'left'}}>
    {party.partyHandles.map(partyHandle => (
      <div key={partyHandle._id}><PartyHandle colorScheme={party.colorScheme} handle={partyHandle.handle}/></div>
    ))}
    </Grid>
    <Grid item xs={6} style={{color: party.colorScheme.linkColor, float: 'right', textAlign: 'right'}}>
    <h3>i18ns</h3>
    {party.partyI18ns.map(partyI18ns => (
      <div key={partyI18ns._id}> {partyI18ns.i18n.name}</div>
    ))}
    </Grid>
  </Grid>
  </div>
)