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
  handleId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'handle',//[i18n]
      type: 'Handle',
      relation: 'hasOne'
    }
  },
  roomId: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    resolveAs: {
      fieldName: 'room',
      type: 'Room',
      relation: 'hasOne'
    }
  },
  isMod: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  isDJ: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  isCannon: {
    type: Boolean,
    optional: true,
    defaultValue: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  }
  
};

export default schema;