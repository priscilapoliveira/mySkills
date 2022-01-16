import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import styles from './styles';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    setMySkills([...mySkills, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Welcome to the jungle</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill for jungle"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={handleAddNewSkill}>
        <Text style={styles.textButton}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, {marginVertical: 30}]}>
        {' '}
        My skills in the jungle
      </Text>
      {mySkills.map(skill => (
        <TouchableOpacity key={skill} style={[styles.buttonSkill]}>
          <Text style={[styles.textSkill]}>{skill} </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
