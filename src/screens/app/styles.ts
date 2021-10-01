import { StyleSheet } from 'react-native';
import { THEME_COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.background,
    padding: 15,
    alignItems: 'center',
  },
  content: {
    maxWidth: 600,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 24,
    color: THEME_COLORS.text,
  },
});

export default styles;
