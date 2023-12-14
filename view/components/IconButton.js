import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../assets/UpfrontStyles';

export default IconButton = ({ text, iconName, onPress }) => {
    return (
        <TouchableOpacity style={styles.roundButton} onPress={onPress}>
            <Icon name={iconName} size={20} color="white" style={styles.icon} />
            {text && <Text style={styles.buttonText}>{text}</Text>}
        </TouchableOpacity>
    );
};