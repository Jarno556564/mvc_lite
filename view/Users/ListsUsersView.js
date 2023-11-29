import { View, Text } from 'react-native';
import { useUsersContext } from '../../controller/UsersController';
import { UsersList } from '../Lists';

const ListUsersView = () => {
  const { state } = useUsersContext();
  return (
    <View>
      <Text>Read user page</Text>
      <Text>{state.message}</Text>
      <UsersList action="READUSER" />
    </View>
  );
};

export default ListUsersView;
