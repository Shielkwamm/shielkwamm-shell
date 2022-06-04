import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment RoomI18nBase on RoomI18n {
    _id
    createdAt
  }`
);

registerFragment(`
  fragment I18nRoomsBase on RoomI18n {
    ...RoomI18nBase
    room {
      ...RoomBase
    }
  }
`)

registerFragment(`
  fragment RoomI18nsBase on RoomI18n {
    ...RoomI18nBase
    i18n {
      ...I18nBase
     }
  }
`)