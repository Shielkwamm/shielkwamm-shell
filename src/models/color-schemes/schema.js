const schema = {

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
    defaultValue: 'Ol\' Glory',
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  color: {
    type: String,
    optional: false,
    defaultValue: '#000000',
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  backgroundColor: {
    type: String,
    optional: false,
    defaultValue: '#FFFFFF',
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  linkColor: {
    type: String,
    optional: false,
    defaultValue: '#A1A1A1',
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  altColor: {
    type: String,
    optional: false,
    defaultValue: '#A1A1A1',
    canRead: ['guests'],
    canUpdate: ['admins'],
    canCreate: ['admins']
  },
  /*colorSchemeCurrencies: {
    label: "Color Scheme Currencies",
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    relation: {
      fieldName: 'colorSchemeCurrencies',
      typeName: 'CurrencyActor',
      kind: 'hasMany'
    }
    /*resolveAs: {
      fieldName: 'colorSchemeCurrencies',
      type: '[CurrencyActor]',
      relation: 'hasMany',
      resolver: (colorScheme, args, context) => {
        return context.CurrenciesActors.find({colorSchemeId: colorScheme._id}).fetch();
      }
    }
  }, */ 
};

export default schema;
