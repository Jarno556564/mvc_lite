import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNounsContext } from '../../controller/NounsController';
import styles from '../assets/UpfrontStyles';
import IconButton from '../components/IconButton';

const ReadNounView = () => {
    const { nounsState, dispatch } = useNounsContext();
    const image = { uri: nounsState.noun.photo };
    // console.log("noun", nounsState);
    return (
        <View style={styles.flexContainer}>

            {nounsState.noun.photo && <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>}
            {/* {nounsState.noun.photo && <Image source={{uri: nounsState.noun.photo}} style={{ width: 200, height: 200 }}></Image>} */}

            <View>
                <Text style={styles.nameText}>{nounsState.noun.name}</Text>
                <Text style={styles.bornAtText}>{nounsState.noun.bornAt}</Text>
            </View>

            <View style={styles.row}>
                {/* <TouchableOpacity
                    style={styles.button}
                    onPress={() => dispatch({ type: 'NAVIGATEUPDATENOUN', id: nounsState.noun.id })}
                >
                    <Text style={styles.buttonText}> Update </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => dispatch({ type: 'DELETENOUN', id: nounsState.noun.id })}
                >
                    <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity> */}
                <IconButton
                    iconName={'pencil'}
                    onPress={() => dispatch({ type: 'NAVIGATEUPDATENOUN', id: nounsState.noun.id })}
                />
                <IconButton
                    iconName={'trash'}
                    onPress={() => dispatch({ type: 'DELETENOUN', id: nounsState.noun.id })}
                />
            </View>
        </View >
    );
};

export default ReadNounView;