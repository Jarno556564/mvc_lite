import { Button, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './assets/UpfrontStyles';

const LandingView = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.viewTop}>
      <Button
        onPress={() => navigation.navigate('NounsOverview', 'Yes')}
        title="Go to Nouns"
      />

      <Button
        onPress={() => navigation.navigate('UsersOverview', 'Yes')}
        title="Go to Users"
      />
    </View>
  );
};

export default LandingView;
