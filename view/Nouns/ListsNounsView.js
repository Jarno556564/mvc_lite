import { View, Text } from 'react-native';
import { useNounsContext } from '../../controller/NounsController';
import { NounsList } from '../Lists';

const ListNounsView = () => {
  const { nounsState } = useNounsContext();
  return (
    <View>
      {/* <Text>List nouns page</Text>
      <Text>{nounsState.message}</Text> */}
      <NounsList action="READNOUN" />
    </View>
  );
};

export default ListNounsView;