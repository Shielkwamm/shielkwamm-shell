import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import { getCollection } from 'meteor/vulcan:lib';
//import Shs from '../sh/collection.js';
//import Rooms from '../room/collection.js';

const Messages = createCollection({
  collectionName: 'Messages',
  typeName: 'Message',
  schema,
  // resolvers: yourCustomResolvers // null to disable default resolvers generation
  // mutations: yourCustomMutations // null to disable default mutations generation
  permissions: {
    canRead: ['guests', 'members', 'admins'],
    canCreate: ['admins'],
    canUpdate: ['owners', 'admins'],
    canDelete: ['owners', 'admins']
  },
  callbacks: {
    create: { //before doesn't work ??
      after: [(document, properties) => { 
        let messageObj = processMessage(document);
        Messages.update({_id: document._id}, {$set: messageObj})
      }],
    },
    update: {
      after: [(document, properties) => {
        let messageObj = processMessage(document);
        Messages.update({_id: document._id}, {$set: messageObj})
      }],
    }
  },
});

function processMessage(message) {
  let _sh_Regex = /^((=.{0,1}){4})\s(.{4,20})\s((=.{0,1}){4})/ // a little bit more esteemed of a regex... is _sh_ this a richard stallman joke?
  let text = message.text;
  let room = getCollection('Rooms').findOne({_id: message.roomId});
  if(text.match(_sh_Regex)){
    let res = text.match(_sh_Regex)
    shObj = {leftBumper: res[1], text: res[3], rightBumper: res[4], colorSchemeId: room.colorSchemeId}
    shObj.createdAt = new Date();
    let shId;
    if(message.shId) {
      getCollection('Shs').update({_id: message.shId}, {$set: shObj})
      shId = message.shId;
    }
    else {
      shId = getCollection('Shs').insert(shObj);
    }
    return {type: '_sh_', shId: shId};
  }
  let vibeRegex = /^.*⬤.*$/;
  if(text.match(vibeRegex)) {
    return {type: 'vibe'};
  }
  let noteRegex = /^.*🔬.*$/;//maybe not need?
  if(text.match(noteRegex))  {
    return {type: 'note'};
  }
  let zorkRegex = /^[^:]+$/;
  if(text.match(zorkRegex)){
    return {type: 'zork'};
  }
  return {type: 'message'};
}

export default Messages;
