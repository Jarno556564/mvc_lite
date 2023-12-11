import { View, Text } from 'react-native';
import { useUsersContext } from '../../controller/UsersController';

const ReadUserView = () => {
    const { usersState } = useUsersContext();
    // console.log("user", usersState.user);
    return (
        <View>
            <Text>Read Screen</Text>
            <Text>{usersState.message}</Text>
            <Text>{usersState.user.id}</Text>
            <Text>{usersState.user.name}</Text>
            <Text>{usersState.user.bornAt}</Text>
            {nounsState.noun.photo && <Image source={{ uri: nounsState.noun.photo }} style={{ width: 200, height: 200 }} />}
        </View>
    );
};

export default ReadUserView;