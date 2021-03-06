import React from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <>
      <TouchableOpacity style={styles.button} activeOpacity={0.6} {...rest}>
        <Text style={styles.textButton}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
