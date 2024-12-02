import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import HomeScreen from './project-root/screens/home'; // Adjust the path if needed

const App = (): React.JSX.Element => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create ({
  container: {    
    backgroundColor: '#785C04',
    padding: 20,
    minHeight: '100%', // Covers the entire visible area without stretching
  },
})
export default App;
