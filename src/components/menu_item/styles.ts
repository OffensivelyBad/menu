import { StyleSheet } from 'react-native';
import { THEME_COLORS, SHADOW } from '../../theme';

const IMAGE_HEIGHT = 123;
const CARD_HEIGHT = 170;
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
  subContainer: {

  },
  image: {
    height: IMAGE_HEIGHT,
    width: IMAGE_HEIGHT,
    marginEnd: 15,
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 2,
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
  imageURL: {
    fontSize: 12,
    color: 'gray',
  },
  deleteButton: {
    width: 100,
    backgroundColor: 'red',
    height: CARD_HEIGHT,
    borderRadius: BORDER_RADIUS,
    marginVertical: 4,
    alignSelf: 'center',
    marginEnd: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: 'white',
  },
});

export default styles;
