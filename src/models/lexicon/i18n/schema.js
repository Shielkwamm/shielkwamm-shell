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
    defaultValue: 'basic',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  description: {
    type: String,
    optional: true,
    defaultValue: 'The basic glyphs of _sh_.',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  glyphSet: {
    type: String,
    optional: false,
    defaultValue: '☰ ☳ ☲ ☷ ☱ ☵ ☶ ☴ | ↑↓‾ | ◯ ⚬ ⬤ ф | △ ▵ | ☸ 当 Ω | ✔ 🔬 💻 🌈',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  guideUrl: {
    type: String,
    optional: false,
    defaultValue: 'https://github.com/Shielkwamm/one_Z-rk/wiki/Glyphs',
    canRead: ['guests'],
    canCreate: ['admins'],
    canUpdate: ['admins']
  },
  i18nRooms: {
    label: 'I18n Rooms',
    type: String,
    hidden: true,
    optional: true,
    canRead: ['guests'],
    resolveAs: {
      fieldName: 'i18nRooms',
      type: '[RoomI18n]',
      relation: 'hasMany',
      resolver: (i18n, args, context) => {
        return context.RoomsI18ns.find({i18nId: i18n._id}).fetch();
      }
    }
  }
};

export default schema;