const { User } = require('../models');

module.exports = {
  Query: {
    users: async () => {
      try {
        const users = await User.findAll();

        return users;
      } catch (error) {
        console.error(error);
      }
    }
  },
};
