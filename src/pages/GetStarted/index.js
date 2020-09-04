import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Illustration} from '../../assets';
import {Button, Gap, Indicator} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Image source={Illustration} style={styles.avatar} />
          <Button title="SIGNUP" onPress={() => navigation.navigate("Register")}/>
          <Gap height={20} />
          <Button type="secondary" title="LOGIN" onPress={() => navigation.navigate("Login")}/>
          <Gap height={20} />
          <Button type="icon" title="continue with facebook" />
        </View>
        <View style={styles.indicator}>
          <Indicator />
        </View>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 9,
    justifyContent: 'space-between',
  },
  wrapper: {
    flex: 1,
  },
  avatar: {
    width: 360,
    height: 290,
    marginTop: 54,
    marginBottom: 50,
  },
  indicator: {
      alignItems: 'center',
  }
});
