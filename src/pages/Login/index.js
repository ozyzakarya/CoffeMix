import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Illustration} from '../../assets';
import {Input, Button, Link, Indicator, Gap} from '../../components';

const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Image source={Illustration} style={styles.avatar} />
          <Text style={styles.welcome}>Welcome Back</Text>
          <Gap height={30}/>
          <Input />
          <Gap height={25}/>
          <Input />
          <Gap height={25}/>
          <View style={styles.button}>
          <Button title="LOGIN" onPress={() => navigation.replace("MainApp")}/>
          </View>
          <Gap height={40}/>
          <Button type="icon" title="continue with facebook" />
          <Gap height={40}/>
          <Link title="Don’t You have an account? Login" size={14} align="center"/>
        </View>
        <View style={styles.indicator}>
        <Indicator />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 52,
    paddingTop: 40,
  },
  wrapper: {
    flex: 1,
  },
  avatar: {
    width: 271,
    height: 227,
    marginBottom: 47
  },
  welcome: {
    fontSize: 21,
    color: '#965F41',
    textAlign: 'center'
  },
  button: {
    paddingHorizontal: 70
  },
  indicator: {
    marginTop: 24,
    alignItems: 'center',
}
});
