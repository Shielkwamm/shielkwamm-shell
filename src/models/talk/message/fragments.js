import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment MessageBase on Message {
     _id
     createdAt
     text
     roomId
     type
   }
`);

registerFragment(`
   fragment MessagesList on Message {
     ...MessageBase
     sh {
      ...ShBest
    }
   }
`)
