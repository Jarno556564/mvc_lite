import { View, Text } from 'react-native';
import { useNounsContext } from '../../controller/NounsController';
import { NounsList } from '../Lists';
import styles from '../assets/UpfrontStyles';

const ListNounsView = () => {
  const { nounsState } = useNounsContext();
  return (
    <View style={styles.viewTop}>
      {/* <Text>List nouns page</Text>
      <Text>{nounsState.message}</Text> */}
      <NounsList action="READNOUN" />
    </View>
  );
};

export default ListNounsView;