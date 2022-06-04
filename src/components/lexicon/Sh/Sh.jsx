import React from 'react';

export const Sh = ({ sh }) => (
  <p style={{textAlign: 'center', fontSize: '30px', verticalAlign: '-6px'}}><span style={{background: sh.colorScheme.backgroundColor, color: sh.colorScheme.linkColor}}>{sh.leftBumper}</span> <span style={{fontSize: '90px', color: sh.colorScheme.color, backgroundColor: sh.colorScheme.backgroundColor}}>{sh.text}</span> <span style={{background: sh.colorScheme.backgroundColor, color: sh.colorScheme.linkColor}}>{sh.rightBumper}</span></p>
)