import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from './src/context/BlogContext'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'

const Stack = createStackNavigator();

Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Blogs'>
        <Stack.Screen name="Blogs" component={IndexScreen} />
        <Stack.Screen name="ShowBlog" component={ShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <Navigator />
    </Provider>
  )
}