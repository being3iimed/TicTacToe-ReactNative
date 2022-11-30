import react from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  SafeAreaView, 
  FlatList,
  TouchableOpacity, 
  StatusBar,
  Image,
  Dimensions,
  } from 'react-native';
import cloneDeep from 'lodash/cloneDeep';

const { height } = Dimensions.get('window');

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.SafeAreaView}/>
      <Statusbar barStyle={'light-content'}/>
      <View style={styles.tttContainer}>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 0,
    backgroundColor: 'navy',
  },
  screenContainer: {
    flex: 1,
  },
  boxContainer: {
    borderWidth: 5,
    borderColor: 'darkorange',
    backgroundColor: 'white',
    width: 100,
    height: 100,
    margin: 15,
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  tttContainer: {
    backgroundColor: 'navy',
    borderBottomWidth: 5,
    borderBottomColor: 'darkorange',
  },
  selection: {
    fontSize: 50,
  },
  resetBottomContainer: {
    borderTopWidth: 5,
    borderColor: 'navy',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: 325,
    height: 60,
    bottom: height * 0.05,
  },
});
