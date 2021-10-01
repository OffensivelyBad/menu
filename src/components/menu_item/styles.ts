import { StyleSheet } from 'react-native';
import { THEME_COLORS, SHADOW } from '../../theme';

const CARD_HEIGHT = 123;
const BORDER_RADIUS = 8;

const styles = StyleSheet.create({
  container: {
    width: '96%',
    backgroundColor: THEME_COLORS.contentBackground,
    flexDirection: 'row',
    height: CARD_HEIGHT,
    borderRadius: BORDER_RADIUS,
    marginVertical: 4,
    alignSelf: 'center',
    ...SHADOW,
  },
  image: {
    height: CARD_HEIGHT,
    width: CARD_HEIGHT,
    marginEnd: 15,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  content: {
    justifyContent: 'space-around',
    flex: 1,
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
