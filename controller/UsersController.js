// UsersController.js
// Noodzakelijke modules importeren uit React Native en de applicatie
import React, { createContext, useReducer, useContext } from 'react';
// De klasse UsersLogic importeren uit het model
import { useNavigation } from '@react-navigation/native';
import UsersLogic from '../model/UsersLogic';

// Een context maken voor het beheren van de status
export const UsersContext = createContext();

// Functionele component van de UsersController
export const UsersController = ({ children }) => {
  const initialState = {
    user: '',
    id: '',
    users: [],
    result: '',
    data: null,
    message: 'yohoo',
  };

  const navigation = useNavigation();

  const UsersLogicInstance = UsersLogic();

  // Functies voor interactie met UsersLogic methoden
  const collectCreateUser = () => {
    const result = UsersLogicInstance.createUser();
    // console.log('collectCreateUser', result);
    return result;
  };
  const collectReadUser = (id) => {
    const result = UsersLogicInstance.readUser(id);
    // console.log('collectReadUser', result);
    return result;
  };
  const collectUpdateUser = (id) => {
    const result = UsersLogicInstance.updateUser(id);
    // console.log('collectUpdateUser', result);
    return result;
  };
  const collectDeleteUser = (id) => {
    const result = UsersLogicInstance.deleteUser(id);
    // console.log('collectDeleteUser', result);
    return result;
  };
  const collectListUsersView = () => {
    const result = UsersLogicInstance.listUsers();
    // console.log('collectListUsersView', result);
    return result;
  };

  // Reducer-functie voor het afhandelen van State-veranderingen op basis van verzonden acties
  const handleRequest = (state, action) => {
    switch (action.type) {
      case 'CREATEUSER':
        // console.log('CREATEUSERtriggered', action);

        create = collectCreateUser();

        navigation.navigate('CreateUserView');
        return {
          ...state,
          currentScreen: 'CreateUserView',
          message: 'Create your user',
        };
      case 'READUSER':
        // console.log('READUSERtriggerd', action);

        update = collectReadUser(state.id);

        navigation.navigate('ReadUserView');
        return {
          ...state,
          currentScreen: 'ReadUserView',
          user: 'Read',
        };
      case 'UPDATEUSER':
        // console.log('UPDATEUSERtriggerd', action);

        update = collectUpdateUser(state.id);

        navigation.navigate('UpdateUserView');
        return {
          ...state,
          currentScreen: 'UpdateUserView',
          user: 'Update',
        };
      case 'DELETEUSER':
        // console.log('DELETEUSERtriggered', action);

        deleete = collectDeleteUser(state.id);

        navigation.navigate('DeleteUserView');
        return {
          ...state,
          currentScreen: 'DeleteUserView',
          user: 'Delete',
        };
      case 'LISTUSERS':
        // console.log('LISTUSERStriggered', action);

        list = collectListUsersView();

        navigation.navigate('ListUsersView');
        return {
          ...state,
          currentScreen: 'ListUsersView',
          data: list,
        };
      default:
        throw new Error('Unknown action');
    }
  };

  // State en dispatch initialiseren met useReducer
  const [state, dispatch] = useReducer(handleRequest, initialState);

  // State en dispatch aanbieden via de context aan zijn kinderen
  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

// custom hook om eenvoudig context aan te spreken
export const useUsersContext = () => {
  return useContext(UsersContext);
};
