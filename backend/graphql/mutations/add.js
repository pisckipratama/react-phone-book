const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const PhoneType = require('../type/phone');
const services = require('../../services');

exports.add = {
  type: PhoneType.phoneType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    Name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    Phone: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve(root, params) {
    return services.createPhone(params);
  }
}