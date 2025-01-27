import React from 'react';
import {View, Text, TextInput, Pressable, TouchableOpacity} from 'react-native';
import styles from './Style';
import Icon from 'react-native-vector-icons/Ionicons';

const Register = props => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Zwallet</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textLogin}>Sign Up</Text>
        <Text style={styles.descLogin}>
          Create your account to access Zwallet.
        </Text>
        <View style={styles.wrapperInput}>
          <Icon name="person" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your username"
            keyboardType="email-address"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={styles.wrapperInput}>
          <Icon name="mail" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your e-mail"
            keyboardType="email-address"
            placeholderTextColor="#A9A9A9"
          />
        </View>
        <View style={styles.wrapperInput}>
          <Icon name="key" style={styles.icon} size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Create your password"
            placeholderTextColor="#A9A9A9"
            secureTextEntry
          />
        </View>
        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log('klik')}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.buttonActive}
            onPress={() => console.log('klik')}>
            <Text style={styles.buttonTextActive}>Sign Up</Text>
          </TouchableOpacity>
        </View> */}
        <View style={styles.textBottom}>
          <Text style={styles.textDontHave}>
            Already have an account? Let’s
          </Text>
          <Pressable onPress={() => props.navigation.navigate('Login')}>
            <Text style={styles.textSignUp}> Login</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Register;
