import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

export function Button({onPress}) {
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.6}
        onPress={onPress}>
        <Text style={styles.textButton}>Add</Text>
      </TouchableOpacity>
    </>
  );
}
