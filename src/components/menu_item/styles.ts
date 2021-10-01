import { StyleSheet } from 'react-native';
import { THEME_COLORS, SHADOW } from '../../theme';

const CARD_HEIGHT = 123;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME_COLORS.contentBackground,
    flexDirection: 'row',
    height: CARD_HEIGHT,
    borderRadius: 8,
    overflow: 'hidden',
    margin: 8,
    ...SHADOW,
  },
  image: {
    height: CARD_HEIGHT,
    width: CARD_HEIGHT,
    marginEnd: 15,
  },
  content: {
    justifyContent: 'space-around',
    flexShrink: 1,
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
  price: {
    fontSize: 20,
    color: 'black',
  },
  description: {
    fontSize: 15,
    color: 'gray',
  },
});

export default styles;
