import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment LawsFragment on Law {
     _id
     createdAt
   }
`);
