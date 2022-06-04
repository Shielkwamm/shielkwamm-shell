import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
   fragment ColorSchemeBase on ColorScheme {
     _id
     createdAt
     backgroundColor
     linkColor
     altColor
     color
     name
   }
`);

registerFragment(`
  fragment ColorSchemesList on ColorScheme {
    ...ColorSchemeBase
  }
`)


registerFragment(`
  fragment ColorSchemeWithCurrenciesBase on ColorScheme {
     ...ColorSchemeBase
     colorSchemeCurrencies {
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