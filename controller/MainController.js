import { NavigationContainer } from '@react-navigation/native';
import { NounsController } from './NounsController';
import Router from './Router';
import { UsersController } from './UsersController';

const MainController = () => (
  <NavigationContainer>
    <NounsController>
      <UsersController>
        <Router />
      </UsersController>
    </NounsController>
  </NavigationContainer>
);

export default MainController;