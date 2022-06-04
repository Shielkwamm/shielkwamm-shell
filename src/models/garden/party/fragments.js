import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment PartySimple on Party {
    _id
    name
  }
`)

registerFragment(`
   fragment PartyBase on Party {
     ...PartySimple
     createdAt
     mood
     description
     isActive
     isEsteemed
   }
`);

registerFragment(`
  fragment PartiesList on Party {
    ...PartyBase
    colorScheme {
      ...ColorSchemeBase
    }
    partyI18ns {
      ...PartyI18nsBase
    }
    partyHandles {
      ...PartyHandlesBase
    }
  }`
);

registerFragment(`
  fragment PartyWithCurrenciesBase on Party {
     ...PartyBase
     partyCurrencies {
      _id
      createdAt
      mood
      note
      amount
      currency {
        _id
        name
        glyph
      }
    }
  }
`)