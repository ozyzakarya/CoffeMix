import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Illustration} from '../../assets';
import {Input, Button, Link, Indicator, Gap} from '../../components';

const Register = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <Image source={Illustration} style={styles.avatar} />
          <Input />
          <Gap height={25}/>
          <Input />
          <Gap height={25}/>
          <Input />
          <Gap height={25}/>
          <View style={styles.button}>
          <Button title="SIGNUP"/>
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

export default Register;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 52,
    paddingTop: 43,
  },
  wrapper: {
    flex: 1,
  },
  avatar: {
    width: 271,
    height: 227,
    marginBottom: 47
  },
  button: {
    paddingHorizontal: 70
  },
  indicator: {
    marginTop: 24,
    alignItems: 'center',
}
});
