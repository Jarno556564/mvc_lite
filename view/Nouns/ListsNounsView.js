import { View, Text } from 'react-native';
import { useNounsContext } from '../../controller/NounsController';
import { NounsList } from '../Lists';

const ListNounsView = () => {
  const { state } = useNounsContext();
  return (
    <View>
      {/* <Text>List nouns page</Text>
      <Text>{state.message}</Text> */}
      <NounsList action="READNOUN" />
    </View>
  );
};

export default ListNounsView;