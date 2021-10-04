import * as React from 'react';
import { TextInput, KeyboardTypeOptions, View, Text } from 'react-native';
import styles from './styles';

type Props = {
  title?: string;
  text?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: (newText: string) => void;
}

const Input = (props: Props) => {
  const { title, onChangeText, text, placeholder, keyboardType } = props;
  const inputPlaceholder = placeholder ? placeholder : title ? title : '';

  return (
    <View style={styles.container}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <TextInput
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={text}
        placeholder={inputPlaceholder}
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

export default Input;
