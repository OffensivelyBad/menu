import { StyleSheet } from 'react-native';
import { SHADOW, THEME_COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 8,
    height: 50,
    backgroundColor: THEME_COLORS.secondary,
    borderRadius: 8,
    ...SHADOW,
  },
  disabled: {
    backgroundColor: THEME_COLORS.disabled,
  },
  title: {
    fontSize: 24,
    color: THEME_COLORS.background,
    textAlign: 'center',
  },
});

export default styles;
