import { useState } from 'react';
import { Button, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../assets/UpfrontStyles';
import { useNounsContext } from '../../controller/NounsController';

const CreateNounView = () => {
    const [image, setImage] = useState(null);
    const [text, setText] = useState('');
    const [bornAt, setBornAt] = useState('');
    const { dispatch } = useNounsContext();


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View>
            <TextInput
                placeholder="name"
                onChangeText={text => setText(text)} />
            <TextInput
                placeholder="Born At"
                onChangeText={bornAt => setBornAt(bornAt)} />
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch({ type: 'CREATENOUN', text: text, bornAt: bornAt, photo: image })}
            >
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
        </View >
    );
};

export default CreateNounView;