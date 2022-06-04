import { createCollection } from 'meteor/vulcan:core';
import schema from './schema.js';
import './fragments.js';
import Messages from '../message/collection.js';

const Rooms = createCollection({
  collectionName: 'Rooms',
  typeName: 'Room',
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
    update: { 
      after: [(document, properties) => { 
        const data = properties.originalData;
        if(data._sh_) {
          Messages.insert({text: document._sh_, roomId: document._id, createdAt: new Date()});
        }
        if(data.zork) {
          Messages.insert({text: document.zork, roomId: document._id, createdAt: new Date()});
        }
        if(data.bwam) {
          Messages.insert({text: document.bwam, roomId: document._id, createdAt: new Date()});
        }
        if(data.vibe) {
          let lastVibeMessage = Messages.find({roomId: document._id, type: 'vibe'}, {sort: {createdAt: -1}, limit: 1}).fetch();
          lastVibeMessage = lastVibeMessage[0];
          if(lastVibeMessage) {
            Messages.update({_id: lastVibeMessage._id}, {$set: {text: document.vibe + ' ' + document.currentMusicTitle}});
          }
        }
        if(data.currentMusicTitle && !document.areMediaMessagesMuted) {
          Messages.insert({text: `${document.vibe} ${data.currentMusicTitle}`, roomId: document._id, createdAt: new Date(), type: 'vibe'});
        }
        return document;
      }]
    }
  },
  //customFilters: [
  //  {
  //    name: "_withRatings",
  //    argument: "average: Int",
  //    filter: ({ input, context, filterArguments }) => {
  //      const { average } = filterArguments;
  //      const { Reviews } = context;
  //      // get all movies that have an average review score of X stars 
  //      const xStarReviewsMoviesIds = getMoviesByScore(average);
  //      return {
  //        selector: { _id: { $in: xStarReviewsMoviesIds } },
  //        options: {}
  //      }
  //    }
  //  }
  //]

});



export default Rooms;
