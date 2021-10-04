import * as React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  disabled?: boolean;
  onPress?: () => void;
}

const Button = (props: Props) => {
  const { title, disabled, onPress } = props;
  const buttonStyle = disabled ? [styles.container, styles.disabled] : styles.container;

  return (
    <Pressable
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;
