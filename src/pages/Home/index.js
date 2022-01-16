import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button} from '../../components/Button';
import {SkillCard} from '../../components/SkillCard';

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
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginVertical: 30}]}>
        {' '}
        My skills in the jungle
      </Text>
      {mySkills.map(skill => (
        <SkillCard skill={skill} />
      ))}
    </View>
  );
}
