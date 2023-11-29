// ListNouns.js
import {
  SafeAreaView,
  View,
  Image,
  // Een FlatList component rendert alleen items op het scherm, waardoor de app beter presteert bij lange lijsten.
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from '../assets/UpfrontStyles'; // Import the styles module
import { useNounsContext } from '../../controller/NounsController';

import Icon from 'react-native-vector-icons/FontAwesome';

const NounsOverview = () => {
  const { dispatch } = useNounsContext();

  const handleNavigatie = (action, payload) => {
    // dispatch een actie en indien nodig een payload
    dispatch({ type: action, id: payload });
  };

  const IconButton = ({ text, iconName, onPress }) => {
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Icon name={iconName} size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigatie('CREATENOUN', 'new')}>
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigatie('READNOUN', 5)}>
        <Text style={styles.buttonText}>Read</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigatie('UPDATENOUN', 5)}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigatie('DELETENOUN', 5)}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNavigatie('LISTNOUNS')}>
        <Text style={styles.buttonText}>List</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NounsOverview;
