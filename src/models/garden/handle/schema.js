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
    optional: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  description: {
    type: String,
    optional: true,
    defaultValue: 'n00b',
    canRead: ['admins'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'textarea'
  },
  note: {
    type: String,
    optional: true,
    defaultValue: '',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  mood: {
    type: String,
    optional: true,
    defaultValue: '~',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  isActive: {
    type: Boolean,
    optional: true,
    defaultValue: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  isHonorary: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  inventory: {
    type: Array,
    optional: true,
    defaultValue: [],
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  'inventory.$': {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  handleParties: {
    label: 'Handle Parties',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'handleParties',
      type: '[PartyHandle]',
      relation: 'hasMany',
      resolver: (handle, args, context) => {
        return context.PartiesHandles.find({handleId: handle._id}).fetch();
      }
    }
  },
  connectionStatus: {
    label: 'Connection Status',
    type: String,
    optional: false,
    canRead: ['guests'],
    defaultValue: '~'
  },
  handleCurrencies: {
    label: 'Handle Currencies',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'handleCurrencies',
      type: '[CurrencyActor]',
      relation: 'hasMany',
      resolver: (handle, args, context) => {
        return context.CurrenciesActors.find({handleId: handle._id}).fetch();
      }
    }
  },
  roomId: {
    label: 'Is this handle bound to a single room?',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests']
  },
};

export default schema;