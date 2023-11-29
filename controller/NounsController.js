// NounsController.js
// Noodzakelijke modules importeren uit React Native en de applicatie
import React, { createContext, useReducer, useContext } from 'react';
// De klasse NounsLogic importeren uit het model
import { useNavigation } from '@react-navigation/native';
import NounsLogic from '../model/NounsLogic';

// Een context maken voor het beheren van de status
export const NounsContext = createContext();

// Functionele component van de NounsController
export const NounsController = ({ children }) => {
  const initialState = {
    noun: '',
    id: '',
    nouns: [],
    result: '',
    data: null,
    message: 'yohoo',
  };

  const navigation = useNavigation();

  const NounsLogicInstance = NounsLogic();

  // Functies voor interactie met NounsLogic methoden
  const collectCreateNoun = () => {
    const result = NounsLogicInstance.createNoun();
    // console.log('collectCreateNoun', result);
    return result;
  };
  const collectReadNoun = (id) => {
    const result = NounsLogicInstance.readNoun(id);
    // console.log('collectReadNoun', result);
    return result;
  };
  const collectUpdateNoun = (id) => {
    const result = NounsLogicInstance.updateNoun(id);
    // console.log('collectUpdateNoun', result);
    return result;
  };
  const collectDeleteNoun = (id) => {
    const result = NounsLogicInstance.deleteNoun(id);
    // console.log('collectDeleteNoun', result);
    return result;
  };
  const collectListNounsView = () => {
    const result = NounsLogicInstance.listNouns();
    // console.log('collectListNounsView', result);
    return result;
  };

  // Reducer-functie voor het afhandelen van State-veranderingen op basis van verzonden acties
  const handleRequest = (state, action) => {
    switch (action.type) {
      case 'CREATENOUN':
        // console.log('CREATENOUNtriggered', action);

        create = collectCreateNoun();

        navigation.navigate('CreateNounView');
        return {
          ...state,
          currentScreen: 'CreateNounView',
          message: 'Create your noun',
        };
      case 'READNOUN':
        // console.log('READNOUNtriggerd', action);

        update = collectReadNoun(state.id);

        navigation.navigate('ReadNounView');
        return {
          ...state,
          currentScreen: 'ReadNounView',
          noun: 'Read',
        };
      case 'UPDATENOUN':
        // console.log('UPDATENOUNtriggerd', action);

        update = collectUpdateNoun(state.id);

        navigation.navigate('UpdateNounView');
        return {
          ...state,
          currentScreen: 'UpdateNounView',
          noun: 'Update',
        };
      case 'DELETENOUN':
        // console.log('DELETENOUNtriggered', action);

        deleete = collectDeleteNoun(state.id);

        navigation.navigate('DeleteNounView');
        return {
          ...state,
          currentScreen: 'DeleteNounView',
          noun: 'Delete',
        };
      case 'LISTNOUNS':
        // console.log('LISTNOUNStriggered', action);

        list = collectListNounsView();

        navigation.navigate('ListNounsView');
        return {
          ...state,
          currentScreen: 'ListNounsView',
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
    <NounsContext.Provider value={{ state, dispatch }}>
      {children}
    </NounsContext.Provider>
  );
};

// custom hook om eenvoudig context aan te spreken
export const useNounsContext = () => {
  return useContext(NounsContext);
};
