export type ColorSwatch = {
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
  background: string;
  contentBackground: string;
  disabled: string;
};

export const THEME_COLORS: ColorSwatch = {
  primary: '#3c4b53',
  secondary: '#70a2e7',
  tertiary: '#b373f2',
  text: 'black',
  background: 'white',
  contentBackground: 'white',
  disabled: '#babbba',
};

export const SHADOW = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.1,
  shadowRadius: 4.0,
  elevation: 4,
};
