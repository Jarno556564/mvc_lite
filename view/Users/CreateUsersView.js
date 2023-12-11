// CreateUserView.js
import { useState } from 'react';
import { Button, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../assets/UpfrontStyles';
import { useUsersContext } from '../../controller/UsersController';

const CreateUserView = () => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [bornAt, setBornAt] = useState('');
    const { usersState, dispatch } = useUsersContext();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const saveUser = () => {
        const newUser = {
            id: usersState.users.length + 1,
            name,
            bornAt,
            photo: image,
        };

        dispatch({ type: 'CREATENEWUSER', payload: newUser })
    }

    return (
        <View>
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
                onPress={saveUser}
            >
                <Text style={styles.buttonText}>Create</Text>
            </TouchableOpacity>
        </View >
    );
};

export default CreateUserView;