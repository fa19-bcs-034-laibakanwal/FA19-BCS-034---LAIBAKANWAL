import * as React from 'react';
import {useState} from 'react';
import { View, Text,useColorScheme,Appearance,StyleSheet } from 'react-native';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";


export default function SettingScreen({ navigation }) {

  const [current, setCurrent] = useState("test");
   

    const themetextstyle=current==='test' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle=
   current === 'test' ? styles.lightContainer : styles.darkContainer;

    return (
        <View style={[styles.container,themeContainerStyle]}>
           

<View style={{flexDirection:'row'}}>

<View style={{flexDirection:'row'}}>
<RadioButtonGroup
        containerStyle={{ marginBottom: 10 }}
        selected={current}
       
              onSelected={(value) =>{ 
          setCurrent(value)
          console.log(current)
         
         }
        }
        radioBackground="green"
      >
        
        <RadioButtonItem
         value="test" 
         
        label=""
          />
          <View style={{marginTop:20}}></View>
        <RadioButtonItem
          value="test2" 
        label=''
        />
      </RadioButtonGroup>
</View>
<View style={{flexDirection:'column'}}>
<View style={{marginTop:-2}}></View>
  <View style={{flexDirection:'column'}}><Text  style={[styles.text,themetextstyle]}>Light Mode</Text></View>
  <View style={{marginTop:18}}></View>
  <View style={{flexDirection:'column'}}><Text  style={[styles.text,themetextstyle]}>Dark Mode</Text></View></View>

   

   </View>
     
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    
  },
  lightContainer: {
    backgroundColor: 'white',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
    fontSize:20,
    marginLeft:20
  },
  darkThemeText: {
    color: 'white',
    fontSize:20,
    marginLeft:20
  },
});