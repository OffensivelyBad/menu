import { StyleSheet } from 'react-native';
import { THEME_COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.background,
    paddingTop: 40,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 24,
    color: THEME_COLORS.text,
    margin: 8,
  },
  scrollViewContent: {
    flex: 1,
  },
});

export default styles;
