const schema = {
  // default properties

  _id: {
    type: String,
    optional: true,
    canRead: ['guests'],
  },
  createdAt: {
    type: Date,
    optional: true,
    canRead: ['guests'],
    onCreate: ({ newDocument, currentUser}) => {
      return new Date();
    }
  },
  name: {
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  glyph: {
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  description: {
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  ledgerUrl: {
    type: String,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  currencyActors: {
    label: 'Currency Actors',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'currencyActors',
      type: '[CurrencyActor]',
      relation: 'hasMany',
      resolver: (currency, args, context) => {
        return context.CurrenciesActors.find({currencyId: currency._id}).fetch();
      }
    }
  },
  currencyHandles: {
    label: 'Handles',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'currencyHandles',
      type: '[CurrencyActor]',
      relation: 'hasMany',
      resolver: (currency, args, context) => {
        return context.CurrenciesActors.find({currencyId: currency._id, handleId: {$exists: true}}).fetch();
      }
    }
  },
  currencyParties: {
    label: 'Parties',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'currencyParties',
      type: '[CurrencyActor]',
      relation: 'hasMany',
      resolver: (currency, args, context) => {
        return context.CurrenciesActors.find({currencyId: currency._id, partyId: {$exists: true}}).fetch();
      }
    }
  },
  colorSchemeId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'colorScheme',
      type: 'ColorScheme',
      relation: 'hasOne'
    }
  },
};

export default schema;
