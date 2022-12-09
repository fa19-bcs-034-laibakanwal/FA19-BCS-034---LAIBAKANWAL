import * as React from 'react';
import { View, Text,StyleSheet,SafeAreaView } from 'react-native';


const ProfileScreen = ({route}) => {
    
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
        
          <Text style={{ fontSize: 30, fontWeight: 'bold',marginTop:200 }}>
            Your Name is Below 
          </Text>
          <Text style={{ fontSize: 26, fontWeight: 'bold',marginTop:25 }}>
            {route.params.paramKey}
          </Text>
        </View>
        
      </SafeAreaView>
    );
  };
  
  export default ProfileScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 20,
    },
    heading: {
      fontSize: 25,
      textAlign: 'center',
      marginVertical: 10,
    },
    textStyle: {
      textAlign: 'center',
      fontSize: 16,
      marginVertical: 10,
    },
  });