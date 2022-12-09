import * as React from 'react';
import {useState} from 'react';
import { View, Text ,StyleSheet,TextInput,TouchableOpacity} from 'react-native';



export default function DetailsScreen({ navigation }) {
    const [userName, setUserName] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
          
                 
          <TextInput style={styles.input1}
        
          editable={true}
          value={userName}
          onChangeText={(username) => setUserName(username)}
          multiline={false}
          placeholder="Enter Your Name"
          placeholderTextColor="black"
          maxLength={200}
          />
            
        <TouchableOpacity 
       onPress={() =>
        { if(userName==''){
            alert("Name is Required")
            return;
          }
            navigation.navigate('Profile', {
                paramKey: userName,
              })
              setUserName('')
        }
 
      }
       >
      <Text style={styles.Button}>Submit</Text>
      </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input1: {
        width: 350,
        height: 45,
        fontSize:16,
        marginTop:250,
       
        paddingStart:20,
        borderColor: "#ff7700",
        alignItems: "center",
        borderWidth: 1,
        alignSelf:'center',
        borderRadius: 10,
      },
      Button: {
        fontSize: 15,
        width: 150,
        color: "white",
        marginTop:40,
        marginBottom:10,
        borderRadius: 10,
        backgroundColor: "#ff7700",
        textAlign: "center",
        alignSelf:'center',
        fontWeight: "bold",
        alignItems: "center",
        lineHeight: 40,
      },
})