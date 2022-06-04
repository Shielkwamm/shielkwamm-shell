import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment HandleSimple on Handle {
    _id     
     name
  }`
)

registerFragment(`
  fragment HandleBase on Handle {
    ...HandleSimple
    createdAt
    isActive
    mood
    note
    description
    isHonorary
    connectionStatus 
    inventory
  }`
)

registerFragment(`
   fragment HandlesList on Handle {
     ...HandleBase
     handleParties {
       ...HandlePartiesBase
     }
     
   }
`);

registerFragment(`
  fragment HandleWithCurrenciesBase on Handle {
     ...HandleBase
     handleCurrencies {
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
