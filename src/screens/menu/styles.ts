import { StyleSheet } from 'react-native';
import { THEME_COLORS } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME_COLORS.background,
  },
  title: {
    alignSelf: 'flex-start',
    fontSize: 24,
    color: THEME_COLORS.text,
    margin: 8,
  },
  listContainer: {
    paddingBottom: 30,
  },
  loadingMessage: {
    alignSelf: 'center',
  },
});

export default styles;
