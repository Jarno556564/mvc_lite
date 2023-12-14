// CreateNounView.js
import { useState, useEffect } from 'react';
import { Button, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../assets/UpfrontStyles';
import { useNounsContext } from '../../controller/NounsController';

const CreateNounView = () => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [bornAt, setBornAt] = useState('');
    const { nounsState, dispatch } = useNounsContext();

    useEffect(() => {
        // Toestemming vragen indien nodig voor toegang tot de image gallery van het apparaat
        (async () => {
            const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert(
                    'Permission required',
                    'Please grant permission to access the image gallery.'
                );
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const saveNoun = () => {
        const newNoun = {
            id: nounsState.nouns.length + 1,
            name,
            bornAt,
            photo: image,
        };

        dispatch({ type: 'CREATENEWNOUN', payload: newNoun })
    }

    return (
        <View style={styles.viewTop}>
            <TextInput
                placeholder="name"
                onChangeText={name => setName(name)} />
            <TextInput
                placeholder="Born At"
                onChangeText={bornAt => setBornAt(bornAt)} />
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            <TouchableOpacity
                style={styles.button}
                onPress={saveNoun}
            >
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
        </View >
    );
};

export default CreateNounView;