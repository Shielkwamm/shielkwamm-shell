import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment CurrencyActorBase on CurrencyActor {
    _id
    createdAt
    mood
    note
    amount
  }
`)

registerFragment(`
  fragment CurrencyHandlesBase on CurrencyActor {
    ...CurrencyActorBase
    handle {
      ...HandleBase
    }
  }
`)

registerFragment(`
  fragment CurrencyPartiesBase on CurrencyActor {
    ...CurrencyActorBase
    party {
      ...PartyBase
    }
  }
`)

registerFragment(`
  fragment CurrencyColorSchemesBase on CurrencyActor {
    ...CurrencyActorBase
    colorScheme {
      ...ColorSchemeBase
    }
  }
`)

registerFragment(`
  fragment HandleCurrenciesBase on CurrencyActor {
    ...CurrencyActorBase
    currency {
      ...CurrencyBase
    }
  }
`)

registerFragment(`
  fragment PartyCurrenciesBase on CurrencyActor {
    ...CurrencyActorBase
    currency {
      ...CurrencyBase
    }
  }
`)

registerFragment(`
  fragment ColorSchemeCurrenciesBase on CurrencyActor {
    ...CurrencyActorBase
    currency {
      ...CurrencyBase
    }
  }
`)