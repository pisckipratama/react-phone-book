var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInteger = require('graphql').GraphQLInteger;

// User Type
exports.phoneType = new GraphQLObjectType({
  name: 'phone',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      Name: {
        type: GraphQLString
      },
      Phone: {
        type: GraphQLString
      }
    }
  }
});