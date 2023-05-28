const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
  },

  Mutation: {
    addUser: async (parent, { firstName, lastName }) => {
      return await User.create({ firstName, lastName });
    },
  },
};

module.exports = resolvers;
