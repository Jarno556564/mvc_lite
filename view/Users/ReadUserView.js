import { View, Text } from 'react-native';
import { useUsersContext } from '../../controller/UsersController';

const ReadUserView = () => {
    const { state } = useUsersContext();
    console.log("user", state.user);
    return (
        <View>
            <Text>Read Screen</Text>
            <Text>{state.message}</Text>
            <Text>{state.user.id}</Text>
            <Text>{state.user.name}</Text>
            <Text>{state.user.bornAt}</Text>
            <Text>{state.user.photo}</Text>
        </View>
    );
};

export default ReadUserView;