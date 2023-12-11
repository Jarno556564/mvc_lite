// UsersController.js
// Noodzakelijke modules importeren uit React Native en de applicatie
import React, { createContext, useReducer, useContext } from 'react';
// De klasse UsersLogic importeren uit het model
import { useNavigation } from '@react-navigation/native';
import UsersLogic from '../model/UsersLogic';
import InitialUsers from '../model/InitialUsers';

// Een context emmer maken voor het beheren van de status
export const UsersContext = createContext();

// Functionele component van de UsersController
export const UsersController = ({ children }) => {
  const navigation = useNavigation();

  // const usersLogicInstance = UsersLogic();
  const { createUser, readUser, updateUser, deleteUser, listUsers } = UsersLogic();

  // Functies voor interactie met UsersLogic methoden
  const collectCreateUser = () => {
    const result = createUser();
    // console.log('collectCreateUser', result);
    return result;
  };
  const collectReadUser = (data, id) => {
    const result = readUser(data, id);

    return result;
  };
  const collectUpdateUser = (state, userToUpdate, data) => {
    const result = updateUser(state, userToUpdate, data);
    // console.log('collectUpdateUser', result);
    return result;
  };
  const collectDeleteUser = (id) => {
    const result = deleteUser(id);
    // console.log('collectDeleteUser', result);
    return result;
  };
  const collectListUsers = (data) => {
    const result = listUsers(data);

    return result;
  };

  // functie voor het afhandelen van State-veranderingen op basis van verzonden acties
  const handleRequest = (usersState, action) => {
    switch (action.type) {
      case 'NAVIGATECREATEUSER':

        navigation.navigate('CreateUserView');
        return {
          ...usersState,
          currentScreen: 'CreateUserView',
          message: 'Create user view',
        };
      case 'CREATENEWUSER':
        // console.log('CREATENEWUSERtriggered', action);

        const newUser = action.payload;

        navigation.navigate('ListUsersView');
        return {
          ...usersState,
          users: [...usersState.users, newUser],
          currentScreen: 'CreateNewUserView',
          message: 'Create your user',
        };
      case 'READUSER':
        // console.log('READUSERtriggerd', action);

        // console.log(usersState.users);
        read = collectReadUser(usersState.users, action.id);

        navigation.navigate('ReadUserView');
        return {
          ...usersState,
          currentScreen: 'ReadUserView',
          user: read,
        };
      case 'NAVIGATEUPDATEUSER':
        // console.log('UPDATEUSERtriggerd', action);

        data = collectReadUser(usersState.users, action.id);
        // console.log(data);

        navigation.navigate('UpdateUserView');
        return {
          ...usersState,
          currentScreen: 'UpdateUserView',
          data: data,
        };
      case 'SETUPDATEUSER':
        // console.log('payload', action.payload);
        // console.log('user to update', userToUpdate);

        // change the value of the user with payload data.
        result = collectUpdateUser(usersState, action.payload);

        // console.log('input data to method', result);

        navigation.navigate('ListUsersView');
        return {
          ...usersState,
          currentScreen: 'UpdateUserView',
          users: result,
        };
      case 'DELETEUSER':
        // console.log('DELETEUSERtriggered', action);

        deleete = collectDeleteUser(action.id);

        navigation.navigate('DeleteUserView');
        return {
          ...usersState,
          currentScreen: 'DeleteUserView',
          user: deleete,
        };
      case 'LISTUSERS':
        // console.log('LISTUSERStriggered', action);

        list = collectListUsers(usersState.users);

        navigation.navigate('ListUsersView');
        return {
          ...usersState,
          currentScreen: 'ListUsersView',
          users: list,
        };
      default:
        throw new Error('Unknown action');
    }
  };

  // State en dispatch initialiseren met useReducer
  const [usersState, dispatch] = useReducer(handleRequest, InitialUsers);

  // State en dispatch aanbieden via de context aan zijn kinderen
  return (
    <UsersContext.Provider value={{ usersState, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

// custom hook om eenvoudig context aan te spreken
export const useUsersContext = () => {
  return useContext(UsersContext);
};
