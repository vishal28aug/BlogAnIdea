import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import { Provider } from './src/context/BlogContext'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

const Stack = createStackNavigator();

Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Blogs'>
        <Stack.Screen name="Blogs" component={IndexScreen} />

        <Stack.Screen
          name="ShowBlog"
          component={ShowScreen}
          options={({ navigation, route }) => ({
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.dispatch(StackActions.popToTop())}>
                <FontAwesome5 style={{ fontSize: 20, marginLeft: 5 }} name='arrow-left' />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('EditBlog',{id:route?.params.id})}>
                <FontAwesome5 style={{ fontSize: 20, marginRight: 5 }} name='edit' />
              </TouchableOpacity>
            )
          })} />

        <Stack.Screen name="CreateBlog" component={CreateScreen} />
        
        <Stack.Screen name="EditBlog" component={EditScreen} />

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