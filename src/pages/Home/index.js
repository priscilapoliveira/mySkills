import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome to the jungle</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill for jungle"
        placeholderTextColor="#555"
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <Text style={styles.textButton}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginTop: 50}]}>
        {' '}
        My skills in the jungle
      </Text>
    </View>
  );
}
