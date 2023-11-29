import { View, Text } from 'react-native';
import { useNounsContext } from '../../controller/NounsController';

const ReadNounView = () => {
    const { state } = useNounsContext();
    console.log("noun", state.noun);
    return (
        <View>
            <Text>Read Screen</Text>
            <Text>{state.message}</Text>
            <Text>{state.noun.id}</Text>
            <Text>{state.noun.name}</Text>
            <Text>{state.noun.bornAt}</Text>
            <Text>{state.noun.photo}</Text>
        </View>
    );
};

export default ReadNounView;