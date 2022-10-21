import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native';
/**
 * show images in flat list react native
 * 
 */
export default function StudentRecord() {
  const students = [
    { name: 'Taimoor', id: 1, image: require('../assets/adaptive-icon.png') },
    { name: 'Waqas', id: 2, image: require('../assets/favicon.png') },
    { name: 'Kashif', id: 3, image: require('../assets/favicon.png') },
    { name: 'Umair', id: 4, image: require('../assets/favicon.png') },
  ]

  return (
    <FlatList
      data={students}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity style={styles.ImageClass} activeOpacity={.5} onPress={cl = () => {
            console.log(item.name);
          }}>

            <Image source={item.image}>

            </Image>
            <Text style={styles.textStyle}>{item.name}</Text>

          </TouchableOpacity>


        )
      }}
      keyExtractor={item => item.id}
    />
  )
}


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 14,
  },
  ImageClass:
  {
    width: 100,
    
    height: 44

  }
});