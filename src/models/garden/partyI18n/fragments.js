import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment PartyI18nBase on PartyI18n {
    _id
    createdAt
    fluency
  }
`)

registerFragment(`
   fragment PartyI18nsBase on PartyI18n {
     ...PartyI18nBase
     i18n {
      ...I18nBase
     }
   }
`);

registerFragment(`
   fragment I18nPartiesBase on PartyI18n {
     ...PartyI18nBase
     party {
      ...PartyBase
     }
   }
`);
