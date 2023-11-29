import { Button, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NounsList } from '../Lists';

const ListNounsView = () => {
  return (
    <>
      <NounsList />
    </>
  );
};

export default ListNounsView;