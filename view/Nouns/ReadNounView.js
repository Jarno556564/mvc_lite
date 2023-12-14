import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { useNounsContext } from '../../controller/NounsController';
import styles from '../assets/UpfrontStyles';
import IconButton from '../components/IconButton';
import { LinearGradient } from 'expo-linear-gradient';

const ReadNounView = () => {
    const { nounsState, dispatch } = useNounsContext();
    const image = { uri: nounsState.noun.photo };
    // console.log("noun", nounsState);
    return (
        <View style={[styles.flexOne, styles.whitebg]}>

            <LinearGradient
                colors={['transparent', 'white']}
                style={{ height: '70%', width: '100%' }} >
                {nounsState.noun.photo && <ImageBackground source={image} resizeMode="cover" style={[styles.image]}></ImageBackground>}
            </LinearGradient>

            <View style={[styles.dflex, styles.row, styles.between]}>
                <View>
                    <Text style={styles.nameText}>{nounsState.noun.name}</Text>
                    <Text style={styles.bornAtText}>{nounsState.noun.bornAt}</Text>
                </View>

                <View style={styles.row}>
                    <IconButton
                        iconName={'pencil'}
                        onPress={() => dispatch({ type: 'NAVIGATEUPDATENOUN', id: nounsState.noun.id })}
                    />
                    <IconButton
                        iconName={'trash'}
                        onPress={() => dispatch({ type: 'DELETENOUN', id: nounsState.noun.id })}
                    />
                </View>
            </View>
        </View >
    );
};

export default ReadNounView;