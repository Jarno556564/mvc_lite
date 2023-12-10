import { useState, useEffect } from 'react';
import { Button, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../assets/UpfrontStyles';
import { useNounsContext } from '../../controller/NounsController';

const UpdateNounView = () => {
    const [name, setName] = useState('');
    const [bornAt, setBornAt] = useState('');
    const [photo, setPhoto] = useState('');
    const { nounsState, dispatch } = useNounsContext();

    useEffect(() => {
        if (nounsState.data) {
            setName(nounsState.data.name || null);
            setBornAt(nounsState.data.bornAt || null);
            setPhoto(nounsState.data.photo || null)
        }
    }, [nounsState.data]);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.canceled) {
            setPhoto(result.assets[0].uri);
            // re render the Image component to show the new image
        }
    };

    const updateNoun = () => {
        const newNoun = {
            id: nounsState.data.id,
            name,
            bornAt,
            photo,
        };
        dispatch({ type: 'SETUPDATENOUN', payload: newNoun })
    }

    return (
        <View>
            <TextInput
                placeholder="name"
                onChangeText={name => setName(name)}
                defaultValue={nounsState.data.name} />
            <TextInput
                placeholder="Born At"
                onChangeText={bornAt => setBornAt(bornAt)}
                defaultValue={nounsState.data.bornAt} />
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200 }} />}
            <TouchableOpacity
                style={styles.button}
                onPress={updateNoun}
            >
                <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
        </View >
    );
};

export default UpdateNounView;