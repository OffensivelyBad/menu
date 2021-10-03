import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from '../menu';
import { NavigationPropList, NavigationScreens } from '../../models/navigation';
import EditMenu from '../edit_menu';
import styles from './styles';
import { useMenuItemStore } from '../../models/store';

const Stack = createStackNavigator<NavigationPropList>();

const App = () => {
  useMenuItemStore();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          presentation: 'modal',
        }}
      >
        <Stack.Screen
          name={NavigationScreens.Menu}
          component={Menu}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate(NavigationScreens.EditMenu)}
                style={styles.addButtonContainer}
              >
                <Text style={styles.addButton}>+</Text>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name={NavigationScreens.EditMenu}
          component={EditMenu}
          options={({ navigation }) => ({
            title: 'Add Item',
            headerLeft: () => (
              <Pressable
                onPress={() => navigation.pop()}
                style={styles.addButtonContainer}
              >
                <Text style={styles.textButton}>Cancel</Text>
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
