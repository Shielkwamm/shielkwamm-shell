import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment CurrencySimple on Currency {
    _id
    name
  }`
)

registerFragment(`
   fragment CurrencyBase on Currency {
     ...CurrencySimple
     createdAt
     glyph
     description
     ledgerUrl
   }
`);

registerFragment(`
  fragment CurrenciesList on Currency {
     ...CurrencyBase
    currencyHandles {
      ...CurrencyHandlesBase
    }
    currencyParties {
      ...CurrencyPartiesBase
    }
    colorScheme {
      ...ColorSchemeBase
    }
   }
`)

registerFragment(`
   fragment HandleWithCurrencies on Handle {
     ...HandleBase
     handleCurrencies {
       ...HandleCurrenciesBase
     }
   }
`)

registerFragment(`
   fragment PartyWithCurrencies on Party {
     ...PartyBase
     partyCurrencies {
       ...PartyCurrenciesBase
     }
   }
`)

registerFragment(`
   fragment ColorSchemeWithCurrencies on ColorScheme {
     ...ColorSchemeBase
     colorSchemeCurrencies {
       ...ColorSchemeCurrenciesBase
     }
   }
`)