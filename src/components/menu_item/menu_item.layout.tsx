import * as React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

type Props = {
  description: string;
  image: string;
  price: string;
  title: string;
}

const MenuItem = (props: Props) => {
  const { description, image, price, title } = props;

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
