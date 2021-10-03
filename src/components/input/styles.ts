import { StyleSheet } from 'react-native';
import { THEME_COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: THEME_COLORS.disabled,
    borderRadius: 8,
    padding: 10,
  },
  title: {
    fontSize: 12,
    color: THEME_COLORS.text,
  },
});

export default styles;
