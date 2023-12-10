import { View, Text, Image } from 'react-native';
import { useNounsContext } from '../../controller/NounsController';

const ReadNounView = () => {
    const { nounsState } = useNounsContext();
    // console.log("noun", nounsState);
    return (
        <View>
            <Text>Read Screen</Text>
            <Text>{nounsState.message}</Text>
            <Text>{nounsState.noun.id}</Text>
            <Text>{nounsState.noun.name}</Text>
            <Text>{nounsState.noun.bornAt}</Text>
            {nounsState.noun.photo && <Image source={{ uri: nounsState.noun.photo }} style={{ width: 200, height: 200 }} />}
        </View>
    );
};

export default ReadNounView;