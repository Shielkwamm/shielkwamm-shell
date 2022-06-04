import { registerFragment } from 'meteor/vulcan:core';

registerFragment(`
  fragment HandlesList on Handle {
  ...HandleBase
  handleParties {
    ...HandlePartiesBase
  }
  handleCurrencies {
    ...HandleCurrenciesBase
  }
}
`);