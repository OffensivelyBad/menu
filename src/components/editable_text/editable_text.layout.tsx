import * as React from 'react';
import { Pressable, Text, TextStyle, StyleProp, TextInput } from 'react-native';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
  style?: StyleProp<TextStyle>
};

const EditableText = (props: Props) => {
  const tfRef = React.useRef<TextInput | null>(null);
  const { value, onChangeText, style, onSubmit } = props;
  const [editing, setEditing] = React.useState(false);

  React.useEffect(() => {
    if (editing) {
      tfRef?.current?.focus();
    }
  }, [editing, setEditing]);

  const onEndEditing = React.useCallback(() => {
    setEditing(false);
    onSubmit();
  }, [onSubmit, setEditing]);

  return (
    <>
      {
        editing ?
          <TextInput
            ref={tfRef}
            value={value}
            onChangeText={onChangeText}
            onEndEditing={onEndEditing}
            style={style}
          />
          :
          <Pressable onPress={() => setEditing(true)}>
            <Text style={style}>{value}</Text>
          </Pressable>
      }
    </>
  );
};

export default EditableText;
