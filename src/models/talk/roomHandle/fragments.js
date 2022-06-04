import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment RoomHandleBase on RoomHandle {
    _id
    createdAt
    isDJ
    isCannon
  }
`)

registerFragment(`
  fragment HandleRoomsBase on RoomHandle {
    ...RoomHandleBase
    room {
      ...RoomBase
    }
  }
`)

registerFragment(`
  fragment RoomHandlesWithCurrenciesBase on RoomHandle {
    ...RoomHandleBase
    handle {
      ...HandleWithCurrenciesBase
    }
  }
`)