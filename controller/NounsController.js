// NounsController.js
// Noodzakelijke modules importeren uit React Native en de applicatie
import React, { createContext, useReducer, useContext } from 'react';
// De klasse NounsLogic importeren uit het model
import { useNavigation } from '@react-navigation/native';
import NounsLogic from '../model/NounsLogic';
import InitialNouns from '../model/InitialNouns';

// Een context emmer maken voor het beheren van de status
export const NounsContext = createContext();

// Functionele component van de NounsController
export const NounsController = ({ children }) => {
  const navigation = useNavigation();

  const { createNoun, readNoun, updateNoun, deleteNoun, listNouns } = NounsLogic();
  // const nounsLogicInstance = NounsLogic();

  // Functies voor interactie met NounsLogic methoden
  const collectCreateNoun = () => {
    const result = createNoun();
    // console.log('collectCreateNoun', result);
    return result;
  };
  const collectReadNoun = (data, id) => {
    const result = readNoun(data, id);

    return result;
  };
  const collectUpdateNoun = (state, data) => {
    const result = updateNoun(state, data);
    // console.log('collectUpdateNoun', result);
    return result;
  };
  const collectDeleteNoun = (id) => {
    const result = deleteNoun(id);
    // console.log('collectDeleteNoun', result);
    return result;
  };
  const collectListNouns = (data) => {
    const result = listNouns(data);

    return result;
  };

  // functie voor het afhandelen van State-veranderingen op basis van verzonden acties
  const handleRequest = (nounsState, action) => {
    switch (action.type) {
      case 'NAVIGATECREATENOUN':

        navigation.navigate('CreateNounView');
        return {
          ...nounsState,
          currentScreen: 'CreateNounView',
          message: 'Create noun view',
        };
      case 'CREATENEWNOUN':
        // console.log('CREATENEWNOUNtriggered', action);

        const newNoun = action.payload;

        navigation.navigate('ListNounsView');
        return {
          ...nounsState,
          nouns: [...nounsState.nouns, newNoun],
          currentScreen: 'ListNounsView',
          message: 'Create your noun',
        };
      case 'READNOUN':
        // console.log('READNOUNtriggerd', action);

        // console.log(nounsState.nouns);
        read = collectReadNoun(nounsState.nouns, action.id);

        navigation.navigate('ReadNounView');
        return {
          ...nounsState,
          currentScreen: 'ReadNounView',
          noun: read,
        };
      case 'NAVIGATEUPDATENOUN':
        // console.log('UPDATENOUNtriggerd', action);

        data = collectReadNoun(nounsState.nouns, action.id);
        // console.log(data);

        navigation.navigate('UpdateNounView');
        return {
          ...nounsState,
          currentScreen: 'UpdateNounView',
          data: data,
        };
      case 'SETUPDATENOUN':

        // console.log('payload', action.payload);
        // console.log('noun to update', nounToUpdate);

        // change the value of the noun with payload data.
        result = collectUpdateNoun(nounsState, action.payload);

        // console.log('input data to method', result);

        navigation.navigate('ListNounsView');
        return {
          ...nounsState,
          currentScreen: 'ListNounsView',
          nouns: result,
        };
      case 'DELETENOUN':
        // console.log('DELETENOUNtriggered', action);

        deleete = collectDeleteNoun(action.id);

        navigation.navigate('DeleteNounView');
        return {
          ...nounsState,
          currentScreen: 'DeleteNounView',
          noun: deleete,
        };
      case 'LISTNOUNS':
        // console.log('LISTNOUNStriggered', action);

        list = collectListNouns(nounsState.nouns);

        navigation.navigate('ListNounsView');
        return {
          ...nounsState,
          currentScreen: 'ListNounsView',
          nouns: list,
        };
      default:
        throw new Error('Unknown action');
    }
  };

  // State en dispatch initialiseren met useReducer
  const [nounsState, dispatch] = useReducer(handleRequest, InitialNouns);

  // State en dispatch aanbieden via de context aan zijn kinderen
  return (
    <NounsContext.Provider value={{ nounsState, dispatch }}>
      {children}
    </NounsContext.Provider>
  );
};

// custom hook om eenvoudig context aan te spreken
export const useNounsContext = () => {
  return useContext(NounsContext);
};
