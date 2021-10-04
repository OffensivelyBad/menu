import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import styles from './styles';
import { NavigationScreens } from '../../models/navigation';

type Props = {

};

const MenuListLayout = (props: Props) => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text>this is the layout</Text>
      <Pressable onPress={() => nav.navigate(NavigationScreens.Menu)}><Text>go</Text></Pressable>
    </View>
  );
};

export default MenuListLayout;
