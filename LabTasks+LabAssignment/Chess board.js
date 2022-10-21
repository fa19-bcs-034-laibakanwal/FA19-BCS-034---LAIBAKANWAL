import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
      </View>
      <View style={styles.row}>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
        <View style={styles.whiteBox}></View>
        <View style={styles.blackBox}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'brown',
    justifyContent: 'center',

  },
  row: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  blackBox:{
    backgroundColor:"black",
    width:"50px",
    height:"50px"
  },
  whiteBox:{
    backgroundColor:"#f5f5f5",
    width:"50px",
    height:"50px"
  }
});