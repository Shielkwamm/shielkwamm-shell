import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment EquipmentFragment on Equipment {
     _id
     createdAt
     name
     glyph
     description
     guideUrl
   }
`);
