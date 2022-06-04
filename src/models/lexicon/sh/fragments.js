import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment ShBase on Sh {
    _id
     createdAt
     salutation
     leftBumper
     text
     rightBumper
  }`
);

registerFragment(`
  fragment ShBest on Sh {
    ...ShBase
    colorScheme {
      ...ColorSchemeBase
     }
  }
`)
