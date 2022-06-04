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
  text: {
    type: String,
    optional: false,
    canRead: ['guests', 'members', 'admins'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  roomId: {
    type: String,
    optional: false,
    canRead: ['guests', 'admins'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  type: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    defaultValue: 'message',
    options: [
    {
      label: 'Vibe',
      value: 'vibe'
    },
    {
      label: 'Note',
      value: 'note'
    },
    {
      label: 'Money',
      value: 'money'
    },
    {
      label: 'Zork',
      value: 'zork'
    },
    {
      label: '_sh_',
      value: '_sh_'
    }
    /*{
      label: "Expectations",
      value: "expecations"
    }*/]
  },
  shId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'sh',
      type: 'Sh',
      relation: 'hasOne'
    }
  },
};

export default schema;
