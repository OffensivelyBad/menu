import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { MenuItemModel } from '../../models';
import styles from './styles';

type Props = {
  item: MenuItemModel,
  onDelete: (item: MenuItemModel) => void;
}

const MenuItem = (props: Props) => {
  const { item: { description, image, price, title }, onDelete } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default MenuItem;
