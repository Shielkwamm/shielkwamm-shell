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
  isFeatured: {
    type: Boolean,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  name: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  messageDelay: {
    type: Number,
    defaultValue: 2,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  slug: {
    type: String,
    optional: false,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  description: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
    input: 'textarea'
  },
  connectionStatus: {
    type: String,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins'],
  },
  isActive: {
    type: Boolean,
    optional: true,
    defaultValue: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  zork: { // +☰
    type: String,
    optional: false,
    defaultValue: '+☰',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  bwam: { // ◯++
    type: String, 
    optional: false,
    defaultValue: '◯',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  vibe: {
    type: String,
    optional: false,
    defaultValue: '↑↑⬤',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  _sh_: { //+△+
    type: String,
    optional: false,
    defaultValue: '△',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  currentMusicUrl: {
    type: String,
    optional: false,
    defaultValue: 'https://www.youtube.com/watch?v=HxAYJdLXgZo',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  currentMusicTitle: {
    type: String,
    defaultValue: 'Marble Madness Remix (2009)',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
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
  roomI18ns: {
    label: 'Room I18ns',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'roomI18ns',
      type: '[RoomI18n]',
      relation: 'hasMany',
      resolver: (room, args, context) => {
        return context.RoomsI18ns.find({roomId: room._id}).fetch();
      }
    }
  },
  roomHandles: {
    label: 'Room Handles',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'roomHandles',
      type: '[RoomHandle]',
      relation: 'hasMany',
      resolver: (room, args, context) => {
        return context.RoomsHandles.find({roomId: room._id}).fetch();
      }
    }
  },
  areDJMessagesMuted: {
    type: Boolean,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  areCannonMessagesMuted: {
    type: Boolean,
    optional: true,
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  //Game Mechanics
  currentExpPoints: {
    type: String,
    optional: false,
    defaultValue: '0',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  totalExpPoints: {
    type: String,
    optional: false,
    defaultValue: '50',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  level: {
    type: String,
    optional: false,
    defaultValue: '0',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  maxLevel: {
    type: String,
    optional: false,
    defaultValue: '5',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  gameStart: {
    label: 'Game start',
    type: String,
    optional: true,
    canRead: ['guests'],
    defaultValue: new Date()
  },
  gameEnd: {
    label: 'Game End',
    type: String,
    optional: true,
    canRead: ['guests']
  }
};

export default schema;