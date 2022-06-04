import React from 'react';
import { Components } from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Handle } from 'meteor/garden';
import { RoomCurrencies } from './RoomCurrencies';

export const Room = ({ room }) => (
  <div  style={{
    overflow: 'auto',
    color: room.colorScheme.color,
    paddingTop: '1px',
    paddingLeft: '14px',
    paddingRight: '14px',
    background: room.colorScheme.backgroundColor,
  }}>
    <h1>{room.isFeatured? <a href="https://shielkwamm.com">🎥</a>: null} <Link style={{color: room.colorScheme.linkColor}} to={`/room/${room.slug}`}>{room.name}</Link> <span style={{float: 'right'}}>{room.zork} <span style={{color: room.colorScheme.linkColor}}>{room._sh_}</span> <span style={{color: room.colorScheme.altColor}}> {room.bwam} </span></span></h1>
    <p>{room.vibe} <a style={{color: room.colorScheme.linkColor}} href={room.currentMusicUrl}>{room.currentMusicTitle}</a> <span style={{float: 'right'}}>▵△{room.currentExpPoints} / {room.totalExpPoints}△▵  ☸{room.level} / {room.maxLevel}☸</span></p>
    <p>{room.description}</p>
    <hr></hr>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
    
    <Grid item xs={4}>
    <p style={{color: room.colorScheme.linkColor}}>handles</p>
    {room.roomHandles.map(roomHandle => (
      <React.Fragment key={roomHandle._id}>
        {roomHandle.handle.isActive ? (<Handle colorScheme={room.colorScheme} key={roomHandle._id} handle={roomHandle.handle}/>) : null }
      </React.Fragment>
    ))}
    </Grid>
    <Grid style={{textAlign: 'center'}} item xs={4}>
    <RoomCurrencies room={room}/>
    </Grid>
    <Grid style={{textAlign: 'right'}} item xs={4}>
    <p style={{color: room.colorScheme.linkColor}}>i18ns</p>
    {room.roomI18ns.map(roomI18n => (
      <h3 key={roomI18n._id}>{roomI18n.i18n.name}</h3>
    ))}
    </Grid>
    </Grid>
  </div>
);
