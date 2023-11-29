import { Button, SafeAreaView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UsersList } from '../Lists';

const ListUsersView = () => {
  return (
    <>
      <UsersList />
    </>
  );
};

export default ListUsersView;
