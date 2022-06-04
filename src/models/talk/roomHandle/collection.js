import { createCollection } from 'meteor/vulcan:core';
import { getCollection } from 'meteor/vulcan:lib';
import schema from './schema.js';
import './fragments.js';

const RoomsHandles = createCollection({
  collectionName: 'RoomsHandles',
  typeName: 'RoomHandle',
  schema,
  // resolvers: yourCustomResolvers // null to disable default resolvers generation
  // mutations: yourCustomMutations // null to disable default mutations generation
  permissions: {
    canRead: ['guests', 'members', 'admins'],
    canCreate: ['admins'],
    canUpdate: ['owners', 'admins'],
    canDelete: ['owners', 'admins']
  },
  create: {
    after: [(document, properties) => {
      let handle = getCollection('Handles').findOne({_id: document.handleId});
      Messages.insert({roomId: document.roomId, text: `${handle.name} joined`, createdAt: new Date()})
    }],
  },
  delete: {
    after: [(document, properties) => {
      let handle = getCollection('Handles').findOne({_id: document.handleId});
      Messages.insert({roomId: document.roomId, text: `${handle.name} left`, createdAt: new Date()})
    }],
  }
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



export default RoomsHandles;
