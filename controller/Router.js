import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import LandingView from '../view/LandingView';

import NounsOverview from '../view/nouns/NounsOverview';
import ListNounsView from '../view/nouns/ListsNounsView';
import CreateNounView from '../view/nouns/CreateNounView';
import ReadNounView from '../view/nouns/ReadNounView';

import UsersOverview from '../view/users/UsersOverview';
import ListUsersView from '../view/users/ListsUsersView';
import ReadUserView from '../view/users/ReadUserView';

// Snelle opzet view
// const CreateNounView = () => <Text>Create screen</Text>;
// const ReadNounView = () => <Text>Read screen</Text>;
const UpdateNounView = () => <Text>Update screen</Text>;
const DeleteNounView = () => <Text>Delete screen</Text>;

const CreateUserView = () => <Text>Create screen</Text>;
// const ReadUserView = () => <Text>Read screen</Text>;
const UpdateUserView = () => <Text>Update screen</Text>;
const DeleteUserView = () => <Text>Delete screen</Text>;

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="LandingView">
      <Stack.Screen name="LandingView" component={LandingView} />

      <Stack.Screen name="NounsOverview" component={NounsOverview} />
      <Stack.Screen name="CreateNounView" component={CreateNounView} />
      <Stack.Screen name="ReadNounView" component={ReadNounView} />
      <Stack.Screen name="UpdateNounView" component={UpdateNounView} />
      <Stack.Screen name="DeleteNounView" component={DeleteNounView} />
      <Stack.Screen name="ListNounsView" component={ListNounsView} />

      <Stack.Screen name="UsersOverview" component={UsersOverview} />
      <Stack.Screen name="CreateUserView" component={CreateUserView} />
      <Stack.Screen name="ReadUserView" component={ReadUserView} />
      <Stack.Screen name="UpdateUserView" component={UpdateUserView} />
      <Stack.Screen name="DeleteUserView" component={DeleteUserView} />
      <Stack.Screen name="ListUsersView" component={ListUsersView} />
    </Stack.Navigator>
  );
};

export default Router;
