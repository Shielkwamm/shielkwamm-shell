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
  amount: {
    type: Number,
    defaultValue: 0,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  mood: {
    type: String,
    defaultValue: '',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  note: {
    type: String,
    defaultValue: '',
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  handleId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'handle',
      type: 'Handle',
      relation: 'hasOne'
    }
  },
  partyId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'party',
      type: 'Party',
      relation: 'hasOne'
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
  currencyId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'currency',
      type: 'Currency',
      relation: 'hasOne'
    }
  },
  
};

export default schema;
