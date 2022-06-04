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
    optional: true,
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  description: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins'],
    input: 'textarea'
  },
  isActive: {
    type: Boolean,
    optional: true,
    defaultValue: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  mood: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  isEsteemed: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    canRead:['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  connectionStatus: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    defaultValue: '~'
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
  partyHandles: {
    label: 'Party Handles',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'partyHandles',
      type: '[PartyHandle]',
      relation: 'hasMany',
      resolver: (party, args, context) => {
        return context.PartiesHandles.find({partyId: party._id}).fetch();
      }
    }
  },
  partyCurrencies: {
    label: 'Party Currencies',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'handleCurrencies',
      type: '[CurrencyActor]',
      relation: 'hasMany',
      resolver: (party, args, context) => {
        return context.CurrenciesActors.find({partyId: party._id}).fetch();
      }
    }
  },

  partyI18ns: {
    label: 'Party I18ns',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'partyI18ns',
      type: '[PartyI18n]',
      relation: 'hasMany',
      resolver: (party, args, context) => {
        return context.PartiesI18ns.find({partyId: party._id}).fetch();
      }
    }
  }
};

export default schema;
