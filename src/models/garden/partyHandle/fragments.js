import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment PartyHandleBase on PartyHandle {
    _id
    createdAt
    isMod
    connectionStatus
  }
`)

registerFragment(`
   fragment HandlePartiesBase on PartyHandle {
     ...PartyHandleBase
     party {
       ...PartyBase
     }
   }
`);

registerFragment(`
   fragment PartyHandlesBase on PartyHandle {
     ...PartyHandleBase
     handle {
       ...HandleBase
     }
   }
`);