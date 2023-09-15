//import liraries
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import Button from '../../Components/Button';
import SCREENS from '../../constants/SCREENS';

// create a component
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Home Screen</Text>

      <Button
        title="Go to Chats"
        onPress={() => navigation.navigate(SCREENS.CHATS)}
      />
      <Button
        title="Go to Groups"
        onPress={() => navigation.navigate(SCREENS.GROUPS)}
      />
      <Button
        title="Go to GoogleMap"
        onPress={() => navigation.navigate(SCREENS.GOOGLE_MAP)}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default Home;
