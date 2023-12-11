// UsersLogic.js
const UsersLogic = (usersState) => {
  const createUser = (name, bornAt, photo) => {
    const newItem = {
      id: usersState.users.length + 1,
      name,
      bornAt,
      photo,
    };

    return newItem;
  };

  const readUser = (data, id) => {
    const foundUser = data.find(user => user.id === id);

    return foundUser;
  };

  const updateUser = (state, data) => {
    const updatedUsers = state.users.map(user => {
      if (user.id === data.id) {
        return { ...user, ...data };
      }
      return user;
    });

    return updatedUsers;
  };

  const deleteUser = (id) => {
    return ['delete', 'User id = ', id];
  };

  const listUsers = (data) => {
    return data;
  };

  return {
    createUser,
    readUser,
    updateUser,
    deleteUser,
    listUsers,
  };
};

export default UsersLogic;