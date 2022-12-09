import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Ionicons from '@expo/vector-icons/Ionicons';


// Screens
import Home from './screens/Home';
import Setting from './screens/Setting';
import Person from './screens/Profile';


//Screen names
const homeName = "Home";
const detailsName = "Profile";
const settingsName = "Setting";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
       
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70}
        }}>

        <Tab.Screen name={homeName} component={Home}
        options={{
         
          tabBarIcon : ({size,focused})=>(
            <Ionicons name='home' size={size} color ={focused ? 'tomato' : '#ccc'} />
            
          )
        }} />
        <Tab.Screen name={detailsName} component={Person} 
           options={{
            
            tabBarIcon : ({size,focused})=>(
              <Ionicons name='person' size={size} color ={focused ? 'tomato' : '#ccc'} />
              
            )
          }}/>
        <Tab.Screen name={settingsName} component={Setting} 
           options={{
            
            tabBarIcon : ({size,focused})=>(
              <Ionicons name='settings' size={size} color ={focused ? 'tomato' : '#ccc'} />
          
            )
          }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;