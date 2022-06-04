import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment I18nSimple on I18n {
    _id
    name
  }
`);

registerFragment(`
  fragment I18nBase on I18n {
    ...I18nSimple
    createdAt
    glyphSet
    description
    guideUrl
  }
`);

registerFragment(`
  fragment I18nsList on I18n {
    ...I18nBase
  }
`)